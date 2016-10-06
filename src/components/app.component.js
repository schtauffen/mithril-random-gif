import React from 'react'
import { connect } from 'react-redux'

import { ping } from '~/actions'
import button from '~/shared/button.styl'

App.propTypes = {
  onClick: React.PropTypes.func,
  isPinging: React.PropTypes.bool,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

function App ({ onClick, isPinging }) {
  return (
    <div>
      <p>{isPinging.toString()}</p>
      <button className={button.link} onClick={onClick}>Ping!</button>
    </div>
  )
}

function mapStateToProps ({ isPinging }) {
  return { isPinging }
}

function mapDispatchToProps (dispatch) {
  return {
    onClick: () => dispatch(ping()),
  }
}
