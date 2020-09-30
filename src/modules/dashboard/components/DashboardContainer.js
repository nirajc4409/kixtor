import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'

// Components
import * as actions from '../redux/actions'

class DashboardContainer extends Component {
  componentDidMount () {
    console.log('5::-> DEBUG DashboardContainer')
    this.props.setAccessToken()
  }
  
  render () {
    return (
      <div>
          DashboardContainer
      </div>
    )
  }
}
const mapStateToProps = state => ({
  
})
const mapDispatchToProps = dispatch => ({
  setAccessToken: accessToken => dispatch(actions.setAccessToken(accessToken)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(DashboardContainer))
