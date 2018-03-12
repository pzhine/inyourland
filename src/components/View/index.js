import React from 'react'
import defaultStyles from './styles'

const Container = ({ style, children, className }) =>
  <div style={{...style, defaultStyles}} className={className}>
    {children}
  </div>

export default Container
