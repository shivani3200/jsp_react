import {createStore} from 'redux';
import CountReducer from '../reducers/CountReducers';


let store = createStore(CountReducer);

export default store;