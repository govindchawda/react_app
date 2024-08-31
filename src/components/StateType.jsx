import { useState } from "react"

export const StateType = () => {
    // array type
    const[arr, setArr] = useState(["user1", "user2", "user3"]);
    // object type
    const[obj , setobj] = useState({"name":"user","age":19});
    // array of an object 
    const[users, setusers] = useState([{"name":"user","age":19},{"name":"admin","age":18}]);
    // boolean type
    const[flag, setflag] = useState(true);
    const changedata = () => {
        setflag(false)
    }
    return(
        <div>
            <h1>arr tpye usestate</h1>
            <ul>
                {arr.map((items,index) => {
                   return <li key={index}>{items}</li>
                })}
            </ul>
            <h2>obj type usestate</h2>
            <ul>
                <li>my name is: {obj.name} and age is :{obj.age}</li>
            </ul>
            <h3>array of an object</h3>
            <ul>
                {
                    users.map((items,index)=>{
                        return <li key={index}>my name is: {items.name}, and my age is: {items.age}</li>
                    })
                }
            </ul>
            <div>
                <h4>boolean type</h4>
                { flag === true ? <input type="text" /> : "" }
                <button type="button" onClick={changedata}>click</button>
            </div>
        </div>
    )
}