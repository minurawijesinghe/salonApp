import React, {Component} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import styles from './styles';
import {Item, Input, Label} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import FeatherIcons from 'react-native-vector-icons/Feather';
import Colors from '../../Theme /colors';
export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ScrollView>
 <View style={styles.signUpInnerContainer}>
          <Text style={styles.headerText}> Welcome </Text>

          <Text style={styles.signInText}> Sign in to continue </Text>
          <View style={styles.inputContainer}>
            <View style={styles.itemContainer}>
              <Item floatingLabel>
                <Label style={styles.labeleStyle}>Salon Name</Label>
                <Input />
              </Item>
            </View>
            <View style={styles.itemContainer}>
              <Item floatingLabel>
                <Label style={styles.labeleStyle}>Phone number</Label>
                <Input keyboardType={'numeric'}/>
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
            <Text style={styles.bottomSignIn}>Sign Up</Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('OTPVerification')}>
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
        </View>
      </ScrollView>
    );
  }
}
