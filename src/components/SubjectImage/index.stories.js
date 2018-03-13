import React from 'react'
import { storiesOf } from '@storybook/react'
import SubjectImage from './'
import Image from '../Image'
import { mixins } from '../../shared-styles'

const containerStyle = {
  ...mixins.centerBoth,
  backgroundColor: '#333',
  height: '100vh',
}

const Decorate = ({ story }) => <div style={containerStyle}>{story}</div>

storiesOf('SubjectImage', module)
  .addDecorator(story => <Decorate story={story()} />)
  .add('default', () => (
    <SubjectImage>
      <Image src="http://fillmurray.com/300/200" />
    </SubjectImage>
  ))
  .add('active', () => (
    <SubjectImage isActive>
      <Image src="http://fillmurray.com/300/200" />
    </SubjectImage>
  ))
