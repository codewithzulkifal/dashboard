import React from 'react'
import { ColumnDirective, ColumnsDirective, Filter, GridComponent, Sort, Page, Selection, Edit, Inject, Toolbar } from '@syncfusion/ej2-react-grids';
import { customersData, customersGrid  } from '../data/dummy';
import Header from '../component/Header';


const Customers = () => {
  return (
    <div className=' m-2 md:m-10 mt-24 p-2 md:p-10 rounded-2xl bg-white '>
      <Header category='Page' title='Orders' /> 
        <GridComponent
          id='gridcomp' 
          dataSource={customersData} 
          allowPaging={true} 
          allowSorting={true}
          toolbar={['Delete']}
          editSettings={{
            allowDeleting: true,
            allowEditing: true
          }}
          width='auto' >
            <ColumnsDirective>
            {
              customersGrid.map((item, index) => (
                <ColumnDirective key={index} {...item} />
              ))
            }
            </ColumnsDirective>
            <Inject services={[Page, Toolbar, Selection, Edit, Sort, Filter]}/>
          </GridComponent>;
      </div>
  )
}

export default Customers
