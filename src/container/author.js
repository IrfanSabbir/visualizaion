import React from 'react'
import { Grid} from '@material-ui/core'
import Authors from '../assets/author.jpg'
import { Container } from '@material-ui/core'

const Author = ()=>{
    return(
        <div className="Overview">
            <br/>
            <br/>
            <br/>
            <br/>
            <Container>
            <Grid  container spacing={3} justify="center">
                <Grid item xs={12} sm={12} md={7} lg={8}>
                    <h1 >Jimmy Kimmel</h1>
                       <p>
               Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.      

                    </p>
                </Grid>
                <Grid item xs={12} sm={8} md={5} lg={4}>
                   <img src={Authors} className="Author"  alt="Authors" width="70%" height="auto"/>
                </Grid>
            </Grid>
            </Container>
        </div>
    )
}

export default Author