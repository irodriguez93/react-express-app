//console.log("hello world!");

import {store} from './store'
import React from 'react';
import ReactDOM from 'react-dom';
import {Dashboard} from './components/Dashboard'


ReactDOM.render(
    <Dashboard/>,
    document.getElementById("app")

);
//console.log(store.getState());