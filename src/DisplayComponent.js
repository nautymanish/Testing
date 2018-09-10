import React from 'react'

const Display = function (props)
{
    return (
            <span style={{color:'red'}} >
            {props.value}
            <marquee>{props.name}</marquee>
            <h1>{props.storeValue}</h1>
</span>
    );
}

export default Display