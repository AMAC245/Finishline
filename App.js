import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import BriefingScreen from './src/screens/BriefingScreen';

const NavigationRoutes = StackNavigator({
  Brief: { screen: BriefingScreen },
})

export default NavigationRoutes;


