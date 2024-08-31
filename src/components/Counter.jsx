// import React from 'react'
// import { useState } from 'react'

// export default function Counter() {
//     const[count , setCount] = useState(0)
//     const increment = () => {
//         setCount(count+1)
//     }
//     const decrement = () => {
//         // setCount(count-1)
//         // or
//         if(count <= 0){
//             setCount(0)
//         }else{
//             setCount(count-1)
//         }
//     }
//   return (
//     <div>
//         <button onClick={increment}>+</button>
//         <span>{count}</span>
//         <button onClick={decrement}>-</button>
//     </div>
//   )
// }


import React, { useState } from 'react'

export default function Counter() {
    const[count, setCount] = useState(0)
    const incrment = () =>{
        setCount(count+1)
    }
    const decrment = () => {
        // setCount(count-1)
        if(count <= 0){
            setCount(0)
        }else{
            setCount(count-1)
        }
    }
  return (
    <div>
        <button onClick={incrment}>+</button>
        <span>{count}</span>
        <button onClick={decrment}>-</button>
    </div>
  )
}
