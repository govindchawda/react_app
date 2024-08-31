import React, { useState } from 'react'

export const Todo2 = () => {
    const [itemsvalue, setitemsvalue] = useState('');
    const[sid, setsid] = useState('')
    const[arr, setArr] = useState([])
    const[duarr, setduArr] = useState([])
    const[chk, setChk] = useState('');
    const[flag, setFlag] = useState(true);
    const inputhandler = (event) => {
        setitemsvalue(event.target.value)
    }
    const add = (event) => {
        event.preventDefault();
        setArr([...arr,itemsvalue]);
        setduArr([...duarr,itemsvalue]);
        setitemsvalue('')
    }
    const delelte = (id) => {
      let newarr =  arr.filter((items,index)=>{
            return id !== index;
        });
        setArr(newarr)
    }
    const edite = (id) =>{
        setFlag(false)
        setsid(id);
        let newarr =  arr.filter((items,index)=>{
            return id === index;
        });
        setitemsvalue(newarr)
    }
    const update = () => {
        setFlag(true)
        arr[sid] = itemsvalue;
        setitemsvalue('')
    }
    const searchitems = (event) => {
      let result =  duarr.filter((items,index)=>{
            return items.toLowerCase().includes(event.target.value.toLowerCase());
        });
        setArr(result)
    }
    const check = (id) => {
        setChk(id);
    }
    const checkboxbtn = () => {
         let res =   arr.filter((items,index)=>{
                return chk !== index;
            });
            setArr(res)
            setChk('');
    }
  return (
    <div className='conatiner' style={{width:"50%", margin:"auto"}}>
        <h2 className='text-center mt-3'>ToDo APP</h2>
            <hr />
        <form method='post' onSubmit={add}>
            <div><input type="search" placeholder='search items' className='form-control' name='search' onChange={searchitems} /></div>
            <div className='mt-3 d-flex'>
                <input type="text" placeholder='ADD items' className='form-control' style={{width:"80%", marginRight:"10px"}} name='name' value={itemsvalue} onChange={inputhandler} />
                {flag === true ?  <button className='btn btn-dark' type='submit'>ADD</button> : ""}
            </div>
        </form>
               {flag === false ? <button className='btn btn-dark' onClick={update}>update</button> : ""}
        <table class="table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Items</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {arr.map((items,index)=>((
                    <tr key={index}>
                        <td><input type="checkbox"  id=""  onChange={()=> check(index)} /></td>
                     <td>{items}</td>
                     <td>
                        <button className='btn btn-danger' onClick={()=> delelte(index)}>delete</button>
                        <button className='btn btn-info' onClick={()=> edite(index)}>edit</button>
                     </td>
                    </tr>
                    )))}
            </tbody>
            <tfoot><button type="button" class="btn btn-primary mt-3" onClick={checkboxbtn}>Deleete chceck</button></tfoot>
        </table>
    </div>
  )
}
