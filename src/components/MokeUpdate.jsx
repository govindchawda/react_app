import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function MokeUpdate() {
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState({
        id:"",
        name:"",
        email:"",
        password:""
      });
    const inputHandlar = (event) => {
        setInputValue({...inputValue,[event.target.name] : event.target.value});
    }
    useEffect(()=>{
        let data = localStorage.getItem('react5Batch');
        if(data !== null){
            setInputValue(JSON.parse(data));
        }
    },[]);
    const UpdateUser = async (event) => {
        event.preventDefault();
         await axios.put(`https://66ac788cf009b9d5c7322bd1.mockapi.io/Crud46/${inputValue.id}`, inputValue);
       setInputValue({
        id:"",
        name:"",
        email:"",
        password:""
    });
    navigate('/ShowUser');
    }

  return (
    <div className='container' style={{width:"50%", margin:"auto"}} >
    <h2 className='text-center'>Add User</h2>
    <hr />
    <form  method="post" onSubmit={UpdateUser}>
         <div className="mt-3">
            <label >Enter Name</label>
            <input type="text" className='form-control' name='name' onChange={inputHandlar} value={inputValue.name} placeholder='Enter name' />
         </div>
         <div className="mt-3">
            <label >Enter email</label>
            <input type="email" className='form-control'value={inputValue.email} onChange={inputHandlar} name='email' placeholder='Enter email' />
         </div>
         <div className="mt-3">
            <label >Enter Name</label>
            <input type="password" className='form-control' onChange={inputHandlar} value={inputValue.password} name='password' placeholder='Enter password' />
         </div>
         <div className="mt-3">
            <button className='btn btn-dark' type='submit'>Update</button>
         </div>
    </form>
</div>
  )
}
