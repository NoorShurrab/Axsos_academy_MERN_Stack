import React from 'react'

const mainStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#e06666', 
    border: '2px solid black',
    width: '1200px',
    height: '600px',
    margin: '20px',
}

const Main = (props) => {
  return (
    <div style={mainStyle}>
      {props.children}
    </div>
  )
}

export default Main
