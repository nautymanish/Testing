import React, { Component } from 'react'
import PropTypes from 'prop-types';

class Increment extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick= this.handleClick.bind(this);
        
    }

 handleClick = function()
 {
    this.props.increment(this.props.value);
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