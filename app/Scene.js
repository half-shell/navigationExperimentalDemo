/**
 * @flow
 */
'use strict'
import React, { Component } from 'react'
import {
  ScrollView,
} from 'react-native'

import NavigationExampleRow from './NavigationExampleRow'

export default class Scene extends Component {
  render() {
    return (
      <ScrollView>
        <NavigationExampleRow
          text={'route = ' + this.props.route.key}
        />
        <NavigationExampleRow
          text="Push Route"
          onPress={this.props.onPushRoute}
        />
        <NavigationExampleRow
          text="Pop Route"
          onPress={this.props.onPopRoute}
        />
        <NavigationExampleRow
          text="Exit Card Stack Example"
          onPress={this.props.onExit}
        />
      </ScrollView>
    )
  }
}
