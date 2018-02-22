import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import BriefingScreen from './src/screens/BriefingScreen';
import ItemScreen from './src/screens/ItemScreen';

const NavigationRoutes = StackNavigator({
  Brief: { screen: BriefingScreen },
  Items: { screen: ItemScreen }
}, {
  headerMode: 'none',
  cardStyle: { backgroundColor: 'transparent' }
})

export default NavigationRoutes;