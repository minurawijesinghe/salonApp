import React, {Component} from 'react';
import {View, Text, Dimensions, StyleSheet,TouchableOpacity} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import Icon from 'react-native-vector-icons/Foundation';
import styles from './maScreenStyles';
import Geolocation from '@react-native-community/geolocation';
import FeatherIcons from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../../Theme /colors';


const screenDimensions = Dimensions.get('window');
const latitudeDelta = 0.005;
const longitudeDelta = 0.005;
export default class mapScreen extends Component {
  constructor(props) {
    super(props);
    this.map = null;

    this.handleRegionChange = this.handleRegionChange.bind(this);
    this.setNativeMapRef = this.setNativeMapRef.bind(this);

    this.state = {
      region: [],
      latitude: 0,
      longitude: 0,
      mLat: 0,
      mLon: 0,
      error: null,
      latitudeDelta,
      longitudeDelta,
    };
  }

  componentDidMount() {
    Geolocation.getCurrentPosition(
      position => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
      },
      error => this.setState({error: error.message}),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 2000},
    );
  }
  setNativeMapRef(ref) {
    this.map = ref;
  }
  handleRegionChange(region) {
    this.map
      .coordinateForPoint({x: 100, y: 200})
      .then(coords => console.log(coords))
      .catch(e => alert(e));
  }

  render() {
    return (
      <View style={StyleSheet.absoluteFillObject}>
        <Icon
          name="marker"
          style={{
            zIndex: 3,
            position: 'absolute',
            marginTop: -37,
            marginLeft: -11,
            left: '50%',
            top: '50%',
          }}
          size={40}
          color="#f00"
        />
        <TouchableOpacity style={styles.touchableView}  onPress={() => this.props.navigation.navigate('SignUp1')}>
        <LinearGradient
                colors={['#7F00FF', '#E100FF']}
                style={styles.mapButton}>
                <FeatherIcons
                  name={'arrow-right'}
                  color={Colors.darkBlack}
                  size={40}
                />
              </LinearGradient>
        </TouchableOpacity>
        <MapView
          showsMyLocationButton={true}
          showsUserLocation={true}
          shouldRasterizeIOS
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          ref={this.setNativeMapRef}
          region={{
            latitude: this.state.latitude,
            longitude: this.state.longitude,
            latitudeDelta: latitudeDelta,
            longitudeDelta: longitudeDelta,
          }}
          onRegionChangeComplete={this.handleRegionChange}
          //onRegionChangeComplete={this.handleRegionChange}
          // eslint-disable-next-line prettier/prettier
       />
      </View>
    );
  }
}
