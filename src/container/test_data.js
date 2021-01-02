// import { Chart } from "react-google-charts";

// const data = [
//     ["Country", "% of world landmass"],
//     ["Russia", 6323142],
//     ["Canada", 3624807],
//     ["China", 3511022	],
//     ["United States", 3531837],
//     ["Brazil", 3227095],
//     ["Australia",2966151],
//     ["India", 1147955],
//     ["Argentina", 1056641],
//     ["Kazakhstan", 1042360],
//     ["Algeria", 919595]
//   ];
  
//   const datasetOld = [
//     ["Name", "total case"],
//     ["USA", 20617346],
//     ["India", 6323142],
//     ["Brazil", 3624807],
//     ["Russia", 3511022	],
//     ["France", 3531837],
//     ["UK", 3227095],
//     ["Australia",2966151],
//     ["India", 1147955],
//     ["Argentina", 1056641],
//     ["Kazakhstan", 1042360],
  
//   ];
  
//   const datasetNew = [
//     ["Name", "total recovered"],
//     ["USA", 12175841],
//     ["India", 6323142],
//     ["Brazil", 3624807],
//     ["Russia", 3511022	],
//     ["France", 3531837],
//     ["UK", 3227095],
//     ["Australia",2966151],
//     ["India", 1147955],
//     ["Argentina", 1056641],
//     ["Kazakhstan", 1042360],
  
//   ];

  {/* <Chart
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
      height="800px"
      data={data}
    /> */}

    {/* <Chart
          chartType="ColumnChart"
          width="100%"
          height="400px"
          diffdata={{ old: datasetOld, new: datasetNew }}
        /> */}