import "./Button.css"
import React from 'react'

const Button = ({children, ...props}) => {
  return (
    <div>
     <button className="btn" {...props}>{children}</button>
    </div>
  )
}

export default Button;