import React, {Component} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import styles from './styles';
import {Item, Input, Label} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import FeatherIcons from 'react-native-vector-icons/Feather';
import Colors from '../../Theme /colors';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ScrollView>
        <LinearGradient
          colors={['#7F00FF', '#E100FF']}
          style={styles.upperContainer}>
          <Text style={styles.headerText}> Welcome </Text>

          <Text style={styles.signInText}> Sign in to continue </Text>
        </LinearGradient>
        <View style={styles.innerContainer}>
          <View style={styles.inputContainer}>
            <View style={styles.itemContainer}>
              <Item floatingLabel>
                <Label style={styles.labeleStyle}>User Name</Label>
                <Input />
              </Item>
            </View>
            <View style={styles.itemContainer}>
              <Item floatingLabel>
                <Label style={styles.labeleStyle}>Password</Label>
                <Input />
              </Item>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <Text style={styles.bottomSignIn}>Sign in</Text>
            <TouchableOpacity>
              <LinearGradient
                colors={['#7F00FF', '#E100FF']}
                style={styles.signInButton}>
                <FeatherIcons
                  name={'arrow-right'}
                  color={Colors.darkBlack}
                  size={40}
                />
              </LinearGradient>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <Text
              style={styles.touchableText}
              onPress={() => this.props.navigation.navigate('SignUp')}>
              Sign Up
            </Text>
            <Text style={styles.touchableText}>Forgot password?</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}
