import React, { useState, useEffect } from 'react'

const EditUser = (props) => {

    const initialState = {
        id: null,
        first_name: '',
        last_name: '',
        position: '',
        username: ''
    }

    const [user, setUser] = useState(initialState)

    useEffect(() => {
        setUser(props.currentUser)
    }, [props])

    const handleInput = (event) => {
        const { name, value } = event.target
        setUser({ ...user, [name]: value })
    }

    return (
        <div className="editUser">
            <form
                onSubmit={event => {
                    event.preventDefault()
                    props.updateUser(user.id, user)
                    setUser(initialState)
                }}
            >
                <input type="text" placeholder="First Name" name="first_name" value={user.first_name} onChange={handleInput} required/>
                <input type="text" placeholder="Last Name" name="last_name" value={user.last_name} onChange={handleInput} required/>
                <input type="text" placeholder="Position" name="position" value={user.position} onChange={handleInput} required/>
                <input type="text" placeholder="Username" name="username" value={user.username} onChange={handleInput} required/>
                <button>Update User</button>
            </form>
        </div>
    )
}

export default EditUser