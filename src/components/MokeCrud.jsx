import axios from 'axios';
import React, {  useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function MokeCrud() {
  const navigate = useNavigate();
    const [inputValue, setInputValue] = useState({
      name:"",
      email:"",
      password:""
    });
    const inputHandlar = (event) => {
      try {
        setInputValue({...inputValue, [event.target.name] : event.target.value});
      } catch (error) {
        
      }
    } ;
    const addUser = async(event) => {
      try {
        event.preventDefault();
        const config = {headers: {
          'Content-Type': 'application/json'
        }};
         await axios.post('https://66ac788cf009b9d5c7322bd1.mockapi.io/Crud46', inputValue, config);
        setInputValue({
          name:"",
          email:"",
          password:"",
        });
        alert('user is succesFully added')
        navigate('/ShowUser');
      } catch (error) {
        console.log("0",error);
      };
    };
  return (
    <div className='container' style={{width:"50%", margin:"auto"}} >
            <h2 className='text-center'>Add User</h2>
            <hr />
            <form  method="post" onSubmit={addUser}>
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
                    <button className='btn btn-dark' type='submit'>Submit</button>
                 </div>
            </form>
    </div>
  )
}
