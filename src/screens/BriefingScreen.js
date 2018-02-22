import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class BriefingScreen extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return(
      <View style={styles.container}>
        <Text style={ [styles.Font, styles.instructions] }>
          Instructions
        </Text>

        <Text style={styles.reminder}>
          For all questions, select the appropriate 
          response. Answers should be based on your 
          experiences within the last 30 days.
        </Text>

        <TouchableOpacity 
          onPress={ () => navigate('Items') }
          style={styles.button}
        >
          <Text style={styles.buttonText}>
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
    padding: 30,
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
    paddingTop: 20, 
    paddingBottom: 40, 
    color: '#333', 
    lineHeight: 22,
    fontWeight: '300',
  },
  button: {
    backgroundColor: MAIN_BLUE,
    padding: 16,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff", 
    textAlign: 'center', 
    fontSize: 16 
  }
});