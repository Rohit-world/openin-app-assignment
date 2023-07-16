import React from 'react';
import { Pie } from 'react-chartjs-2'
const Piechart = () => {
    const chartdata = {

    
        labels: ["January", "February", "March" ,"april","may","june","july"],
        datasets: [
          {
            label: 'Activities',
            labels: "sales of the week",
            data: [6, 3, 9,3,5,5,6],
           
          },
        ],
      };
    
    
    
      const options={
        plugins:{
          legend:true,
        }
      }
      return <Pie  data={chartdata} options={options} />;
}

export default Piechart;
