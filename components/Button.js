import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ bgcolor, text, color , onClick }) => {

  return (<button 
    className='btn' 
    onClick={onClick}
    style={{background:bgcolor, color:color}}>{text}</button>)
}

Button.defaultProps = {
    bgcolor: 'black',
    text: 'Add',
    color: 'white'
}

Button.prototype = {
    text: PropTypes.string,
    color: PropTypes.string,
    background: PropTypes.string,
    onClick: PropTypes.func
}

export default Button
