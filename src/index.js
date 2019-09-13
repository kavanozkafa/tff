import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Tff from './Tff';


ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Tff />, document.getElementById('tff'));

serviceWorker.unregister();
