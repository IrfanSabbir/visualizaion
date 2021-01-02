import React from 'react'
import '../assets/overview.css'
import {Button} from '@material-ui/core'
const Author = ()=>{
    return(
        <div className="Overview">
              <br/>
              <br/>
              <br/>
              <div className="Overview_Body">
               <p > 
               Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.      
              </p>
              <br/>
              <br/>
                <Button variant="contained" color="primary" style={{textTransform:"none"}}> <a href="#">Click</a></Button>
              </div>
        </div>
    )
}

export default Author