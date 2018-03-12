import React from 'react'
import { Provider } from 'react-redux'
import store from '../../redux/configureStore'
import styles from './styles'

import Text from '../Text'
import Container from '../View'

const App = () => (
  <Provider store={store}>
    <Container style={styles}>
      <Text>Hello world</Text>
    </Container>
  </Provider>
)

export default App
