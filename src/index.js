import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import Aside from './Aside';
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(<App />, document.getElementById('root'));

// ReactDOM.render(<Aside />, document.getElementById('root'));
registerServiceWorker();
