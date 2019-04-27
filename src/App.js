import React, { Component } from 'react'
import Header from './components/ui/Header/Header'
import Input from './components/ui/InputContainer/Input'
import { addBook, url } from "./utils/api"
import BookMenu from './components/ui/DisplayBooks/BookMenu'



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      books: [],
      title: "",
      author: ""
    }
    this.titleHandler = this.titleHandler.bind(this)
    this.authorHandler = this.authorHandler.bind(this)
    this.submitHandler = this.submitHandler.bind(this)
    this.apiHandler = this.apiHandler.bind(this)
  }
  titleHandler(event) {
    this.setState({
      title: event.target.value
    })

  }

  authorHandler(event) {
    this.setState({
      author: event.target.value
    })

  }
  apiHandler(event) {
    event.preventDefault()
    fetch(url + 'requestKey')
      .then(response => response.json())
      .then(data => {
        localStorage.setItem('apiKey', data.key)
      })
  }


  submitHandler(event) {
    event.preventDefault()
    const book = {
      title: this.state.title,
      author: this.state.author

    }
    addBook(book, (id) => {
      this.setState({
        books: [...this.state.books, { ...book, id }]
      })
    }
    )
    this.state.books.forEach(book => console.log(book))
  }


  componentDidMount() {
    console.log('mount')

    const key = localStorage.getItem('apiKey')

    if (key) {
      fetch(`${url} op=select &key=${key}`)
        .then(response => response.json())
        .then(data => {
          if (data.status === 'success') {
            this.setState({
              books: data.data
            })
          }
        })
    } else {
      fetch(url + 'requestKey')
        .then(response => response.json())
        .then(data => {
          fetch(`${url} op=select &key= ${data.key}`)
            .then(response => response.json())
            .then(data => {
              if (data.status === 'success') {
                this.setState({
                  books: data.data
                })
              }
            })
        })
    }
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Input titleHandler={this.titleHandler} authorHandler={this.authorHandler} submitHandler={this.submitHandler} apiHandler={this.apiHandler}/>

        <div className="display-books">

          <div className="container">
            <BookMenu id={this.id} title={this.title} author={this.author} />
            <div className="col-12">
              <ul className="list-group">

                {this.state.books.map((book) =>
                  (
                    <li key={this.book} className="list-item list-group-item d-flex align-items-center">
                      <div className="title">{book.title}</div>

                      <div className="author">{book.author}</div>

                      <div className="buttons">
                        <button type="button" className="btn btn-success">
                          Ändra
</button>
                        <button type="button" className="btn btn-danger">
                          Ta bort
</button>
                      </div>
                    </li>
                  ))}
              </ul>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default App
