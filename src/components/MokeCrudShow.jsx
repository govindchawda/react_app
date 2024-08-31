import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function MokeCrudShow() {
    const navigate = useNavigate();
    const[arr, setArr] = useState([]);
    useEffect(()=>{
        try {
            axios.get('https://66ac788cf009b9d5c7322bd1.mockapi.io/Crud46').then((res)=>{
                setArr(res.data);
            });            
        } catch (error) {
            
        }
    });
    const deleteUser = (id) => {
        try {
            axios.delete(`https://66ac788cf009b9d5c7322bd1.mockapi.io/Crud46/${id}`);
        } catch (error) {
            
        }
    }
    const editUser = async(data) => {
        try {
            localStorage.setItem('react5Batch', JSON.stringify(data));
            navigate('/update');
        } catch (error) {
            
        }
    }
  return (
    <div className='container' style={{width:"50%", margin:"auto"}}>
        <table className="table">
            <thead>
                <tr>
                    <th>#</th>
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
                            <td>{index+1}</td>
                            <td>{items.name}</td>
                            <td>{items.email}</td>
                            <td>{items.password}</td>
                            <td>
                                <button className='btn btn-info ' onClick={()=> editUser(items)} >Edit</button> &nbsp;
                                <button className='btn btn-danger' onClick={()=> deleteUser(items.id)} >Delete</button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
  )
}
