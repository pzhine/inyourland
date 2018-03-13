import React, { Component } from 'react'
import { storiesOf } from '@storybook/react'
import Carousel from './'
import scenes from '../../../content/scenes/stream0.json'
import { mixins } from '../../shared-styles'

const containerStyle = {
  ...mixins.centerBoth,
  backgroundColor: '#333',
  width: '768px',
  height: '1024px',
  overflow: 'hidden',
}

const Decorate = ({ story }) => <div style={containerStyle}>{story}</div>

class AutoPlay extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentIndex: 0,
    }
  }
  componentDidMount() {
    setInterval(() => {
      let nextIndex = this.state.currentIndex + 1
      if (nextIndex >= scenes.length) {
        nextIndex = 0
      }
      console.log('AUTOPLAY', nextIndex)
      this.setState({ currentIndex: nextIndex })
    }, 3000)
  }
  render() {
    return <Carousel scenes={scenes} currentIndex={this.state.currentIndex} />
  }
}

storiesOf('Carousel', module)
  .addDecorator(story => <Decorate story={story()} />)
  .add('default', () => <Carousel scenes={scenes} currentIndex={0} />)
  .add('autoPlay', () => <AutoPlay />)
