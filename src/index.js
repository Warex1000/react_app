import React from 'react';  // import React
import ReactDOM from 'react-dom';  // For include component to applications
import App from './App';
import {type} from "@testing-library/user-event/dist/type";

ReactDOM.render(
    <App/>,
    // Button with click
    // React.createElement('button',{
    //     onClick: () => console.log('CLICK')
    // },'Put me'),
  document.getElementById('root')
);
