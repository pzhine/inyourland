import React from 'react'
import { storiesOf } from '@storybook/react'
import Decorate from '../../../.storybook/Decorate'
import SubjectImage from './'
import Image from '../Image'

storiesOf('SubjectImage', module)
  .addDecorator(story => <Decorate story={story()} />)
  .add('image only', () => (
    <SubjectImage>
      <Image src="http://placekitten.com/g/300/200" />
    </SubjectImage>
  ))
