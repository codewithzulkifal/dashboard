import React from 'react'
import { Header } from '../../component'
import {  ChartComponent, Inject, SplineAreaSeries, SeriesCollectionDirective, SeriesDirective, DateTime, Legend } from '@syncfusion/ej2-react-charts';
import { areaCustomSeries, areaPrimaryXAxis, areaPrimaryYAxis } from '../../data/dummy';
import { useStateContext } from '../../context/ContextProvider';


const Area = () => {
  const {currentMode} = useStateContext();
  return (
    <div className=' m-4 md:m-10 p-10 mt-24 bg-white dark:bg-secondary-dark-bg rounded-2xl '>
      <Header category='Area' title='Analysis' />
      <div className=' mt-2 md:mt-4 w-full '>
      <ChartComponent
        id="area-chart"
        primaryXAxis={areaPrimaryXAxis}
        primaryYAxis={areaPrimaryYAxis}
        chartArea={{ border : {width: 0}}}
        tooltip={{ enable: true }}
        background={currentMode === 'Dark' ? '#33373E' : '#fff'}

      >
        <SeriesCollectionDirective>
          {
            areaCustomSeries.map((item, index) => 
            <SeriesDirective key={index} {...item} />)
          }
        </SeriesCollectionDirective>
        <Inject services={[Legend, SplineAreaSeries, DateTime]}/>
      </ChartComponent>
     </div>
    </div>
  )
}

export default Area
