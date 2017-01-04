/**
 * @flow
 */
'use strict'

import React, { Component } from 'react'
import {
  NavigationExperimental,
} from 'react-native'

import NavigationExampleRow from './NavigationExampleRow'
import Navigator from './Navigator'

const {
  StateUtils: NavigationStateUtils,
} = NavigationExperimental

export default class Application extends Component {

  constructor(props, context) {
    super(props, context)

    this.state = {
      navigationState: {
        index: 0,
        routes: [{ key: 'Welcome' }],
      },
    }

    this._exit = this._exit.bind(this)
    this._onNavigationChange = this._onNavigationChange.bind(this)
  }

  render() {
    return (
      <Navigator
        navigationState={this.state.navigationState}
        onNavigationChange={this._onNavigationChange}
        onExit={this._exit}
      />
    )
  }

  _onNavigationChange = (type) => {
    let {navigationState} = this.state

    switch (type) {
      case 'push':
        const route = { key: 'route-' + Date.now() }
        navigationState = NavigationStateUtils.push(navigationState, route)
        break

      case 'pop':
        navigationState = NavigationStateUtils.pop(navigationState)
        break
    }

    if (this.state.navigationState !== navigationState) {
      this.setState({ navigationState })
    }
  }

  _exit = () => {
    this.props.onExampleExit && this.props.onExampleExit()
  }

  handleBackAction = () => {
    return this._onNavigationChange('pop')
  }
}
