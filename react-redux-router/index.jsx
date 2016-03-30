import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import App from './components/App.jsx';
import About from './components/About.jsx';
import Comments from './components/Comments.jsx';
import V404 from './components/V404.jsx';
import Home from './components/Home.jsx';
import Actions from './components/redux/actions';
import Store from './components/redux/store';

ReactDom.render(
    <Provider store={Store}>
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Home} />
                <Route path="comments" component={Comments} />
                <Route path="about" component={About} />
                <Route path="*" component={V404} />
            </Route>
        </Router>
    </Provider>
, document.getElementById('root'));

Store.dispatch(Actions.update_comments());
Store.dispatch(Actions.update_about());

