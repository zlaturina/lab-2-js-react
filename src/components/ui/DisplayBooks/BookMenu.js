import React, { Component } from 'react';

class BookMenu extends Component {
  render() {
    return (

      <div className="col-12">
        <ul className="list-group">
          <li className="list-item list-group-item d-flex align-items-center">
            <strong className="title">Titel</strong>

            <strong className="author">Författare</strong>

            <div className="buttons">
              <button type="button" className="btn btn-success">
                Ändra
            </button>
              <button type="button" className="btn btn-danger">
                Ta bort
            </button>
            </div>
          </li>
        </ul>
      </div>

    )
  }
}

export default BookMenu;