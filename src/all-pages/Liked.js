import React,{useState,useEffect,useContext} from 'react'
import axios from 'axios'
import Context from './Context'
import {Nav} from './Nav'
import {Taka,Item} from './Components'
const Liked = () => {
	let da = {
		"userid":27,
		"products":[
          {
          	"id":1,
          	"count":1
          },
          
		],
	}
   let context = useContext(Context)
   let likes = context.userdata? context.userdata.liked : null
	
    let list = [0,1,2,3,4]
    
    let [hover,setHover]=useState(0)
    console.log(likes,'llll')
	return (
		<>
	<div className="liked-page">
	    <Nav colour={"ash"} visible={true} stick={false} ></Nav>

		<div className="items">
					{likes ? likes.map((list)=>{
						return(
							  <Item data={list} liked={true}></Item>
                              
						)
					}): <h1>hi</h1>
				 }
				</div>		
	</div>
		</>
	)
}

export default Liked