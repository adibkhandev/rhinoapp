import {useState,useContext,useEffect} from 'react'
import Context from './Context'
import axios from 'axios'
 
let Like =({product,id,liked})=>{
   let context = useContext(Context)
   let userid = context.user? context.user.user_id : null
   let [like,setLike]= useState(liked?true:false)
   let url = 'http://127.0.0.1:8000/like/'
   let url2 = 'http://127.0.0.1:8000/dislike/'
   let likes = context.userdata? context.userdata.liked : null
   useEffect(() => {
      console.log(likes,id,'kkk')
      console.log(context.userdata)
      // console.log(likes.includes(product))

      if(likes){
         console.log(likes.filter(e=>e.id===id).length)
        if(likes.filter(e=>e.id===id).length!==0){
         setLike(true)
        }
      }
   }, [likes])
   return(
      <div onClick={()=>{

            
             if(!like){
             axios.post(url,{'userid':userid,'productid':id})
              .then((response)=>{
               console.log(response,'likes')
              })
              .catch((err)=>{
               console.log(err)
              })
               setLike(true)
             }
             else if(like){
             axios.post(url2,{'userid':userid,'productid':id})
              .then((response)=>{
               console.log(response,'likes')
              })
              .catch((err)=>{
               console.log(err)
              })
               setLike(false)  
             }

          }
       } className="like">
         <img  src={like?"images/liked.svg":"images/like.png"} alt=""/>
      </div>
   )
}

export default Like