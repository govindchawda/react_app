// import React, { useState } from 'react'

// export default function Crud3() {
//     const[singUPValue, setSignUpValue] = useState({
//         name:"",
//         email:"",
//         password:"",
//         cPassword:"",
//     })
//     const[arr, setArr] = useState([])
//     const inputHandler = (event) => {
//         setSignUpValue({...singUPValue, [event.target.name] : event.target.value});
//     }
//     const signUp = (event) => {
//         event.preventDefault();
//        let result = arr.filter((items,index)=>{
//             return items.email === singUPValue.email;
//         });
//         if(result.length <= 0){
//             if(singUPValue.password === singUPValue.cPassword){
//                 setArr([...arr, singUPValue]);
//             } else{
//                 alert("password is not match");
//             }
//         }else{
//             alert('gmail is alreadt exist')
//         }
//         setSignUpValue({
//             name:"",
//             email:"",
//             password:"",
//             cPassword:"",
//         });
//     }
//   return (
//     <div className='container' style={{width:"60%"}}>
//         <h2 className='text-center mt-2'>Sign up form</h2>
//         <hr />
//         <form onSubmit={signUp} method="post">
//         <div className='d-flex mt-3'>
//             <input type="text" placeholder='enter name' value={singUPValue.name} name='name' onChange={inputHandler} className='form-control m-2' />
//             <input type="email" placeholder='enter email' value={singUPValue.email}  name='email' onChange={inputHandler} className='form-control m-2' />
//         </div>
//         <div className='d-flex mt-3'>
//             <input type="password" placeholder='enter password' value={singUPValue.password} name='password' onChange={inputHandler} className='form-control m-2' />
//             <input type="password" placeholder='confirm password' value={singUPValue.cPassword} name='cPassword' onChange={inputHandler} className='form-control m-2' />
//         </div>
//         <div className='mt-3'>
//             <button className='btn btn-dark' type='submit'>Sign up</button>
//         </div>
//         </form>
//         <table class="table">
//             <thead>
//                 <tr>
//                     <th>Name</th>
//                     <th>Email</th>
//                     <th>Password</th>
//                     <th>Action</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {arr.map((items,index)=>{
//                     return(
//                         <tr key={index}>
//                             <td>{items.name}</td>
//                             <td>{items.email}</td>
//                             <td>{items.password}</td>
//                             <td>
//                                 <button className='btn btn-danger'>Delete</button>
//                                 <button className='btn btn-info'>Edit</button>
//                             </td>
//                         </tr>
//                     )
//                 })}
//             </tbody>
//         </table>
//     </div>
//   )
// }




import React, { useState } from 'react'

export default function Crud3() {
    const[singUPValue, setSignUpValue] = useState({
        name:"",
        email:"",
        password:"",
        cPassword:"",
    })
    const[arr, setArr] = useState([])
    const inputHandler = (event) => {
        setSignUpValue({...singUPValue, [event.target.name] : event.target.value});
    }
    const signUp = (event) => {
        event.preventDefault();
       let result = arr.some((items,index)=>{
            return items.email === singUPValue.email;
        });
        if(result){
            alert('not found')
            setSignUpValue({
                name:"",
                email:"",
                password:"",
                cPassword:"",
            });
            return;
        }
        if(singUPValue.password === singUPValue.cPassword){
            setArr([...arr, singUPValue]);
        } else{
            alert("password is not match");
        }
        setSignUpValue({
            name:"",
            email:"",
            password:"",
            cPassword:"",
        });
    }
  return (
    <div className='container' style={{width:"60%"}}>
        <h2 className='text-center mt-2'>Sign up form</h2>
        <hr />
        <form onSubmit={signUp} method="post">
        <div className='d-flex mt-3'>
            <input type="text" placeholder='enter name' value={singUPValue.name} name='name' onChange={inputHandler} className='form-control m-2' />
            <input type="email" placeholder='enter email' value={singUPValue.email}  name='email' onChange={inputHandler} className='form-control m-2' />
        </div>
        <div className='d-flex mt-3'>
            <input type="password" placeholder='enter password' value={singUPValue.password} name='password' onChange={inputHandler} className='form-control m-2' />
            <input type="password" placeholder='confirm password' value={singUPValue.cPassword} name='cPassword' onChange={inputHandler} className='form-control m-2' />
        </div>
        <div className='mt-3'>
            <button className='btn btn-dark' type='submit'>Sign up</button>
        </div>
        </form>
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
                                <button className='btn btn-danger'>Delete</button>
                                <button className='btn btn-info'>Edit</button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
  )
}
