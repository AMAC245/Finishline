import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

import * as constants from '../constants/styles';
const splashImage = require('../assets/brain.jpg');

export default class BriefingScreen extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return(
      <View style={styles.container}>
        <View style={{ position: 'relative', top: 60, width: 400, height: 400 }}>
          <Image source={splashImage} style={{ flex: 1, width: null, height: null}} />
        </View>

        <Text style={styles.instructions}> Instructions </Text>

        <Text style={styles.reminder}>
          For all questions, select the most appropriate 
          response. Answers should be based on your experiences 
          within the last 30 days.
        </Text>

        <TouchableOpacity 
          onPress={ () => navigate('Items') }
          style={styles.button}
        >
          <Text style={styles.buttonText}> Begin tasks </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

// const MAIN_BLUE = '#007aff';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  instructions: {
    color: '#333',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 30,
  },
  reminder: {
    fontSize: 16, 
    textAlign: 'center',
    margin: 10,
    paddingTop: 20, 
    paddingBottom: 30, 
    color: '#333', 
    lineHeight: 22,
    fontWeight: '400',
  },
  button: {
    backgroundColor: constants.MAIN_BLUE,
    padding: 16,
    borderRadius: 5,
    margin: 20
  },
  buttonText: {
    color: "#fff", 
    textAlign: 'center', 
    fontSize: 16 
  }
});