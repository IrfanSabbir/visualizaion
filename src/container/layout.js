import React  from 'react'
import Toolbar from './Toolbar/LandingPageToolBar'

const  Layout = (props)=>{
   
    
        return(
            <div >
                <Toolbar/>
                <main>
                    {props.children}
                </main>
             
            </div>
        )
    
}


  
export default Layout