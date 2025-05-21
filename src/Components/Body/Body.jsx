import React from 'react'
import'./Body.css'

function Body(props) {
  return (
    <div id="bodycontent">
        <h3>Body content</h3>
        {props.children}
    </div>
  )
}

export default Body