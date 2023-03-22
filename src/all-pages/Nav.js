import React,{useState,useEffect,useContext} from 'react'
import {Link,useLocation} from "react-router-dom"
import Taka from './Components'
import axios from 'axios'
import Context from './Context'

export const Nav = (props) => {
	 let location = useLocation() 
	 let [searchon,setSearchon] = useState(true)
	 let list = [0,1,2]
     let context = useContext(Context)
     let data = context.user
     let setSearch = context.setsearch
     let pfp = context.userdata ? context.userdata.profile_pic:false
     // console.log(data,'d')
     console.log(props.colour,'color')
     console.log(location)
	return (

		<>
		
		

		<div  id={props.stick?"":"non-stick"} className={props.visible?"nav-contain ":props.binary===1?"nav-contain inactive":props.binary===0?"nav-contain active":"nav-contain lost"}>
			
			<div className="rhino-logo">
			     <Link to="/"></Link>
				<img   src={location.pathname=='/'?`rhinoapp/images/rhino-logo-${props.colour}.png`:`images/rhino-logo-${props.colour}.png`} alt="" className={"rhino"}>
                        
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
     let location = useLocation() 
	let url = 'https://rhino-backend.up.railway.app/search/'
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
            	     <img src={location.pathname=='/'?"rhinoapp/images/search-ash.png":"images/search-ash.png"} alt=""/>
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
	let url = 'https://rhino-backend.up.railway.app'
	 let location = useLocation() 
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
               	    <img 
               	     className={props.pfp?`pfp ${props.color} `:""} 
               	     src={props.pfp?`${url}${props.pfp}`:location.pathname=='/'?`rhinoapp/images/account-${props.color}.png`:`images/account-${props.color}.png`} 
               	     alt=""
               	    />
                 </Link>
            	
            	</div>
            	<div  className={scrollDirection==="down"?"icon-conts squeeze":"icon-conts"}>
            
                <Link to={props.user?"/liked":"/login"} >
            	  <img src={location.pathname=='/'?`rhinoapp/images/love-${props.color}.png`:`images/love-${props.color}.png`} alt=""/>
                </Link>
            	</div>
            	<div  className={scrollDirection==="down"?"icon-conts squeeze":"icon-conts"}>
            	<Link to={props.user?"/cart":"/login"} >
            	 <img src={location.pathname=='/'?`rhinoapp/images/shopping-bag-${props.color}.png`:`images/shopping-bag-${props.color}.png`} alt=""/>
            	 </Link>
            	</div>
            </div>            
	)
}

