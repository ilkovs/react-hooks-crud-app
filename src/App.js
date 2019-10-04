import React, { useState } from 'react';
import './App.scss';
import Header from './components/header'
import Users from './components/addUser'
import List from './components/list'

const App = () => {

  const usersData = [
    { id: 1, first_name: 'James', last_name: 'Smith', position: 'Developer', username: 'jsmith21' },
    { id: 2, first_name: 'Jack', last_name: 'Hughes', position: 'Newsroomer', username: 'jacky543' },
    { id: 3, first_name: 'Karla', last_name: 'Ferry', position: 'Manager', username: 'karlaf' }
  ]

  // const initialState = {
  //   id: null,
  //   first_name: '',
  //   last_name: '',
  //   position: '',
  //   username: ''
  // }

  const [users, setUsers] = useState(usersData)

  const addUser = user => {
    user.id = users.length + 1
    setUsers([...users, user])
  }

  const deleteUser = (id) => {
    // console.log('deleted')
    setUsers(users.filter(user => user.id !== id))
  }

  // const editUser = (user) => {
  //   console.log('editing user ' + user.id)
  // }

  const editFirstName = () => {
    console.log('editing first name...')
  }

  const editLastName = () => {
    console.log('editing last name...')
  }

  const editPosition= () => {
    console.log('editing position...')
  }

  const editUsername = () => {
    console.log('editing username...')
  }

  return (
    <div className="app">
      <Header />
      <Users addUser={addUser} />
      <List users={users} deleteUser={deleteUser} editFirstName={editFirstName} editLastName={editLastName} editPosition={editPosition} editUsername={editUsername}/>
    </div>
  );
}

export default App;
