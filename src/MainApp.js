import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer'
import Display from './DisplayComponent'
import Increment from './IncrementComponent'
import store from './store/store'

class MainApp extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state= {value : 0};
        this.increment = this.increment.bind(this);
    }
    increment=function(id)
    {
      this.setState((prevState)=>{
        
            return {value: prevState.value + id};
                }            
        );
    }
    render()
    {
        return (
            <div>
            <Header name='Manish' />
            <br/>
            <Increment value={ 1 } increment= {this.increment} storeValue = {store.getState().Name}/>
            <Display value={this.state.value} name = 'Value Incremented' storeValue = {store.getState().Name}/>
            <br/>
            <Footer year="2018" />
            </div>
        );
    }
}

export default MainApp