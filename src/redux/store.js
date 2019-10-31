import {createStore} from 'react-redux';

import {rootReducer} from './reducers';


const initialState = {
    
    currentView : ''

};

const store = createStore(rootReducer,initialState);

module.exports={
    store
}