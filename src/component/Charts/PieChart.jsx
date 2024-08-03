import React from 'react'
import {
  CircularChart3DComponent,
  CircularChart3DSeriesCollectionDirective,
  CircularChart3DSeriesDirective,
  PieSeries3D,
  CircularChartDataLabel3D,
  CircularChartTooltip3D,
  Inject,
} from '@syncfusion/ej2-react-charts';
import { circularData } from '../../data/dummy';



const PieChart = () => {
  return (
    <div className=' bg-white dark:bg-secondary-dark-bg dark:text-gray-100 rounded-2xl '>
      <CircularChart3DComponent
      id="charts"
      // title="Browser analysis in Last Month "
      tilt={-45}
      tooltip={{enable: true, header: 'Browser'}}
      height='370px'
      width='550px'
    >
      <Inject
        services={[
          PieSeries3D,
          CircularChartDataLabel3D,
          CircularChartTooltip3D,
        ]}
      />
      <CircularChart3DSeriesCollectionDirective>
        <CircularChart3DSeriesDirective
          dataSource={circularData}
          xName="x"
          yName="y"
          dataLabel={{
            visible: true,
            // position: 'Outside'
          }}
        ></CircularChart3DSeriesDirective>
      </CircularChart3DSeriesCollectionDirective>
    </CircularChart3DComponent>
    </div>
  )
}

export default PieChart
