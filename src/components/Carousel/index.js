import React from 'react'
import defaultStyles from './styles'
import SubjectImage from '../SubjectImage'
import Image from '../Image'
import View from '../View'
import getImageUrl from '../../lib/scene/getImageUrl'
import range from '../../lib/range'
import absmod from '../../lib/absmod'
import transitionProps from '../../hoc/transitionProps'
import CssSlide from '../CssSlide'

const Slide = ({ scene, isActive }) => (
  <div style={defaultStyles.slide}>
    <SubjectImage isActive={isActive}>
      <Image src={getImageUrl(scene.thumbFilename)} />
    </SubjectImage>
  </div>
)

const Carousel = ({ activeIndex, currentIndex, scenes, transitions }) => {
  const onChangeIndex = index => {
    console.log('INDEX_CHANGED', index)
  }
  const slides = range(currentIndex - 3, currentIndex + 3)

  // calculate transition properties
  const tx = { amount: 0, isActive: false }
  if (transitions.currentIndex.isActive) {
    const { nextValue } = transitions.currentIndex
    const slideSign =
      nextValue > activeIndex ||
      (activeIndex === scenes.length - 1 && nextValue === 0)
        ? ''
        : '-'
    tx.isActive = true
    tx.amount = `${slideSign}${100 / scenes.length - 2.5}%`
    console.log('transition', tx)
  }

  return (
    <CssSlide isTransitioning={tx.isActive} amount={tx.amount}>
      <View style={defaultStyles.carousel}>
        {slides.map(index => (
          <Slide
            scene={scenes[absmod(index, scenes.length)]}
            key={index}
            isActive={absmod(index, scenes.length) === activeIndex}
          />
        ))}
      </View>
    </CssSlide>
  )
}

export default transitionProps({
  propsToTransition: () => ({
    currentIndex: {
      duration: 500,
      compare: ({ pre, post }) => pre === post,
    },
  }),
})(Carousel)
