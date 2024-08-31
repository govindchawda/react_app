import React, { useState } from 'react'

export default function ApiFetchTable() {
    const[arr, setArr] = useState([]);
    const getData = async() =>{
      let res = await  fetch('https://jsonplaceholder.typicode.com/posts');
      let data = await res.json();
      setArr(data);
    }
  return (
    <div className='container'>
        <button className='btn btn-primary' onClick={getData}>click</button>
        <table class="table">
            <thead>
                <tr>
                    <th>userId</th>
                    <th>id</th>
                    <th>tittle</th>
                    <th>body</th>
                </tr>
            </thead>
            <tbody>
                {arr.map((items,index)=>(
                    <tr key={index}>
                        <td>{items.userId}</td>
                        <td>{items.id}</td>
                        <td>{items.tittle}</td>
                        <td>{items.body}</td>
                        <td></td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}
