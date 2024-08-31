import React, { useState } from 'react'

export default function Crud() {
    const[arr,setarr] = useState([])
    const[inputvalue, setInputValue] = useState({
        "name":"",
        "email":"",
        "password":"",
    })
    const inputhandler = (event) =>{
        setInputValue({...inputvalue, [event.target.name]:event.target.value})
    }
    const adduser = (event) => {
        event.preventDefault();
        setarr([...arr,inputvalue]);
        setInputValue({
            name:'',
            email:'',
            password:''
        })
    }
    const deletuser = (id) => {
      let newarray =  arr.filter((items,index)=>(
            (id !== index)
        ));
        setarr(newarray);
    }
  return (
    <div className='container' style={{width:"50%", margin:"auto"}}>
        <h2 className='mt-3 text-center'>Crud app</h2>
        <hr />
        <form method='post' onSubmit={adduser}>
            <div className='mt-3'>
                <input type="text" name='name' value={inputvalue.name} placeholder='enetr name' onChange={inputhandler} className='form-control' />
            </div>    
            <div className='mt-3'>
                <input type="email" name='email' value={inputvalue.email} placeholder='enetr email' onChange={inputhandler} className='form-control' />
            </div>       
            <div className='mt-3'>
                <input type="password" name='password' value={inputvalue.password} placeholder='enetr password' onChange={inputhandler} className='form-control' />
            </div>
            <div className='mt-3'>
               <button className='btn btn-dark' type='submit'>add</button>
            </div>
        </form>
        <table class="table">
            <thead>
                <tr>
                    <th>name</th>
                    <th>email</th>
                    <th>password</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {arr.map((items,index)=>(
                    (
                        <tr key={index}>
                          <td>{items.name}</td>
                          <td>{items.email}</td>
                          <td>{items.password}</td>
                          <td>
                            <button className='btn btn-danger' onClick={()=> deletuser(index)}>delete</button>
                          </td>
                        </tr>

                    )
                ))}
            </tbody>
        </table>
    </div>
  )
}
 