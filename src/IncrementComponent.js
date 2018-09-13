import React, { Component } from 'react'
import PropTypes from 'prop-types';
import store from './store/store'

class Increment extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);

    }

    handleClick = function () {
        this.props.increment(this.props.value);
        store.dispatch({ type: 'TEST', data: this.props.value });
        
        store.dispatch(function (dispatch) { // this will give you error in console, add redux-thunk to solve this
            console.log('Inside thunk');
            dispatch({ type: 'TEST', data: 'thunk' });
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick} >Increment +{this.props.value}</button>
                <br />
            </div>
        );
    }

}

export default Increment