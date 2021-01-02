import React from 'react'
import {NavLink} from 'react-router-dom'
import "./Navigation.css"
import {Container, Typography, Grid , ListItem, ListItemIcon,  Button} from '@material-ui/core'

const Navigation = (props)=>{

    return (
      <Container fixed >
          <br/>
      
              
                    <ul className="NavigationLandingPage">
                        <li><NavLink  to="/" exact>Overview</NavLink></li>
                        <li><NavLink  to="/author" exact>Author</NavLink></li>
                        <li><NavLink  to="/visual">Visual data</NavLink> </li>
            
                    </ul>
     
    
            </Container>
)}

export default Navigation