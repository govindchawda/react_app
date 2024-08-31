import React, { useState } from 'react'
import { FaPen } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";

export default function Crudd() {
  const[arr, setArr] = useState([]);
  const[sid, setSid] = useState('');
  const[flag, setFlag] = useState(true)
  const[inputValue, setInputValue] = useState({
    Name:"",
    Email:"",
    Password:""
  });
  const inputHandlar = (event) => {
    setInputValue({...inputValue, [event.target.name]: event.target.value});
  }
  const addUser = (event) =>{
    event.preventDefault();
    setArr([...arr, inputValue]);
    setInputValue({
      Name:"",
    Email:"",
    Password:""
    });
  }
  const deleteUser = (id) => {
    setArr(arr.filter((items,index) => {
      return id !== index;
     }));
  }
  const editUser = (id) => {
    setFlag(false);
    setSid(id);
   let newArr = arr.filter((items,index)=>{
      return id === index;
    });
    setInputValue(newArr[0]);
  }
  const updateUser = () => {
    setFlag(true);
    arr[sid] = inputValue;
    setInputValue({
    Name:"",
    Email:"",
    Password:""
    });
  }
  return (
    <div className='container'>
        <div className='row d-flex' style={{justifyContent:"space-between"}}>
        <div className="col-sm-5">
          <h2 className='alert alert-dark bg-dark text-white mt-3'>Sign Up User</h2>
          <form method="post" onSubmit={addUser}>
            <div className="mt-3">
              <label >Enter Name</label>
              <input type="text" placeholder='Enter Name' className='form-control' onChange={inputHandlar} name='Name' value={inputValue.Name} />
            </div>
            <div className="mt-3">
              <label >Enter Name</label>
              <input type="email" placeholder='Enter Email' className='form-control' onChange={inputHandlar} name='Email' value={inputValue.Email} />
            </div>
            <div className="mt-3">
              <label >Enter Name</label>
              <input type="password" placeholder='Enter Password' className='form-control' onChange={inputHandlar} name='Password' value={inputValue.Password} />
            </div>
            <div className="mt-3">
              {flag === true ?<button className='btn btn-dark' type='submit'>Submit</button> : "" }
            </div>
          </form>
            {flag === false ?<button className='btn btn-dark' onClick={updateUser}>Update</button> : "" }
        </div>
        <div className='col-sm-6'> 
          <h2 className='alert alert-dark bg-dark mt-3 text-white'>Manage User</h2>
          <table class="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {arr.map((items,index)=>{
                return(
                  <tr key={index}>
                    <td>{items.Name}</td>
                    <td>{items.Email}</td>
                    <td>{items.Password}</td>
                    <td>
                    <FaPen onClick={()=> editUser(index)}  style={{cursor:"pointer", color:"blue"}}/>
                    <FaTrashCan onClick={()=> deleteUser(index)} className='m-2' style={{cursor:"pointer", color:"red"}} />
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
        </div>
    </div>
  )
}
