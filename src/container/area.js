import React from 'react'
import {Container} from '@material-ui/core'
import { Chart } from "react-google-charts";
const data = [
    ["Country", "Land Area (mi²)"],
    ["Russia", 6323142],
    ["Canada", 3624807],
    ["China", 3511022	],
    ["United States", 3531837],
    ["Brazil", 3227095],
    ["Australia",2966151],
    ["India", 1147955],
    ["Argentina", 1056641],
    ["Kazakhstan", 1042360],
    ["Algeria", 919595],
    ["DR Congo", 875313],
    ["Saudi Arabia", 830000],
    ["Mexico", 750563],
    ["Indonesia", 699451],
    ["Sudan", 681489],
    ["Libya", 679362],
    ["Iran", 628786],
    ["Mongolia", 599833],
    ["Peru", 494211]

  ];

const Area = ()=>{
    return(
        <Container fixed>
            <p style={{color:"black",textAlign:"center"}}>World 20 largest country, <i>Land Area (mi²)</i></p><br/>
            <Chart
                chartEvents={[
                    {
                    eventName: "select",
                    callback: ({ chartWrapper }) => {
                        const chart = chartWrapper.getChart();
                        const selection = chart.getSelection();
                        if (selection.length === 0) return;
                        const region = data[selection[0].row + 1];
                        console.log("Selected : " + region);
                    }
                    }
                ]}
                chartType="GeoChart"
                width="90%"
                height="600px"
                data={data}
                />
        </Container>
    )
}

export default Area