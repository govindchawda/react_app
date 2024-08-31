// // import React, { useState } from "react";
// // export const ToDo = () =>{
// //     // const inputvalue = 
// //     // state
// //     const [inputValue, setInputValues] = useState("");
// //     const [arr,setArr] = useState([]);
// //     const [searcharr,setsearchArr] = useState([]);
// //     const[sid,setsid] = useState('')
// //     const[flag, setflag] = useState(false)
// //     const[submit, setsubmit] = useState(true)
// //     const inputHandler = (event) => {
// //         setInputValues(event.target.value)
       
// //     }
// //     const additem = (event) => {
// //         event.preventDefault();
// //          // arr.push(inputValue)
// //          setArr ([...arr , inputValue]);
// //          setsearchArr ([...searcharr , inputValue]);
// //          setInputValues("")
// //     }
// //     const deletitems = (id) =>{
// //         let newarray = arr.filter((items,index)=>{
// //             return id !== index;
// //         });
// //         setArr(newarray);
// //     }
// //     const edititems = (id) =>{
// //         setsid(id)
// //         setflag(true)
// //         setsubmit(false)
// //         let newarray = arr.filter((items,index)=>{
// //             return id === index;
// //         });
// //         setInputValues(newarray[0])
// //     }
// //     const updateitems = () =>{
// //         setflag(false)
// //         setsubmit(true)
// //         arr[sid] = inputValue;
// //         setInputValues('')
// //     }
// //     const searchitems = (event) => {
// //        let result = searcharr.filter((items,index)=>{
// //             return items.toLowerCase().includes(event.target.value.toLowerCase());
// //         });
// //         setArr(result);
// //     }
// //     return (
// //         <div className="container" style={{width: "50%"}}>
// //             <h2 className="text-center mt-2">ToDo App</h2>
// //             <hr />
// //             <form onSubmit={additem}>
// //                 <div className="mt-3">
// //                     <input type="text" className="form-control" name="itemname" placeholder="add item" value={inputValue}  onChange={inputHandler}/>
// //                 </div>
// //                 <div className="mt-3">
// //                     {
// //                         submit === true ? <button type="submit" className="btn btn-dark">submit</button> : ""
// //                     }
// //                 </div>
// //             </form>
// //             <input type="search"  placeholder="search" name="searchitems" className="form-control mt-3" style={{width:"46%"}} onChange={searchitems}/>
// //             {
// //                flag === true ? <button onClick={updateitems}  className="btn btn-dark">Update</button>: ""
// //             }
// //             <div
// //                 class="table-responsive mt-4"
// //             >
// //                 <table
// //                     class="table table-primary"
// //                 >
// //                     <thead>
// //                         <tr>
// //                             <th scope="col"># <input type="checkbox" name="" id="" /></th>
// //                             <th scope="col">items</th>
// //                             <th scope="col">Action</th>
// //                         </tr>
// //                     </thead>
// //                     <tbody>
// //                         {arr.map((items,index)=>{
// //                             return(
// //                             <tr>
// //                                 <td><input type="checkbox" name="" id="" /></td>
// //                                 <td>{items}</td>
// //                                 <td><button onClick={()=> deletitems(index)} className="btn btn-info">Delete</button> &nbsp; <button className="btn btn-danger" onClick={()=> edititems(index)}>Edit</button></td>
// //                             </tr>
// //                             )
// //                         })}
// //                     </tbody>
// //                     <tbody>
// //                         <button className="btn btn-secondary mt-4">Delete</button>
// //                     </tbody>
// //                 </table>
// //             </div>
            
// //         </div>
// //     )
// // }
import React, { useState } from "react";

