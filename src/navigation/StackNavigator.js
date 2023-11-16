import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';

//icons
import Icon from 'react-native-vector-icons/MaterialIcons';

//screens
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  const Drawer = createDrawerNavigator();

  function BottomTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'SNSU',
            tabBarLabelStyle: {color: '#008E97', fontSize: 13},
            headerShown: false,
            tabBarIcon: ({focused}) => {
              return focused ? (
                <Icon name="home" size={35} color="#26b99a" />
              ) : (
                <Icon name="home" size={35} color="#02602f" />
              );
            },
          }}
        />

        <Tab.Screen
          name="Enrollment"
          component={LoginScreen}
          options={{
            tabBarLabel: 'Enrollment',
            tabBarLabelStyle: {color: '#008E97', fontSize: 13},
            headerShown: false,
            tabBarIcon: ({focused}) => {
              return focused ? (
                <Icon name="cloud" size={35} color="#26b99a" />
              ) : (
                <Icon name="cloud" size={35} color="#02602f" />
              );
            },
          }}
        />

        <Tab.Screen
          name="Inbox"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Inbox',
            tabBarLabelStyle: {color: '#008E97', fontSize: 13},
            headerShown: false,
            tabBarBadge: 1,
            tabBarIcon: ({focused}) => {
              return focused ? (
                <Icon name="inbox" size={35} color="#26b99a" />
              ) : (
                <Icon name="inbox" size={35} color="#02602f" />
              );
            },
          }}
        />

        <Tab.Screen
          name="Notification"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Notification',
            tabBarLabelStyle: {color: '#008E97', fontSize: 13},
            headerShown: false,
            tabBarBadge: 3,
            tabBarIcon: ({focused}) => {
              return focused ? (
                <Icon name="notifications" size={35} color="#26b99a" />
              ) : (
                <Icon name="notifications" size={35} color="#02602f" />
              );
            },
          }}
        />

        <Tab.Screen
          name="Settings"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Settings',
            tabBarLabelStyle: {color: '#008E97', fontSize: 13},
            headerShown: false,
            tabBarIcon: ({focused}) => {
              return focused ? (
                <Icon name="settings" size={35} color="#26b99a" />
              ) : (
                <Icon name="settings" size={35} color="#02602f" />
              );
            },
          }}
        />
      </Tab.Navigator>
    );
  }

  function MyDrawer() {
    return (
      <Drawer.Navigator>
        <Drawer.Screen name="SNSU Portal" component={BottomTabs} />
        <Drawer.Screen name="Article" component={LoginScreen} />
      </Drawer.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Main"
          component={MyDrawer}
          options={{headerShown: false}}
        />


        {/* <Stack.Screen
          name="Mains"
          component={BottomTabs}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Mains"
          component={MyDrawer}
          options={{headerShown: false}}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
