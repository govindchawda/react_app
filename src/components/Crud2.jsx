import React, { useState } from 'react'

export default function Crud2() {
    const[arr, setArr] = useState([])
    const[flag, setFlag] = useState(true)
    const[sid, setSid] = useState('')
    const [userValue, setUserValue] = useState({
        name:"",
        email:"",
        password:""
    });
    const inputHandler = (event) => {
        setUserValue({...userValue, [event.target.name]:event.target.value});
    }
    const addUser = (event) => {
        event.preventDefault();
        setArr([...arr, userValue]);
        setUserValue({
            "name":"",
            "email":"",
            "password":""
        })
    }
    const deleteUser = (id) => {
      let result =  arr.filter((items,index)=>{
            return id !== index;
        });
        setArr(result)
    }
    const editUser = (id) => {
        setFlag(false)
        setSid(id)
        let result =  arr.filter((items,index)=>{
            return id === index;
        });
        setUserValue(result[0])
    }
    const updateUser = () => {
        setFlag(true)
        arr[sid] = userValue;
        setUserValue({
            "name":"",
            "email":"",
            "password":""
        })
    }
  return (
    <div className='container' style={{width:"50% ",margin:"auto"}}>
        <h2 className='text-center mt-2'>Crud App</h2>
        <hr />
        <form method="post" onSubmit={addUser}>
            <div className="mt-3">
                <input type="text" placeholder='enter name' value={userValue.name} name='name' className='form-control' onChange={inputHandler} />
            </div>
            <div className="mt-3">
                <input type="email" placeholder='enter email' value={userValue.email} name='email' className='form-control' onChange={inputHandler} />
            </div>
            <div className="mt-3">
                <input type="password" placeholder='enter password' value={userValue.password} name='password' className='form-control' onChange={inputHandler} />
            </div>
            <div className="mt-3">
              { flag === true ? <button type='submit' className='btn btn-dark'>Submit</button> : ""}
            </div>
        </form>
               {flag === false ? <button type='button' className='btn btn-dark' onClick={updateUser}>Update</button> : ""}
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
                        <td>{items.name}</td>
                        <td>{items.email}</td>
                        <td>{items.password}</td>
                        <td>
                            <button className='btn btn-dark' onClick={()=> deleteUser(index)}>Delete</button>
                            <button className='btn btn-info' onClick={()=> editUser(index)}>Edit</button>
                        </td>
                </tr>
                )
               })}
            </tbody>
        </table>
    </div>
  )
}
