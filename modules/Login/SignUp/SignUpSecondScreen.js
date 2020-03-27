import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import styles from '../styles';
import {Item, Input, Label} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import FeatherIcons from 'react-native-vector-icons/Feather';
import Colors from '../../../Theme /colors';
export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.signUpInnerContainer}>
          <Text style={styles.headerText}> SALA </Text>

          <Text style={styles.signInText}> Continue Sign Up </Text>
          <View style={styles.descriptionTextContainer}>
            <Text style={styles.descriptionText}>Description</Text>
            <Text style={styles.descriptionTextFlex}>
              (This will appear on your profile)
            </Text>
          </View>
          <View style={styles.descriptionContainer}>
            <TextInput multiline style={styles.descriptionTextInput} />
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.itemContainer}>
              <Item floatingLabel>
                <Label style={styles.labeleStyle}>Address 1</Label>
                <Input />
              </Item>
            </View>
            <View style={styles.itemContainer}>
              <Item floatingLabel>
                <Label style={styles.labeleStyle}>Address 2(optional)</Label>
                <Input keyboardType={'numeric'} />
              </Item>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <Text style={styles.bottomSignIn}>Next</Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('SignUp3')}>
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
