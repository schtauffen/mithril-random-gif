import React from 'react'
import { Provider } from 'react-redux'
import { render } from 'react-dom'

import '~/main.styl'
import createStore from '~/store'
import App from '~/components/app.component'

render(
  <Provider store={createStore()}>
    <App />
  </Provider>,
  document.getElementById('app')
)
