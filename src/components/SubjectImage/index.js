import React from 'react'
import defaultStyles from './styles'

const SubjectImage = ({ style, children, className }) => {
  const image = React.cloneElement(React.Children.only(children), {
    style: defaultStyles.image,
  })
  const shadowImage = React.cloneElement(image, {
    style: defaultStyles.shadowImage,
  })
  return (
    <div style={{ ...style, ...defaultStyles.container }} className={className}>
      {shadowImage}
      {image}
    </div>
  )
}

export default SubjectImage
