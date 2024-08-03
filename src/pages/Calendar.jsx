import React from 'react'
import {
  ScheduleComponent, Day, Week, WorkWeek, Agenda, Month, Inject,
  Resize, DragAndDrop, ViewsDirective, ViewDirective
} from '@syncfusion/ej2-react-schedule';

import Header from '../component/Header';
import { scheduleData } from '../data/dummy';


const Calendar = () => {

    return (
      
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-2xl ">
      <Header category="App" title="Calendar" />
      <ScheduleComponent
        height="650px"
        selectedDate={new Date(2021, 0, 10)}
        eventSettings={{ dataSource: scheduleData }}
      >
        <ViewsDirective>
          { ['Day', 'Week', 'WorkWeek', 'Month', 'Agenda'].map((item) => <ViewDirective key={item} option={item} />)}
        </ViewsDirective>
        <Inject services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]} />
      </ScheduleComponent>
    
    </div>
  )
}

export default Calendar
