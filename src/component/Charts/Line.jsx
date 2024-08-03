import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, LineSeries, DateTime, Legend, Tooltip } from '@syncfusion/ej2-react-charts';

import { lineChartCustomSeries, LinedPrimaryXAxis, LinePrimaryYAxis } from '../../data/dummy';
// import { useStateContext } from '../../context/ContextProvider';

const Line = ({background}) => {
//   const {currentMode} = useStateContext;

  return (
    <ChartComponent
      id="line-chart"
      height="300px"
      primaryXAxis={LinedPrimaryXAxis}
      primaryYAxis={LinePrimaryYAxis}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      background={background}
      legendSettings={{ background: 'transparent' }}
    >
      <Inject services={[LineSeries, DateTime, Legend, Tooltip]} />
      <SeriesCollectionDirective>
        {lineChartCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default Line;