export const ToDo = () => {
    const [inputValue, setInputValues] = useState("");
    const [arr, setArr] = useState([]);
    const [searcharr, setsearchArr] = useState([]);
    const [sid, setsid] = useState('');
    const [flag, setflag] = useState(false);
    const [submit, setsubmit] = useState(true);
    const [checkedItems, setCheckedItems] = useState([]); // State to track checked items

    const inputHandler = (event) => {
        setInputValues(event.target.value);
    }

    const additem = (event) => {
        event.preventDefault();
        setArr([...arr, inputValue]);
        setsearchArr([...searcharr, inputValue]);
        setInputValues("");
    }

    const deletitems = (id) => {
        let newarray = arr.filter((items, index) => id !== index);
        setArr(newarray);
    }

    const edititems = (id) => {
        setsid(id);
        setflag(true);
        setsubmit(false);
        let newarray = arr.filter((items, index) => id === index);
        setInputValues(newarray[0]);
    }

    const updateitems = () => {
        setflag(false);
        setsubmit(true);
        arr[sid] = inputValue;
        setInputValues('');
    }

    const searchitems = (event) => {
        let result = searcharr.filter((items, index) =>{
          return  items.toLowerCase().includes(event.target.value.toLowerCase())
    });
        setArr(result);
    }

    const handleCheckboxChange = (index) => {
        const currentIndex = checkedItems.indexOf(index);
        if (currentIndex === -1) {
            setCheckedItems([...checkedItems, index]);
        } else {
            const newCheckedItems = checkedItems.filter((item) => item !== index);
            setCheckedItems(newCheckedItems);
        }
    }

    const deleteCheckedItems = () => {
        const newarr = arr.filter((item, index) => !checkedItems.includes(index));
        setArr(newarr);
        setCheckedItems([]);
    }

    return (
        <div className="container" style={{ width: "50%" }}>
            <h2 className="text-center mt-2">ToDo App</h2>
            <hr />
            <form onSubmit={additem}>
                <div className="mt-3">
                    <input type="text" className="form-control" name="itemname" placeholder="add item" value={inputValue} onChange={inputHandler} />
                </div>
                <div className="mt-3">
                    {submit === true ? <button type="submit" className="btn btn-dark">submit</button> : ""}
                </div>
            </form>
            <input type="search" placeholder="search" name="searchitems" className="form-control mt-3" style={{ width: "46%" }} onChange={searchitems} />
            {flag === true ? <button onClick={updateitems} className="btn btn-dark">Update</button> : ""}
            <div className="table-responsive mt-4">
                <table className="table table-primary">
                    <thead>
                        <tr>
                            <th scope="col"># <input type="checkbox" name="" id="" /></th>
                            <th scope="col">items</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {arr.map((items, index) => (
                            <tr key={index}>
                                <td><input type="checkbox" onChange={() => handleCheckboxChange(index)} checked={checkedItems.includes(index)} /></td>
                                <td>{items}</td>
                                <td><button onClick={() => deletitems(index)} className="btn btn-info">Delete</button> &nbsp; <button className="btn btn-danger" onClick={() => edititems(index)}>Edit</button></td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td><button onClick={deleteCheckedItems} className="btn btn-secondary mt-4">Delete</button></td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
}
// import React, { useState } from "react";

// export const ToDo = () => {
//     const [inputValue, setInputValues] = useState("");
//     const [arr, setArr] = useState([]);
//     const [searcharr, setsearchArr] = useState([]);
//     const [sid, setsid] = useState('');
//     const [flag, setflag] = useState(false);
//     const [submit, setsubmit] = useState(true);
//     const [checkedItems, setCheckedItems] = useState([]);
//     const [selectAll, setSelectAll] = useState(false); // State to track select all checkbox

//     const inputHandler = (event) => {
//         setInputValues(event.target.value);
//     }

//     const additem = (event) => {
//         event.preventDefault();
//         setArr([...arr, inputValue]);
//         setsearchArr([...searcharr, inputValue]);
//         setInputValues("");
//     }

//     const deletitems = (id) => {
//         let newarray = arr.filter((items, index) => id !== index);
//         setArr(newarray);
//     }

//     const edititems = (id) => {
//         setsid(id);
//         setflag(true);
//         setsubmit(false);
//         let newarray = arr.filter((items, index) => id === index);
//         setInputValues(newarray[0]);
//     }

//     const updateitems = () => {
//         setflag(false);
//         setsubmit(true);
//         arr[sid] = inputValue;
//         setInputValues('');
//     }

//     const searchitems = (event) => {
//         let result = searcharr.filter((items, index) =>
//             items.toLowerCase().includes(event.target.value.toLowerCase())
//         );
//         setArr(result);
//     }

//     const handleCheckboxChange = (index) => {
//         const currentIndex = checkedItems.indexOf(index);
//         if (currentIndex === -1) {
//             setCheckedItems([...checkedItems, index]);
//         } else {
//             const newCheckedItems = checkedItems.filter((item) => item !== index);
//             setCheckedItems(newCheckedItems);
//         }
//     }

//     const handleSelectAll = () => {
//         if (selectAll) {
//             setCheckedItems([]);
//         } else {
//             const newCheckedItems = arr.map((_, index) => index);
//             setCheckedItems(newCheckedItems);
//         }
//         setSelectAll(!selectAll);
//     }

//     const deleteCheckedItems = () => {
//         const newarr = arr.filter((item, index) => !checkedItems.includes(index));
//         setArr(newarr);
//         setCheckedItems([]);
//     }

//     return (
//         <div className="container" style={{ width: "50%" }}>
//             <h2 className="text-center mt-2">ToDo App</h2>
//             <hr />
//             <form onSubmit={additem}>
//                 <div className="mt-3">
//                     <input type="text" className="form-control" name="itemname" placeholder="add item" value={inputValue} onChange={inputHandler} />
//                 </div>
//                 <div className="mt-3">
//                     {submit === true ? <button type="submit" className="btn btn-dark">submit</button> : ""}
//                 </div>
//             </form>
//             <input type="search" placeholder="search" name="searchitems" className="form-control mt-3" style={{ width: "46%" }} onChange={searchitems} />
//             {flag === true ? <button onClick={updateitems} className="btn btn-dark">Update</button> : ""}
//             <div className="table-responsive mt-4">
//                 <table className="table table-primary">
//                     <thead>
//                         <tr>
//                             <th scope="col"># <input type="checkbox" onChange={handleSelectAll} checked={selectAll} /></th>
//                             <th scope="col">items</th>
//                             <th scope="col">Action</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {arr.map((items, index) => (
//                             <tr key={index}>
//                                 <td><input type="checkbox" onChange={() => handleCheckboxChange(index)} checked={checkedItems.includes(index)} /></td>
//                                 <td>{items}</td>
//                                 <td><button onClick={() => deletitems(index)} className="btn btn-info">Delete</button> &nbsp; <button className="btn btn-danger" onClick={() => edititems(index)}>Edit</button></td>
//                             </tr>
//                         ))}
//                     </tbody>
//                     <tfoot>
//                         <tr>
//                             <td><button onClick={deleteCheckedItems} className="btn btn-secondary mt-4">Delete Checked</button></td>
//                         </tr>
//                     </tfoot>
//                 </table>
//             </div>
//         </div>
//     );
// }
