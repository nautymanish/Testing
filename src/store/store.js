import {createStore} from 'redux';
debugger;
var defaultState= {Name : 'Testing Redux'};
var amount = (state=defaultState, action)=>
{
    if(action.type==='TEST'){
            
            return Object.assign({},state, {Name: state.Name + action.data});
    }
    return state;
} 

var store=createStore(amount);

store.subscribe(
function()
{
    console.log('State is ' + store.getState());
}

);

store.dispatch({type:'TEST', data: 'Incremented by '});

export default store;