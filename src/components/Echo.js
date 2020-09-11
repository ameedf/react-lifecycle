import React from 'react';

function echo1(props) {
  const divStyle = {
    margin: 'auto',
    width: '40%'
  }

  divStyle.backgroundColor = (props.type === 'failure')
    ? 'red' : 'green';

  return (
    <div style={divStyle}>
      <h1>Title: {props.title}</h1>
    <div style = {{backgroundColor: 'yellow'}}>
      {props.children}
      </div>
    </div>
  )
}

export default echo1;