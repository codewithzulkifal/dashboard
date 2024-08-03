import React from 'react'
import Header from '../component/Header'
import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
// import { EditorData } from '../data/dummy';


const Editor = () => {
    const toolbarSettings = {
        items: ['Bold', 'Italic', 'Underline', 'StrikeThrough',
            'FontName', 'FontSize', 'FontColor', 'BackgroundColor',
            'LowerCase', 'UpperCase', '|',
            'Formats', 'Alignments', 'OrderedList', 'UnorderedList',
            'Outdent', 'Indent', '|',
            'CreateLink', 'Image', '|', 'ClearFormat', 'Print',
            'SourceCode', 'FullScreen', '|', 'Undo', 'Redo']
    };

    const quickToolbarSettings = {
        image: ['Replace', 'Align', 'Caption', 'Remove', 'InsertLink', 'OpenImageLink', '-', 'EditImageLink', 'RemoveImageLink', 'Display', 'AltText', 'Dimension']
    };


  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-2xl" >
      <Header category="App" title="Editor" />
      <RichTextEditorComponent   toolbarSettings={toolbarSettings} quickToolbarSettings={quickToolbarSettings} >
        
         <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar]}/>
      </RichTextEditorComponent>
    </div>
  )
}

export default Editor
