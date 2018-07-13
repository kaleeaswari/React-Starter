import React from 'react';
import ReactDOM from 'react-dom';
import LifeCycle from './LifeCycle.jsx';
import './assets/index.css';

const Index = () => {
  return <div className='heading'>
    Hello React!
    <LifeCycle/>
  </div>;
};

ReactDOM.render(<Index/>, document.getElementById('index'));