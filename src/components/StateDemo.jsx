 import React, { useState } from 'react'
import { About } from './About'
 
 export default function StateDemo() {
    const[name , setname] = useState('admin')
    const[age , setage] = useState(20)
    const changedata = () => {
          setname('user')
          setage(19)
    }
   return (
     <div>
        <button onClick={changedata}>click</button>
        my name is : {name} , 
         my age is : {age}
        <About snm = {name} vnm = {age}/>
     </div>
   )
 }
// import React, { useState } from 'react';
// import { About } from './About';

// export default function StateDemo() {
//   const [name, setName] = useState('admin');
//   const [age, setAge] = useState(20);

//   const toggleData = () => {
//     setName(name === 'admin' ? 'user' : 'admin');
//     setAge(name === 'admin' ? 19 : 20);
//   };

//   return (
//     <div>
//       <button onClick={toggleData}>Toggle Name</button>
//       <p>My name is: {name}</p>
//       <p>My age is: {age}</p>
//       <About snm={name} />
//     </div>
//   );
// }