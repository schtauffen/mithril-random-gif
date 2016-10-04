import React from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'

import { ping } from '~/actions'

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

function App ({ onClick, isPinging }) {
  return (
    <div>
      <p>{isPinging.toString()}</p>
      <button onClick={onClick}>Ping!</button>
    </div>
  )
}

function mapStateToProps ({ isPinging }) {
  return { isPinging }
}

function mapDispatchToProps (dispatch) {
  return {
    onClick: () => dispatch(ping())
  }
}
