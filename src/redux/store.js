import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer} from 'redux-form';
import problem_reducer from "./problem-reducer";

const redusers = combineReducers ({
    task:problem_reducer,
    form:formReducer
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(redusers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;