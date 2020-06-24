import React from 'react'
import PropTypes from 'prop-types'
import { Button } from './styles'

export const SubmitButton = ({ children, disabled, onClick }) => {
  return <Button disabled={disabled} onClick={onClick}>{children}</Button>
}

SubmitButton.prototype = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired
}
