/**
 * @flow
 */
'use strict'

import React, { Component } from 'react'
import {
  NavigationExperimental,
  StyleSheet,
} from 'react-native'

import Scene from './Scene'

const {
  CardStack: NavigationCardStack,
} = NavigationExperimental

export default class Navigator extends React.Component {

  constructor(props, context) {
    super(props, context)

      this._onPushRoute = this.props.onNavigationChange.bind(null, 'push')
      this._onPopRoute = this.props.onNavigationChange.bind(null, 'pop')
      this._renderScene = this._renderScene.bind(this)
  }

  render() {
    return (
      <NavigationCardStack
        onNavigateBack={this._onPopRoute}
        navigationState={this.props.navigationState}
        renderScene={this._renderScene}
        style={styles.navigator}
      />
    )
  }

  _renderScene = (sceneProps) => {
    return (
      <Scene
        route={sceneProps.scene.route}
        onPushRoute={this._onPushRoute}
        onPopRoute={this._onPopRoute}
        onExit={this.props.onExit}
      />
    )
  }
}

const styles = StyleSheet.create({
  navigator: {
    flex: 1,
  },
})
