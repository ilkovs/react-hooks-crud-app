import React from 'react'

const List = (props) => {

    const emptyList = "User's list is empty."

    return (
        <div className="list">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Position</th>
                        <th>Username</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {props.users < 1 ? `${emptyList}` : props.users.map((user, index) => (
                        <tr key={index} className="row">
                            <td>{user.id}</td>
                            <td>{user.first_name}</td>
                            <td>{user.last_name}</td>
                            <td>{user.position}</td>
                            <td>{user.username}</td>
                            <td>
                                <button className="edit" onClick={() => props.editRow(user)}>Edit</button>
                                <button className="delete" onClick={() => props.deleteUser(user.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div >
    )
}

export default List