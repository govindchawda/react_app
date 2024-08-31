import React, { useState } from 'react'

export default function Crid() {
    const[inputvalue, setInputValue] = useState({
        name:"",
        email:"",
        password:"",
    });
    const[arr, setArr] = useState([])
    const[searcharr, setsearchArr] = useState([])
    const[sid, setSid] = useState('')
    const[flag, setFlag] = useState(true);
    const inputhandler = (event) => {
        setInputValue({...inputvalue, [event.target.name]: event.target.value});
    }
    const signupuser = (event) => {
        event.preventDefault();
        setArr([...arr, inputvalue]);
        setsearchArr([...searcharr, inputvalue]);
        setInputValue({
            name:"",
            email:"",
            password:"",
        });
    }
    const deletedata = (id) => {
        let x = ('delete')
        if
        (x !== true){
            let newarray = arr.filter((items,index)=>{
                return id !== index;
            });
            setArr(newarray)
        }
    }
    const edituser = (id) => {
        setFlag(false)
        setSid(id)
      let newarray =  arr.filter((items,index)=>{
            return id === index
        });
        setInputValue(newarray[0])
    }
    const updateUser = () => {
        setFlag(true)
        arr[sid] = inputvalue;
        setInputValue({
            name:"",
            email:"",
            password:"",
        })
    }
    const searchUser = (event) => {
       let result = searcharr.filter((items,index)=>{
            return items.name.toLowerCase().includes(event.target.value.toLowerCase())|items.email.toLowerCase().includes(event.target.value.toLowerCase())|items.password.toLowerCase().includes(event.target.value.toLowerCase())
        });
        setArr(result)
    }
  return (
    <div className='container' style={{width:"50%"}}>
        <h2 className='text-center mt-4'>crud app</h2>
        <hr />
        <form onSubmit={signupuser}>
            <div className="mt-3">
                <input type="search" placeholder='Search' className='form-control' onChange={searchUser} />
            </div>
            <div className='mt-3'>
                <input type="text" placeholder='enter name' value={inputvalue.name}  name='name' className='form-control' onChange={inputhandler} />
            </div>
            <div className='mt-3'>
                <input type="email" placeholder='enter email' name='email' className='form-control' value={inputvalue.email}  onChange={inputhandler}/>
            </div>
            <div className='mt-3'>
                <input type="password" placeholder='enter password' name='password'  className='form-control' value={inputvalue.password} onChange={inputhandler}/>
            </div>
            <div className='mt-3'>
                {flag === true ? <button className='btn btn-dark' type='submit'>Submit</button>:"" }
            </div>
        </form>
            <div className='mt-3'>
                {flag === false ? <button className='btn btn-dark' onClick={updateUser}>Update</button> : "" }
            </div>
            <div className='mt-3'>
                {/* <button className='btn btn-dark'onClick={()=> updateuser(index)}>Update</button> */}
            </div>
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
                {arr.map((items,index)=>{
                    return(
                    <tr>
                        <td key={index}>{items.name}</td>
                        <td key={index}>{items.email}</td>
                        <td key={index}>{items.password}</td>
                        <td>
                            <button className='btn btn-danger' onClick={()=> deletedata(index)}>delete</button>
                            <button className='btn btn-info' onClick={()=> edituser(index)}>edit</button>
                        </td>
                    </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
  )
}
