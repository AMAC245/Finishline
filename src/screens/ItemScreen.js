import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import api from '../../api'

export default class ItemScreen extends Component {
  render() {
    const { navigate } = this.props.navigation;
    const { items, response } = api
    
    return(
      <View style={styles.container}>
        <View>
          <Text style={styles.item}>
            In the last 30 days, {items.one}
          </Text>
        </View>

        <View>
          <Text>{response.one.text}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    paddingLeft: 30,
    backgroundColor: '#fff',
  },
  item: {
    fontSize: 28,
    color: '#222',
  }
})