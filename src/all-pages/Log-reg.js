import {useState} from 'react'
import Reg from './Reg'
import Log from './Log'

const LogReg = () => {
	let [logreg,setLogreg]=useState(0)
	let func = ()=>{
		setLogreg(1)
	}
	let funcback = ()=>{
		setLogreg(0)
	}
	return (
	       <div className="viewer">
			<div id="logregpage" className={logreg===0?"login-reg-cont":"login-reg-cont-active"} >
			 <Reg binary={logreg} func={func} />
			 <Log binary={logreg} func={funcback} />
			 <img src="images/luffy.png" alt="" className={logreg===0?"luffy-1":"luffy-1-active"}/>
			 <img src="images/luffy.png" alt="" className={logreg===1?"luffy-2":"luffy-2-active"}/>
			</div>
	       	
	       </div>


		
	)
}


  



export default LogReg