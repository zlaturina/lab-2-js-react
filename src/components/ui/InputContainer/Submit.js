import React from 'react'

const Submit = props => {

    return (
        
        <div>
            <button
                type="submit"
                className="btn btn-primary btn-lg btn-block"
                onClick={props.submitHandler}
            >
                Spara
</button>
            <button
                type="submit"
                className="btn btn-primary btn-lg btn-block"
                onClick={props.apiHandler}
            >
                Återställ
</button>
        </div>
    )
}

export default Submit;