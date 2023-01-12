import React from 'react'
import "./MyInput.css"

export const MyInput = (props) => {
  return (
    <div>
     <input className='my-input' {...props}/>
    </div>
  )
}

export default MyInput