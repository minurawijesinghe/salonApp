import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import styles from './OTPVerificationStyles';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../../Theme /colors';

export default class OTPVerificationScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      OTPcode: null,
    };
  }
  updateOTPcode() {
    this.setState({
      OTPcode: null,
    });
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.Container}>
          <Text style={styles.OTPText}>OTP verification</Text>
          <Text style={styles.normalText}>
            {' '}
            Enter the one time passwords you{' '}
          </Text>
          <Text style={styles.normalText}> received to your mobile phone</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInput}
              maxLength={4}
              keyboardType={'phone-pad'}
            />
          </View>
          <TouchableOpacity
            style={styles.verifyButton}
            onPress={() => this.props.navigation.navigate('Map')}>
            <Text>Next</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}
