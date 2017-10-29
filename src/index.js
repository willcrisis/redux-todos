import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import todoApp from './reducers';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(todoApp);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Route path="/:filter?" component={App} />
        </Router>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
