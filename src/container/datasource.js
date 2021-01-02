import React from 'react'
import {Button} from '@material-ui/core'
import {NavLink} from  'react-router-dom'
const Author = ()=>{
    return(
        <div className="Overview">
            
            <br/>
            <div style={{marginLeft:"15%", width:"70%"}}>
              <h1>20 largest countries (mi²)</h1>
               <p > 
               Although it covers around 17% of the world’s inhabited land, Russia is only home to around 2% of Earth’s inhabitants. With a staggering population of over 1.3 billion people, or just over 19% of the global community, China is the most populous country on Earth. During the Qing Dynasty, from the mid-17th century to early 20th century, the population swelled from 150 million to 450 million as migratory expansions in farming and advancements in agricultural technology allowed the country to feed a bigger population. The next massive population boom began after World War II under Mao Zedong’s leadership. China underwent a period of modernization during Mao’s rule, including improvements to its health care system, which increased life expectancy dramatically. 
              </p>
              <br/>
                <Button variant="contained" color="primary"> 
                  <NavLink to="/visual/area" className="Navlink">World dominationg Area</NavLink>
                </Button>
              </div>
            <br/>
              <div style={{marginLeft:"15%", width:"70%"}}>
              <h1>Top 10 Ccovid effected country</h1>
               <p > 
               The coronavirus COVID-19 pandemic is the defining global health crisis of our time and the greatest challenge we have faced since World War Two. Since its emergence in Asia late last year, the virus has spread to every continent except Antarctica. Cases are rising daily in Africa the Americas, and Europe.
                Countries are racing to slow the spread of the disease by testing and treating patients, carrying out contact tracing, limiting travel, quarantining citizens, and cancelling large gatherings such as sporting events, concerts, and schools.
                The pandemic is moving like a wave—one that may yet crash on those least able to cope.
                But COVID-19 is much more than a health crisis. By stressing every one of the countries it touches, it has the potential to create devastating social, economic and political crises that will leave deep scars.
              </p>
              <br/>
                <Button variant="contained" color="primary"> 
                  <NavLink to="/visual/covid" className="Navlink">Covid Case comparison</NavLink>
                </Button>
              </div>
        </div>
    )
}

export default Author