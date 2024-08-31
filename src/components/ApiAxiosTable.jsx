import axios from 'axios';
import React, { useState } from 'react'

export default function ApiAxiosTable() {
    const[arr, setArr] = useState([]);
    const getData = async() =>{
      let res = await  axios.get('https://jsonplaceholder.typicode.com/posts');
      setArr(res.data);
    }
  return (
        <div className='container'>
            <button className='btn btn-primary' onClick={getData}>click</button>
             <table class="table">
                <thead>
                    <tr>
                        <th>userID</th>
                        <th>id</th>
                        <th>title</th>
                        <th>body</th>
                    </tr>
                </thead>
                <tbody>
                  {arr.map((items,index)=>{
                    return(
                        <tr key={index}>
                            <td>{items.userId}</td>
                            <td>{items.id}</td>
                            <td>{items.title}</td>
                            <td>{items.body}</td>
                        </tr>
                    )
                  })}
                </tbody>
             </table>
        </div>
  )
}
