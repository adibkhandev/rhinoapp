import React,{useState,useContext} from 'react'
import {useDispatch} from 'react-redux'
import {Nav} from './Nav'
import {Link} from "react-router-dom"
import {Taka,FixedStars,Filter,NotFound} from "./Components"
import Like from './Like'
import Context from './Context'
const  Searched = () => {
	let context = useContext(Context)
	let results = context.search_result
	let loading = context.loading
	console.log(results,'achieved')
	return (
		<>
        <div className="searched-page">
         
         
         	    
         {
         	
         	  <>	
        	  <Nav stick={false} ase={true} searchon={true} visible={true} colour={'ash'}></Nav>
              <Results loading={loading} results={results} > </Results>
              </>
              
         }        
         	
        </div> 
		</>
	)
}
const Results=({results,loading})=>{
	let [start,setStart]=useState(0)
	let [limit,setLimit]=useState(20000)

	console.log(results,'got')
	let resultFiltered = results?results.filter((result)=>{
		return start<=result.price && result.price<=limit
	}):[]
	return(
		<>
		  
		  <div className="all">
		   <Filter start={start} setStart={setStart} limit={limit} setLimit={setLimit} /> 
	       {!loading && results.length!=0?(
	       	 <div className="cards">
              
	       	  {resultFiltered.map((result)=>{
	       	  	return(
	       	  
                   <Card result={result} ></Card>
	       	  	
	       	  
	       	    )})
	       	   }
	          </div>
	        ):<NotFound></NotFound>}	
		  	
		  </div>
		</>
      
	)
}
const Card =({result})=>{
	let url2 = 'https://rhino-backend.up.railway.app/'
	let dispatch = useDispatch()
	console.log(result.rev,'revv')
	let Totalrating = [0]
	let rate = result.rev.map((item)=>{
		return Totalrating+=item.rating
	})
	let star = Totalrating/result.rev.length
	console.log(star,'st')
	console.log(Totalrating,'tot') 
	console.log(rate,'ratee')
	return(
        <>  
          <div className="cont">
            <Link to="/post" state={result} >
            <div className="card">
                    <div className="image-cont">
                    	
                   	<img className="card-img" src={`${url2+result.image}`} alt=""/>
                    </div>
                   	<h1 className="title">
                   		{result.name}
                   	</h1>
                   	<Taka num={"minier"} taka={result.price}  ></Taka>
                   	
            </div>
            </Link>
            <div className="functional-buttons">
                  {star?<FixedStars star={star} ></FixedStars>:<FixedStars ></FixedStars>}
            	    
                   	<div className="cart-like">
                   	    <Link to="/cart">
                   		<h1 onClick={()=>dispatch({type: 'ADD' , payload:result ,count:1})} >Add tocart</h1>
                   	    </Link>
                   	   
                         <Like product={result} id={result.id} ></Like>
                         
                   	</div>
            </div>
          	
          </div>
        </>
	)
}

export default  Searched