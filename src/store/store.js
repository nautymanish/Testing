import {applyMiddleware, createStore} from 'redux';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';

var defaultState= {Name : 'Testing Redux'};
var amount = (state=defaultState, action)=>
{
    if(action.type==='TEST'){
            
            return Object.assign({},state, {Name: state.Name + action.data});
    }
    return state;
} 

var logger = createLogger(
    {
        collapsed:true
    }
);
var store=createStore(amount,
applyMiddleware(thunk, logger)); //logger should always be last module to add

store.subscribe(
function()
{
    console.log('State is ' + store.getState());
}

);

store.dispatch({type:'TEST', data: 'Incremented by '});

export default store;