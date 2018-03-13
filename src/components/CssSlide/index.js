import React from 'react'
import styles from './styles.scss'

const CssSlide = ({ isTransitioning, children, amount }) => {
  const child = React.Children.only(children)
  return React.cloneElement(child, {
    ...(isTransitioning
      ? {
          className: styles.slide,
          style: {
            ...child.props.style,
            transform: `translateX(${amount})`,
          },
        }
      : {}),
  })
}

export default CssSlide
