import React, { useState } from 'react';
import './App.scss';
import Header from './components/header'
import Users from './components/addUser'
import List from './components/list'
import EditUser from './components/editUser'

const App = () => {

  const usersData = [
    { id: 1, first_name: 'James', last_name: 'Smith', position: 'Developer', username: 'jsmith21' },
    { id: 2, first_name: 'Jack', last_name: 'Hughes', position: 'Newsroomer', username: 'jacky543' },
    { id: 3, first_name: 'Karla', last_name: 'Ferry', position: 'Manager', username: 'karlaf' }
  ]

  const initialState = {
    id: null,
    first_name: '',
    last_name: '',
    position: '',
    username: ''
  }

  const [users, setUsers] = useState(usersData)
  const [editing, setEditing] = useState(false)
  const [currentUser, setNewData] = useState(initialState)

  const addUser = user => {
    user.id = users.length + 1
    setUsers([...users, user])
  }

  const deleteUser = (id) => {
    // console.log('deleted')
    setUsers(users.filter(user => user.id !== id))
  }

  const editRow = user => {
    setEditing(true)
    setNewData({
      id: user.id,
      first_name: user.first_name,
      last_name: user.last_name,
      position: user.position,
      username: user.username
    })
  }

  const updateUser = (id, updatedUser) => {
    setNewData(false)
    setUsers(users.map(user => (user.id === id ? updatedUser : user)))
  }

  return (
    <div className="app">
      <Header />
      {editing ?
        <EditUser editing={editing} setEditing={setEditing} currentUser={currentUser} updateUser={updateUser} />
        :
        <Users addUser={addUser} />
      }
      <List users={users} deleteUser={deleteUser} editRow={editRow} />
    </div>
  );
}

export default App;
