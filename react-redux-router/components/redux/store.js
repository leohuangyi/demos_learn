import {
    createStore,
    applyMiddleware
} from 'redux';
import thunk from 'redux-thunk'
import reducers from './reducers';


module.exports = createStore(
    reducers,
    applyMiddleware(thunk)
);
