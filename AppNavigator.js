import { I18nManager, Platform, StyleSheet, Text, View } from 'react-native';
import { systemWeights } from 'react-native-typography';
import { Icon, Touchable } from '@draftbit/ui';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import theme from './themes/Draftbit.js';
import LinkingConfiguration from './LinkingConfiguration.js';
import React from 'react';
import useWindowDimensions from './utils/useWindowDimensions';

import CRMScreen from './screens/CRMScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function RootAppNavigator() {
  return (
    <NavigationContainer linking={LinkingConfiguration}>
      <Stack.Navigator>
        <Stack.Screen
          name="CRMScreen"
          component={CRMScreen}
          options={({ navigation }) => ({
            title: 'CRM',
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
