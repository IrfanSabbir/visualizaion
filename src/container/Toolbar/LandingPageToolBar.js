import React , {useState} from 'react'

import Navigation  from './Navigation/Navigations'

   
const Toolbar = ()=>{
    return (
        <div style={{width:"100%", backgroundColor:"#010e18", height:"80px"}}>
            <Navigation /> 
        </div>
      
    )
}



export default Toolbar