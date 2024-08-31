import React, { useEffect, useState } from 'react'

export default function LocalStorage() {
    const[sid, setSid] = useState('');
    const[flag, setFlag] = useState(true);
    const[CFlag, setCFlag] = useState(true);
    const [userValue, setUserValue] = useState({
        name:"",
        email:"",
        password:"",
        cpassword:"",
    });
    const[arr, setArr] = useState(()=>{
        let data = localStorage.getItem('12ReactApp');
        if(data !== null){
            return JSON.parse(data);
        }else{
            return [];
        }
    });
    const inputHandler = (event) => {
        setUserValue({...userValue, [event.target.name]:event.target.value})
    }
    const addUser = (event) => {
        event.preventDefault();
       let res =  arr.filter((items,index)=>{
            return items.email === userValue.email;
        });
        if(res.length <= 0){
            
            if(userValue.password === userValue.cpassword){   
                setArr([...arr, userValue]);
            }else{
                alert('password is not match');
            }
        }else{
            alert('email is already exist')
        }
        setUserValue({
            name:"",
            email:"",
            password:"",
            cpassword:"",
        });
    }
    useEffect(()=>{
        localStorage.setItem('12ReactApp', JSON.stringify(arr));
    });
    const deleteUser = (id) => {
        setArr(arr.filter((items,index)=>{
            return id !== index;
        }));
    }
    const editUser = (id) => {
        setFlag(false);
        setCFlag(false);
        setSid(id);
      let newArr =  arr.filter((items,index)=>{
            return id === index;
        });
        setUserValue(newArr[0]);
    }
    const updateUser = () => {
        setFlag(true);
        setCFlag(true);
        arr[sid] = userValue;
        setUserValue({
            name:"",
            email:"",
            password:"",
            cpassword:"",
        });
    }
  return (
    <div className='container' style={{width:"50% ",margin:"auto"}}>
        <h2 className='text-center mt-2'>Crud App</h2>
        <hr />
        <form method="post" onSubmit={addUser}>
            <div className="mt-3">
                <input type="text" placeholder='enter name' value={userValue.name} name='name' className='form-control' onChange={inputHandler}  required pattern='[A-Z a-z]+'/>
            </div>
            <div className="mt-3">
                <input type="email" placeholder='enter email' value={userValue.email} name='email' className='form-control' onChange={inputHandler} required />
            </div>
            <div className="mt-3">
                <input type="password" placeholder='enter password' value={userValue.password} name='password' className='form-control' onChange={inputHandler} required />
            </div>
            {CFlag === true ?
            <div className="mt-3">
                <input type="password" placeholder='confirm password' value={userValue.cpassword} className='form-control'name='cpassword' onChange={inputHandler}  />
            </div> : "" }
            <div className="mt-3">
             {flag === true ? <button type='submit' className='btn btn-dark'>Submit</button> : "" }
            </div>
        </form>
             {flag === false ? <button type='button' className='btn btn-dark' onClick={updateUser}>Update</button> : "" }
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
