import React from 'react'
import { ColumnDirective, ColumnsDirective, GridComponent, Page, Search, Inject, Toolbar } from '@syncfusion/ej2-react-grids';
import { employeesData, employeesGrid  } from '../data/dummy';
import Header from '../component/Header';


const Employees = () => {
  return (
    <div className=' m-2 md:m-10 p-2 md:p-10 mt-24 rounded-2xl bg-white '>
      <Header category='Page' title='Employees' /> 
        <GridComponent
          id='gridcomp' 
          dataSource={employeesData} 
          allowPaging={true} 
          toolbar={['Search']}
          >
            <ColumnsDirective>
            {
              employeesGrid.map((item, index) => (
                <ColumnDirective key={index} {...item} />
              ))
            }
            </ColumnsDirective>
            <Inject services={[Page, Toolbar, Search ]}/>
          </GridComponent>;
    </div>
  )
}

export default Employees
