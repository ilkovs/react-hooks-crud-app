import React, { useState } from 'react'

const Users = (props) => {

    const initialState = {
        id: null,
        first_name: '',
        last_name: '',
        position: '',
        username: ''
    }

    const [user, setUser] = useState(initialState)

    const handleInput = (event) => {
        const { name, value } = event.target
        setUser({ ...user, [name]: value })
    }

    return (
        <div className="newUser">
            <form
                onSubmit={event => {
                    event.preventDefault()
                    props.addUser(user)
                    setUser(initialState)
                }}
            >
                <input type="text" placeholder="First Name" name="first_name" value={user.first_name} onChange={handleInput} required/>
                <input type="text" placeholder="Last Name" name="last_name" value={user.last_name} onChange={handleInput} required/>
                <input type="text" placeholder="Position" name="position" value={user.position} onChange={handleInput} required/>
                <input type="text" placeholder="Username" name="username" value={user.username} onChange={handleInput} required/>
                <button>Add User</button>
            </form>
        </div>
    )
}

export default Users