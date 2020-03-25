import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import styles from '../styles';
import {Item, Input, Label} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import FeatherIcons from 'react-native-vector-icons/Feather';
import EntypoIcons from 'react-native-vector-icons/Entypo';
import Colors from '../../../Theme /colors';
import ImagePicker from 'react-native-image-crop-picker';

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profilePath: null,
      coverPath: null,
    };
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.signUpInnerContainer}>
          <Text style={styles.headerText}> Welcome </Text>

          <Text style={styles.signInText}> Sign in to continue </Text>
          <View style={styles.inputContainer}>
            <TouchableOpacity
              style={styles.profilePhotoTake}
              onPress={() =>
                ImagePicker.openPicker({
                  width: 300,
                  height: 300,
                  cropping: true,
                }).then(image => {
                  this.setState({
                    profilePath: image.path,
                  });
                })
              }>
              <ImageBackground
                source={{uri: this.state.profilePath}}
                style={styles.profileImageBackground}>
                <EntypoIcons name="camera" color={Colors.darkBlack} size={40} />
                <Text style={styles.textInsideProfileButton}>
                  Add Profile photo
                </Text>
              </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.coverPhotoTake}
              onPress={() =>
                ImagePicker.openPicker({
                  width: 300,
                  height: 200,
                  cropping: true,
                }).then(image => {
                  this.setState({
                    coverPath: image.path,
                  });
                })
              }>
              <ImageBackground
                source={{uri: this.state.coverPath}}
                style={styles.coverImageBackground}>
                <EntypoIcons name="camera" color={Colors.darkBlack} size={40} />
                <Text style={styles.textInsideCoverButton}>
                  Add cover photo
                </Text>
              </ImageBackground>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <Text style={styles.bottomSignIn}>Sign Up</Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('SignUp2')}>
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
