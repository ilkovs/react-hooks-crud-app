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
                        <tr key={index}>
                            <td>{user.id}</td>
                            <td onClick={() => props.editFirstName()}>{user.first_name}</td>
                            <td onClick={() => props.editLastName()}>{user.last_name}</td>
                            <td onClick={() => props.editPosition()}>{user.position}</td>
                            <td onClick={() => props.editUsername()}>{user.username}</td>
                            <td>
                                {/* <button className="edit" onClick={() => props.editUser(user)}>Edit</button> */}
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