import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BiSolidPencil } from "react-icons/bi";
import { FaRegTrashCan } from "react-icons/fa6";

export default function MokeApi() {
  const[arr, setArr] = useState([]);
  const [sid, setSid] = useState('');
  const[flag, setFlag] = useState(true);
  const [inputValue, setInputValue] = useState({
    name:"",
    email:"",
    password:""
  });
  const inputHandlar = (event) => {
    setInputValue({...inputValue, [event.target.name] : event.target.value});
  } ;
  const addUser = async(event) => {
    try {
      event.preventDefault();
      const config = {headers: {
        'Content-Type': 'application/json'
      }};
      let res = await axios.post('https://66ac788cf009b9d5c7322bd1.mockapi.io/Crud46', inputValue, config);
      setInputValue({
        name:"",
        email:"",
        password:"",
      });
    } catch (error) {
      console.log("0",error);
    };
  };
  useEffect(()=>{
    try {
      axios.get('https://66ac788cf009b9d5c7322bd1.mockapi.io/Crud46').then((res)=>{
        setArr(res.data);
      },[arr]);
    } catch (error) {
      console.log('1',error);
    };
  }, [arr]);
  const deleteUser = async (id) => {
    try {
     await axios.delete(`https://66ac788cf009b9d5c7322bd1.mockapi.io/Crud46/${id}`);
    } catch (error) {
      console.log("2", error);
    };
  };
  const editUser = async(id) => {
    try {
      setFlag(false);
      setSid(id);
     let res = await axios.get(`https://66ac788cf009b9d5c7322bd1.mockapi.io/Crud46/${id}`);
      setInputValue(res.data);
    } catch (error) {
      console.log("3", error);
    };
  };
  const updateUser = () => {
    try {
      setFlag(true);
      axios.put(`https://66ac788cf009b9d5c7322bd1.mockapi.io/Crud46/${sid}`, inputValue);
      setInputValue({
        name:"",
        email:"",
        password:"",
      })
    } catch (error) {
    console.log("4",error);  
    };
  };
  return (
    <div className='container'>
    <div className='row d-flex' style={{justifyContent:"space-between"}}>
    <div className="col-sm-5">
      <h2 className='alert alert-dark bg-dark text-white mt-3'>Mock Api : Signup</h2>
      <form method="post" onSubmit={addUser}>
        <div className="mt-3">
          <label >Enter Name</label>
          <input type="text" placeholder='Enter Name' className='form-control' onChange={inputHandlar} name='name' value={inputValue.name} required pattern='[A-Z a-z]+' />
        </div>
        <div className="mt-3">
          <label >Enter Name</label>
          <input type="email" placeholder='Enter Email' className='form-control' onChange={inputHandlar} name='email' value={inputValue.email}  required/>
        </div>
        <div className="mt-3">
          <label >Enter Name</label>
          <input type="password" placeholder='Enter Password' className='form-control' onChange={inputHandlar} name='password' value={inputValue.password} required />
        </div>
        <div className="mt-3">
          {flag === true ? <button className='btn btn-dark' type='submit'>Submit</button> : "" }
        </div>
      </form>
       {flag !== true ? <button className='btn btn-dark' type='button' onClick={updateUser}>update</button> : "" } 
    </div>
    <div className='col-sm-6'>
      <div><h2 className='alert alert-dark bg-dark mt-3 text-white'>Manage User</h2></div><div></div>
      <table className="table">
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
                <td>{items.name}</td>
                <td>{items.email}</td>
                <td>{items.password}</td>
                <td>
                <BiSolidPencil onClick={()=> editUser(items.id)} style={{cursor:"pointer", color:"blue",marginRight:"4px"}} />
                <FaRegTrashCan onClick={()=> deleteUser(items.id)} style={{cursor:"pointer", color:"red",marginLeft:"4px"}}/>
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
// import axios from 'axios';
// import React, { useState } from 'react'
// import { FaPen } from "react-icons/fa";
// import { FaTrashCan } from "react-icons/fa6";
// export default function MockApi() {
 
// //   https://66ab77ad636a4840d7cacb7e.mockapi.io/reactcrudapp
//  const[inputValue, setInputValue] = useState({
//     name:"",
//     email:"",
//     password:""
//   });
//   const inputHandlar = (event) => {
//     setInputValue({...inputValue, [event.target.name]: event.target.value});
//   }
//   const addUser = async (event) =>{
//     event.preventDefault();
    // const config = {headers: {
    //     'Content-Type': 'application/json'
    //   }}
//     // console.log(inputValue)
//    let res =  await axios.post('https://66ab77ad636a4840d7cacb7e.mockapi.io/reactcrudapp', inputValue, config);
//     console.log(res);    
// }

//   return (
    // <div className='container'>
    //     <div className='row d-flex' style={{justifyContent:"space-between"}}>
    //     <div className="col-sm-5">
    //       <h2 className='alert alert-dark bg-dark text-white mt-3'>Mock Api : Signup</h2>
    //       <form method="post" onSubmit={addUser}>
    //         <div className="mt-3">
    //           <label >Enter Name</label>
    //           <input type="text" placeholder='Enter Name' className='form-control' onChange={inputHandlar} name='name' value={inputValue.name} />
    //         </div>
    //         <div className="mt-3">
    //           <label >Enter Name</label>
    //           <input type="email" placeholder='Enter Email' className='form-control' onChange={inputHandlar} name='email' value={inputValue.email} />
    //         </div>
    //         <div className="mt-3">
    //           <label >Enter Name</label>
    //           <input type="password" placeholder='Enter Password' className='form-control' onChange={inputHandlar} name='password' value={inputValue.password} />
    //         </div>
    //         <div className="mt-3">
    //         <button className='btn btn-dark' type='submit'>Submit</button>
    //         </div>
    //       </form>
    //     </div>
    //     <div className='col-sm-6'>
    //       <h2 className='alert alert-dark bg-dark mt-3 text-white'>Manage User</h2>
    //       <table class="table">
    //         <thead>
    //           <tr>
    //             <th>Name</th>
    //             <th>Email</th>
    //             <th>Password</th>
    //           <th>Action</th>              
    //           </tr>
    //         </thead>
    //         <tbody>
              
    //         </tbody>
    //       </table>
    //     </div>
    //     </div>
    // </div>
//   )
// }
