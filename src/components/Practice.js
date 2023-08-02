import React from 'react'

const Practice = (props) => {
    const {name, lname} = props
    return (
        <div>
            <h2>Fname - {name} Lname - {lname}</h2>
        </div>
    )
}

export default Practice
