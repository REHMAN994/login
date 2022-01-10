
import React,{useState} from "react";
import { useHistory } from 'react-router-dom';

const Login =() =>{
    // const history = useHistory();
    // useHistory(() =>{
    //     if(localStorage.getItem('user-info')){
    //         history.push("./add")
    //     }
    // },[])
   
        // let path = `/result`;
        // let history = useHistory();
        // history.push(path);
    
    const [name,setName]=useState("");
    const [password,setPassword]=useState("");
    async function login(){
        console.warn(name,password)
        let item={name,password};
        let result= fetch("https://{domain}/api/account/{accountId}/login?v=1.3",{
            method:'POST',
            headers:{
                "Content-Type": "Application/JSON",
                "Accept": '	Application/JSON'
            },
            body: JSON.stringify(item)
        });
        result = await result.json();
        localStorage.setItem("user-info",JSON.stringify(result))
        // history.pushState("/add")
    }
    return(
        <>
        
           <div className="col-sm-6 offset-sm-3">
           <h1>Login page</h1>
               <input type="text" placeholder="name" onChange={(e)=>setName(e.target.value)} className="form-control"/>
               <br/>
               <input type="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)} className="form-control"/>
               <br/>
               <button className="btn btn-primary" onClick={login}>Login</button>
               
           </div>
        </>
    )
}
export default Login