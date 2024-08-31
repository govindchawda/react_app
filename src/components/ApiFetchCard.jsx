// import React, { useState } from 'react'

// export default function ApiFetchCard() {
//     const[arr, setArr] = useState([]);
//     const getData = async() =>{
//       let res = await  fetch('https://jsonplaceholder.typicode.com/posts');
//       let data = await res.json();
//       setArr(data);
//     }
//   return (
//         <div className='container'>
//             <button className='btn btn-primary' onClick={getData}>click</button>
//             <div className="row d-flex">
//                 {arr.map((items,index)=>{
//                     return(
//                         <div className="col-sm-4">
//                             <div className="card text-center p-3" key={index}>
//                                 <h2 className='card-header'>{items.userId}</h2>
//                                 <h2 className='card-id'>{items.id}</h2>
//                                 <h3 className='card-body'>{items.title}</h3>
//                                 <p className='card-footer'>{items.body}</p>
//                             </div>
//                         </div>
//                     )
//                 })}
//             </div>
//         </div>
//   )
// }

import React, { useState } from 'react'

export default function ApiFetchCard() {
    const[arr, setArr] = useState([]);
    const getData = () =>{
        fetch('https://jsonplaceholder.typicode.com/posts').then((res)=>{
        return res.json();
      }).then((data)=>{
          setArr(data);
      })
    }
  return (
        <div className='container'>
            <button className='btn btn-primary' onClick={getData}>click</button>
            <div className="row d-flex">
                {arr.map((items,index)=>{
                    return(
                        <div className="col-sm-4">
                            <div className="card text-center p-3" key={index}>
                                <h2 className='card-header'>{items.userId}</h2>
                                <h2 className='card-id'>{items.id}</h2>
                                <h3 className='card-body'>{items.title}</h3>
                                <p className='card-footer'>{items.body}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
  )
}
