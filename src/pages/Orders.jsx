import React from 'react'
import { ColumnDirective, ColumnsDirective, Filter, GridComponent, Resize, Sort, ContextMenu, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids';
import { ordersGrid, ordersData  } from '../data/dummy';
import Header from '../component/Header';


const Orders = () => {
  return (
    <>
      <div className=' m-2 md:m-10 p-2 md:p-10 mt-24 rounded-2xl bg-white '>
      <Header category='Page' title='Orders' /> 
        <GridComponent
          id='gridcomp' 
          dataSource={ordersData} 
          allowPaging={true} 
          allowSorting={true} 
          allowFiltering={true}
           >
            <ColumnsDirective>
            {
              ordersGrid.map((item, index) => (
                <ColumnDirective key={index} {...item} />
              ))
            }
            </ColumnsDirective>
            <Inject services={[Page, Sort, Filter, Resize, ContextMenu, ExcelExport,PdfExport, Edit]}/>
          </GridComponent>
      </div>
    </>
  )
}

export default Orders
