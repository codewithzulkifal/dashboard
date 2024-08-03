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
import { Header } from '../../component';


const Pie = () => {
  return (
    <div className=' m-4 md:m-10 p-10 mt-24 bg-white dark:bg-secondary-dark-bg rounded-2xl '>
      <Header category='Chart' title='Sales overview' />
      <CircularChart3DComponent
      id="charts"
      title="Browser Market Shares in November 2023"
      tilt={-45}
      tooltip={{enable: true, header: 'Browser'}}
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
          }}
        ></CircularChart3DSeriesDirective>
      </CircularChart3DSeriesCollectionDirective>
    </CircularChart3DComponent>
    </div>
  )
}

export default Pie
