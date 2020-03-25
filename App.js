import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LoginScreen from './modules/Login/LoginScreen';
import SignUpScreen from './modules/Login/SignUpScreen';
import SignUp1 from './modules/Login/SignUp/SignUpfirstScreen';
import SignUp2 from './modules/Login/SignUp/SignUpSecondScreen';
import OTPVerification from './modules/Login/SignUp/OTPVerificationScreen';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MapScreen from './modules/Login/Maps/mapScreen';

const Stack = createStackNavigator();

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="OTPVerification"
        screenOptions={{
          headerShown:false
        }}
        >
          <Stack.Screen name="Map" component={MapScreen}/>
          <Stack.Screen name="OTPVerification" component={OTPVerification}/>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
          <Stack.Screen name="SignUp1" component={SignUp1} />
          <Stack.Screen name="SignUp2" component={SignUp2} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({});
