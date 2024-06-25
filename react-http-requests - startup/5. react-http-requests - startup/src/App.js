
import React, { useEffect, useState } from 'react';
import UserForm from './Components/UserForm';
import './App.css';
import UserDetails from './Components/UserDetails';
import axios from 'axios';
import Loader from './Components/Loader';


function App() {
  let [showForm, setShowForm] = useState(false);
  let [users, setUsers] = useState([]);
  let [loader, setLoader] = useState(false);
  let [errorMessage, setErrorMessage] = useState(null);
  let [editMode, setEditMode] = useState(false);
  let [userToEdit,setUser] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  function addUserHandler() {
    setEditMode(false);
    setShowForm(true);
  }

  function closeForm() {
    setShowForm(false)
  }

  function onCreateUser(user) {
    // fetch("https://react-f2389-default-rtdb.firebaseio.com/users.json",{
    //   method : 'POST',
    //   body : JSON.stringify(user),
    //   headers : {
    //     'content-type' : 'aaplication/json'
    //   }
    // })
    // .then((res)=>{
    //   console.log(res);
    // })
    if(!editMode){
    axios.post('https://react-f2389-default-rtdb.firebaseio.com/users.json', user)
      .then((res) => {
        console.log(res);
        fetchUsers();
      })}
      else{
        console.log(user);
        console.log(userToEdit);
        axios.put('https://react-f2389-default-rtdb.firebaseio.com/users/'+userToEdit.id+'.json', user)
        .then((response)=>{
          console.log(response);
          fetchUsers();
        })
        .catch((error)=>{
          setErrorMessage(error.message);
        })
      }
      
      setShowForm(false);
  }

  function onEditUser(user){
    setEditMode(true);
    setUser(user);
    setShowForm(true);
  }

  function onDeleteUser(user){
    let del = window.confirm("Do you really want to delete " + user.firstName + " " + user.lastName);
    if(del){
      axios.delete('https://react-f2389-default-rtdb.firebaseio.com/users/'+user.id+'.json', user)
      .then((response)=>{
        console.log(response);
      })
      .catch((error)=>{
        setErrorMessage(error.message);
      })
    }
    fetchUsers();
    setShowForm(false);
  }

  function fetchUsers() {
    setLoader(true);
    setErrorMessage(null);
    setTimeout(() => {
      fetch('https://react-f2389-default-rtdb.firebaseio.com/users.json')
        .then((res) => {
          return res.json();
        }).then((data) => {
          console.log(data);
          let usersData = [];
          for (let key in data) {
            usersData.push({ ...data[key], id: key });
            setUsers(usersData);
            console.log(users);
            setLoader(false);
          }
        }).catch((error)=>{
          console.log(error.message);
          setErrorMessage(error.message);
          setLoader(false);
        })
    }, 1000);
  }

 
  return (
    <div>
      <div className='page-header'>
        <button className='btn btn-success' onClick={addUserHandler}>Add User</button>
        <button className='btn btn-normal' onClick={fetchUsers}>Get Users</button>
      </div>
      {!loader && !errorMessage && <UserDetails users={users}
                                                onEditUser={onEditUser}
                                                onDeleteUser={onDeleteUser}></UserDetails>}
      {errorMessage && <p style={{textAlign : 'center'}}>Failed to load...</p>}
      {loader && <Loader></Loader>}
      {showForm && <UserForm closeForm={closeForm}
                             onCreateUser={onCreateUser}
                             fetchUsers={fetchUsers}
                             editMode={editMode}
                             user={userToEdit}></UserForm>}
                             
    </div>
   
  );
}

export default App;
