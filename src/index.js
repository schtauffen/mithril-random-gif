import React from 'react'
import { Provider } from 'react-redux'
import { render } from 'react-dom'

import '~/main.styl'
import createStore from '~/store'
import App from '~/components/app.component'

const store = createStore()

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
