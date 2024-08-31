import React, { useState } from 'react'
import { FaTrash , FaPencilAlt} from "react-icons/fa";
import { confirmable } from 'react-confirm';

export default function TestCrud() {
    const[arr, setArr] = useState([]);
    const[duArr, setDuArr] = useState([]);
    const[sid, setSid] = useState('');
    const[flag, setFlag] = useState(true);
    const[inputValue, setInputValue] = useState({
        userName:"",
        userEmail:"",
        userPassword:""
    })
    const inputHandler = (event) => {
        setInputValue({...inputValue, [event.target.name] : event.target.value});
    }
    const addUser = (event) => {
        event.preventDefault();
        setArr([...arr, inputValue]);
        setDuArr([...duArr, inputValue]);
        setInputValue({
            userName:"",
            userEmail:"",
            userPassword:""
        });
    }
    const deleteUser = (id) => {
        let x = confirmable('are u sure want do delete this user data');
        if(x === true){
            setArr(arr.filter((items,index)=>{
                return id !== index;
            }))
        }  
    }
    const editUser = (id) => {
        setFlag(false);
        setSid(id);
       let newArr = arr.filter((items,index)=>{
            return id === index;
        });
        setInputValue(newArr[0]);
    }
    const updateUser = () =>{
        setFlag(true);
        arr[sid] = inputValue;
        setInputValue({
            userName:"",
            userEmail:"",
            userPassword:""
        });
    }
    const searchUser = (event) => {
       let result = duArr.filter((items)=>{
            return items.userName.toLowerCase().includes(event.target.value.toLowerCase())||items.userEmail.toLowerCase().includes(event.target.value.toLowerCase())||items.userPassword.toLowerCase().includes(event.target.value.toLowerCase());
        });
        setArr(result);
    }
  return (
    <div className='container d-flex' style={{justifyContent:"space-between"}}>
        <div className="col-sm-5">
           <div className='d-flex mt-3' style={{justifyContent:"space-between"}}>
             <h2>Sign Up</h2> <input type="search" name="" onChange={searchUser} placeholder='Search User' style={{width:"50%"}} className='form-control' id="" />
           </div>
            <hr />
            <form method="post" onSubmit={addUser}>
               <div className='mt-4'>
                  <label>Enter name</label>
                  <input type="text" name='userName' className='form-control mt-3' value={inputValue.userName} placeholder='Enter Name' onChange={inputHandler} required pattern='[A-Z a-z]+' />
               </div>
               <div className='mt-3'>
                  <label>Enter EMAIL</label>
                  <input type="email" name='userEmail' className='form-control mt-3' value={inputValue.userEmail} placeholder='Enter Email' onChange={inputHandler}required />
               </div>
               <div className='mt-3'>
                  <label>Enter Password</label>
                  <input type="password" name='userPassword' className='form-control mt-3' value={inputValue.userPassword} placeholder='Enter Password' onChange={inputHandler} required />
               </div>
               <div className='mt-3'>
                  {flag === true ? <button className='btn btn-dark' type='submit'>Submit</button> : "" }
               </div>
            </form>
                  {flag === false ? <button className='btn btn-dark' onClick={updateUser} type='button'>Update</button> : "" } 
        </div>
        <div className="col-sm-6">
                <h2 className='text-center'>Manage User</h2>
                <hr />
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
                                <td>{items.userName}</td>
                                <td>{items.userEmail}</td>
                                <td>{items.userPassword}</td>
                                <td>
                                <FaTrash onClick={()=> deleteUser(index)} className='m-3' style={{color:"red",cursor:"pointer"}} />
                                <FaPencilAlt onClick={()=> editUser(index)} className='m-3' style={{color:"blue",cursor:"pointer"}} />

                                </td>
                            </tr>
                       )})}
                    </tbody>
                </table>
        </div>
    </div>
  )
}
