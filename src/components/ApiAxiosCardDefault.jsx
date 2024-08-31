import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function ApiAxiosCardDefault() {
    const[arr, setArr] = useState([]);
    useEffect( ()=>{
          axios.get('https://jsonplaceholder.typicode.com/posts').then((res)=>{
            setArr(res.data);
          })
    },[])
  return (
        <div className='container'>
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
