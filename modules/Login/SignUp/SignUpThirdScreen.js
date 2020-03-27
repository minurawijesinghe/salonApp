import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import CountryPicker, {
  getAllCountries,
  getCallingCode,
} from 'react-native-country-picker-modal';

export default class SignUpThirdScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <CountryPicker withEmoji />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
