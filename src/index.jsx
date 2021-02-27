import React from 'react';
import { render } from 'react-dom';
import {Label} from 'antd';

const App = () => {
  return <>
  <h1>Cestovní itinerář!</h1>
  <Label></Label> 
  </>
};
render(<App />, document.querySelector('#app'));
