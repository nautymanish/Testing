import React, { Component } from 'react'


class Increment extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick= this.handleClick.bind(this);
        
    }
 handleClick = function()
 {
     this.props.increment(parseInt(this.props.value));
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