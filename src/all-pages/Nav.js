import React,{useState,useEffect,useContext} from 'react'
import {Link} from "react-router-dom"
import Taka from './Components'
import axios from 'axios'
import Context from './Context'

export const Nav = (props) => {
	 let [searchon,setSearchon] = useState(true)
	 let list = [0,1,2]
     let context = useContext(Context)
     let data = context.user
     let setSearch = context.setsearch
     let pfp = context.userdata ? context.userdata.profile_pic:false
     // console.log(data,'d')
	return (

		<>
		
		

		<div  id={props.stick?"":"non-stick"} className={props.visible?"nav-contain ":props.binary===1?"nav-contain inactive":props.binary===0?"nav-contain active":"nav-contain lost"}>
			
			<div className="rhino-logo">
			     <Link to="/"></Link>
				<img   src={`images/rhino-logo-${props.colour}.png`} alt="" className={"rhino"}>
                        
				</img>

				
			</div>
            
            <div className={searchon?"nav-text":"nav-text lefted"}>
            	<h1 className={`texters + ${props.colour}`}>About</h1>
            	<Link to="/categories" >
            		<h1 className={`texters + ${props.colour}`}>Categories</h1>
            	</Link>
            	
            	<h1 className={`texters + ${props.colour}`}>Explore</h1>
            </div>
            
            	
            {/*search engine*/}
        
            	<SearchEngine searchon={props.searchon} ase={props.ase}  setSearch={setSearch} ></SearchEngine>

            {/**/}
            
            <IconNav pfp={pfp} color={props.colour} user={context.user} ></IconNav>


		</div>
			

		
		</>
	)
}

export let SearchEngine = ({setSearch,searchon,ase}) =>{

	let url = 'http://127.0.0.1:8000/search/'
	let [searchtext,setSearchtext]=useState('')
	// let handleSubmit=()=>{
	// 	axios.post((url),{searched:searchtext})
	// 		.then((response)=>{
	// 		   	// console.log(response.data)
     //                setSearch(response.data)
                  
     //           })   
	// 	     .catch((err)=>{
	// 	     	// console.log('hi')
     //              // console.log(err)
	// 	     })
			
	// }
	let handleSubmit =()=>{
		setSearch(searchtext)
	}
	return(
         <>
        
         <div id={ase?"":"less"} className={searchon?"searcher appear":"searcher none"}>
         <input onChange={(e)=>setSearchtext(e.target.value)} placeholder="Search for products" value={searchtext} type="text" className="searcher-inp"/>
            	<div className="submit">
            		<Link to="/searched">
            		<button onClick={handleSubmit}>
            	     <img src="images/search-ash.png" alt=""/>
            		</button>
            		</Link>
            	</div>
          </div>
         	
      

         </>
	)
}

let IconNav =(props)=>{
	let [scrollDirection,setScrollDirection] = useState('')
	let [pastPosition,setPastPosition] = useState(0)
	let url = 'http://127.0.0.1:8000/'
     let scroller = () =>{
         let scroll = window.scrollY
         if(scroll>pastPosition){
         	 setScrollDirection('down')
         	 // console.log(scrollDirection)
         } else if(scroll<pastPosition){
         	setScrollDirection('up')
         	// console.log(scrollDirection)
         }
         setPastPosition(scroll)
       
     }
	useEffect(() => {
        window.addEventListener('scroll',scroller)

        return () =>{
           window.removeEventListener('scroll',scroller)
        } 
		
	})
	
	return(
            <div  className="icon-nav">
               
            	<div  className={"icon-conts"}>
            	 <Link to={props.user?"/account":"/login"} >
               	    <img className={props.pfp?`pfp ${props.color} `:""} src={props.pfp?`${url}${props.pfp}`:`images/account-${props.color}.png`} alt=""/>
                 </Link>
            	
            	</div>
            	<div  className={scrollDirection==="down"?"icon-conts squeeze":"icon-conts"}>
            
                <Link to={props.user?"/liked":"/login"} >
            	  <img src={`images/love-${props.color}.png`} alt=""/>
                </Link>
            	</div>
            	<div  className={scrollDirection==="down"?"icon-conts squeeze":"icon-conts"}>
            	<Link to={props.user?"/cart":"/login"} >
            	 <img src={`images/shopping-bag-${props.color}.png`} alt=""/>
            	 </Link>
            	</div>
            </div>            
	)
}

