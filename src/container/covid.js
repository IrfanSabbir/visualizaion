import React from 'react'
import { Chart } from "react-google-charts";

const datasetOld = [
    ["Name", "total case"],
    ["USA", 20451302],
    ["India", 10286329],
    ["Brazil", 7675973],
    ["Russia", 3159297],
    ["France", 2620425],
    ["UK", 2488780],
    ["Turkey",2208652],
    ["Italy", 2107165],
    ["Spain", 1936718],
    ["Germany", 1745518],
  
  ];
  
  const datasetNew = [
    ["Name", "total recovered"],
    ["USA", 12125806],
    ["India", 9881786	],
    ["Brazil", 6747065	],
    ["Russia", 2554340		],
    ["France", 194221	],
    ["UK", 0], //no recovered data
    ["Turkey",2100650	],
    ["Italy", 1463111	],
    ["Spain", 0], //no recovered data
    ["Germany", 1328200],
  ];
const Covid = ()=>{
    return(
        <div>
            <p style={{color:"black", textAlign:"center"}}>Top 10 country with most covid-19 cases & recovered (as of 2020)</p>
            
            <Chart
                chartType="ColumnChart"
                width="100%"
                height="700px"
                diffdata={{ old: datasetOld, new: datasetNew }}
                />
        </div>
    )
}

export default Covid