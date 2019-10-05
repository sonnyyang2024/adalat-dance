import React from 'react'
import './Button.scss'

const Button = ({
  text,
  link
}) => <a className="button" href={link}>{text}</a>

export default Button
