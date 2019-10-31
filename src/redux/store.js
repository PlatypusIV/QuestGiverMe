import {createStore} from 'react-redux';

import {rootReducer} from './reducers';


const initialState = {
    
    currentView : '',
    userTask:[]

};

const store = createStore(rootReducer,initialState);

module.exports={
    store
}