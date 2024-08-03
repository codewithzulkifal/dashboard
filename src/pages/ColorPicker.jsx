import React from 'react'
import { Header } from '../component'
import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs';


const ColorPicker = () => {

  const colorChange = (args) => {
    document.getElementById('preview').style.backgroundColor = args.currentValue.hex;
  }

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-2xl" >
      <Header category="App" title="Kanban" />
      <div className=' text-center '>
        <div id='preview' />
        <div className=' flex justify-center items-center flex-wrap gap-20 '>
          <div>
            <p className=' text-2xl font-semibold mt-3 '> Inline Picker </p>
            <ColorPickerComponent
             id='inline-pallete' 
             inline={true} 
             mode='Picker'
             showButtons={false}
             modeSwitcher={false}
             change={colorChange}
             />
          </div>
          
          <div>
            <p className=' text-2xl font-semibold mt-3 '> Inline Pallete </p>
            <ColorPickerComponent
             id='inline-pallete' 
             inline={true} 
             mode='Palette'
             showButtons={false}
             modeSwitcher={false}             
             change={colorChange}
             />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ColorPicker



