import { useState } from 'react'
import logo from '../components/img/pngegg.png'

function Mainbalance() {
  
  const [balance, setBalance] = useState(0)
  // const logo = require('../img/pngegg.png')

  return ( 
    <div style = {{width: "400px"}} >
       <h3>Balance</h3>
       <h1>₱ {balance}.00</h1> 
       <h4>0000 0000 0000 0000</h4>
      <div style = {{display: "flex", justifyContent: "space-between"}}>
       <p>00/00</p>
       <img src={logo} style = {{width: "60px"}}></img>
      </div>  
    </div>
  )
}

export default Mainbalance
