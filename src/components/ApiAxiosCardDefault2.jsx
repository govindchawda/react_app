import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function ApiAxiosCardDefault2() {
    const[arr, setArr] = useState([]);
    useEffect ( ()=>{
          axios.get('https://jsonplaceholder.typicode.com/users').then((res)=>{
              setArr(res.data);
          })
    },[])
  return (
        <div className='container'>
             <div className="row">
                {arr.map((items,index)=>{
                    return(
                        <div className="col-sm-4 m" style={{height:"600px"}}>
                            <div className="card text-center" key={index} style={{height:"100%"}}>
                                <h2 className='card-header'>{items.name}</h2>
                                <div className='d-flex' style={{flexWrap:"wrap"}}>
                                    <h2 className='card-p'>{items.username}</h2>
                                    <p className='card-footer'>{items.address.street}</p>
                                    <h5 className='card-footer'>{items.email}</h5>
                                    <p className='card-footer'>{items.address.suite}</p>
                                    <p className='card-footer'>{items.address.city}</p>
                                    <p className='card-footer'>{items.address.zipcode}</p>
                                    <p className='card-footer'>{items.address.geo.lat}</p>
                                    <p className='card-footer'>{items.address.geo.lng}</p>
                                    <p className='card-footer'>{items.phone}</p>
                                    <p className='card-footer'>{items.website}</p>
                                    <p className='card-footer'>{items.company.name}</p>
                                    <p className='card-footer'>{items.company.catchPhrase}</p>
                                    <p className='card-footer'>{items.company.bs}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
             </div>
        </div>
  )
}
