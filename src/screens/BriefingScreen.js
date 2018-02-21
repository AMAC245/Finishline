import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class BriefingScreen extends Component {
  render() {
    return(
      <View style={styles.container}>
        <Text style={ [styles.Font, styles.instructions] }>
          For all questions, please select the appropriate response.
        </Text>

        <Text style={styles.reminder}>
          Answers should be based on your experiences within the last 30 days.
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={ [styles.Font, { color: "#fff", textAlign: 'center' }] }>
            Begin tasks 
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const MAIN_BLUE = '#007aff';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 30
  },
  button: {
    backgroundColor: MAIN_BLUE,
    padding: 13,
    borderRadius: 5,
  },
  instructions: {
    color: '#222',
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 26
  },
  reminder: {
    fontSize: 14, 
    textAlign: 'center', 
    padding: 20, 
    color: '#333', 
    lineHeight: 18 
  } 
});