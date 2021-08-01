/* eslint-disable comma-dangle */
import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { COLORS, icons } from '../constants';

import { Home } from '../screens';

const Tab = createBottomTabNavigator();
const tabOptions = {
  showLabel: false,
  style: {
    height: '10%',
    backgroundColor: COLORS.black
  }
};

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={tabOptions}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          const tintColor = focused ? COLORS.white : COLORS.gray;

          switch (route.name) {
            case 'Home':
              return (
                <Image
                  source={icons.dashboard_icon}
                  resizeMode="contain"
                  style={[styles.icon, { tintColor: tintColor }]}
                />
              );
            case 'Search':
              return (
                <Image
                  source={icons.search_icon}
                  resizeMode="contain"
                  style={[styles.icon, { tintColor: tintColor }]}
                />
              );
            case 'Notification':
              return (
                <Image
                  source={icons.notification_icon}
                  resizeMode="contain"
                  style={[styles.icon, { tintColor: tintColor }]}
                />
              );
            case 'Setting':
              return (
                <Image
                  source={icons.menu_icon}
                  resizeMode="contain"
                  style={[styles.icon, { tintColor: tintColor }]}
                />
              );
          }
        }
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Home} />
      <Tab.Screen name="Notification" component={Home} />
      <Tab.Screen name="Setting" component={Home} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 25,
    height: 25
  }
});

export default Tabs;
