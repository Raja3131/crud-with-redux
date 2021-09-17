import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from "redux";
import DataReducer from "./reducers/DataReducer";
import { Provider } from "react-redux";

if (localStorage.getItem('datas') === null)
    localStorage.setItem('datas', JSON.stringify([]))
let initialState = {
    currentIndex: -1,
    list: JSON.parse(localStorage.getItem('datas'))
}
const store = createStore(DataReducer, initialState)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
