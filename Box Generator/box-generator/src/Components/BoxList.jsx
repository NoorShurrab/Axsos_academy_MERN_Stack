import React from 'react'

const divStyle = {
    display: 'flex',
    justifyContent: 'center',
}

const BoxList = (props) => {
    return (
        <div style={divStyle}>
            {props.boxes.map((box, index) => (
                <div key={index} style={{ 
                    backgroundColor: box.color, 
                    width: `${box.size}px`, 
                    height:  `${box.size}px`,
                    margin: '10px',  }}></div>
            ))}
        </div>
    )
}

export default BoxList
