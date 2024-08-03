import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { registerLicense } from "@syncfusion/ej2-base";
import { ContextProvider } from './context/ContextProvider';


registerLicense(
  "Ngo9BigBOggjHTQxAR8/V1NCaF1cWWhBYVBpR2Nbe050flVEalhSVBYiSV9jS3pTcUdkWHlecnBWRGdaVQ=="
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextProvider>
    <App />
    </ContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
