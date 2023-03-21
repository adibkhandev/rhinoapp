import React,{useState} from 'react'
import Navigation from './Navigation-ash'
import {Nav} from './Nav'
import axios from 'axios'
const Reg = (props) => {
    let url = 'http://127.0.0.1:8000/signup/'
	let [firstname,setFirstname]=useState()
   let [lastname,setLastname]=useState()
   let [phonenumber,setPhonenumber]=useState()
   let [email,setEmail]=useState()
   let [adress,setAdress]=useState()
   let [password,setPassword]=useState()
   let data ={
     firstname:firstname,
     lastname:lastname,
     email:email,
     phonenumber:phonenumber,
     password:password,
     adress:adress
   }
   let handleSubmit=(e)=>{
         e.preventDefault()
         props.func()
         axios.post(url,{data})
           .then((response)=>{
            console.log(response)
           })
           .catch((err)=>{
            console.log(err)
           })
   }
    return(
       <div className="login-background">
      <Nav binary={props.binary}  stick={true} ase={true} searchon={true}  colour={'white'}/>
       	
        <div className={props.binary===0?"inputs":"inputs gone"}>
       		<h1 className="headline">
       			Create your Acoount.
       		</h1>
       		<div className="twin">
       		  <input onChange={(e)=>setFirstname(e.target.value)} value={firstname} placeholder="First Name" type="text" className="inp-log"/>
       		  <input onChange={(e)=>setLastname(e.target.value)} value={lastname} placeholder="Last Name" type="text" className="inp-log"/>
       		</div>

             <input onChange={(e)=>setPhonenumber(e.target.value)} value={phonenumber}  placeholder="Phone number" type="text" className="phone"/>
             <input onChange={(e)=>setEmail(e.target.value)} value={email}  placeholder="Email" type="text" className="email"/>
             <input onChange={(e)=>setAdress(e.target.value)} value={adress}  placeholder="Adress" type="text" className="adress"/>
             <input onChange={(e)=>setPassword(e.target.value)} value={password}  placeholder="Password" type="text" className="password"/>
             <h1 className="shifter" onClick={props.func} >Already have an account? Login</h1>
             <div className="but">
             	<button onClick={handleSubmit} >Create Account</button>
             </div>
       	</div>
       </div>
    )	
}
export default Reg