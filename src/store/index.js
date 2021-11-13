import { createStore, combineReducers } from "redux";
import MenProductReducer from './reducers/MenProductReducer';
import { devToolsEnhancer } from 'redux-devtools-extension';
import CartReducer from './reducers/CartReducer';

const root = combineReducers({
    MenProductReducer,
    CartReducer
})


const store = createStore(root,devToolsEnhancer() );
export default store;