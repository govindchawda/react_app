import axios from 'axios';
import React, { useState } from 'react'

export default function ApiAxiosCard() {
    const[arr, setArr] = useState([]);
    const getData = async() =>{
      let res = await  axios.get('https://jsonplaceholder.typicode.com/posts');
      setArr(res.data);
    }
  return (
        <div className='container'>
            <button className='btn btn-primary' onClick={getData}>click</button>
             <div className="row">
                {arr.map((items,index)=>{
                    return(
                        <div className="col-sm-4">
                            <div className="card text-center" key={index}>
                                <h2 className='card-header'>{items.userId}</h2>
                                <h2 className='card-id'>{items.id}</h2>
                                <h5 className='card-body'>{items.title}</h5>
                                <p className='card-footer'>{items.body}</p>
                            </div>
                        </div>
                    )
                })}
             </div>
        </div>
  )
}
