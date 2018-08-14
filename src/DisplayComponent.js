import React from 'react'

const Display = function (props)
{
    return (
            <span style={{color:'red'}} >
            {props.value}
            <marquee>{props.name}</marquee>
</span>
    );
}

export default Display