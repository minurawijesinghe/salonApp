import {StyleSheet, Dimensions} from 'react-native';
import Colors from '../../../Theme /colors';
import {Fonts} from '../../../src/utils/fonts';

const win = Dimensions.get('window');

const styles = StyleSheet.create({
  map: {
    height: win.height,
    width: win.width,
  },
  mapButton:{
    
    borderRadius:20,
    justifyContent: 'center',
    alignItems: 'center',
    width: 90,
    height: 90,
    borderRadius: 90 / 2,
    
  },
  touchableView:{
    zIndex: 3,
    position: 'absolute',
    alignSelf:'center',
    marginTop:win.height*0.85,
  },
});

export default styles;
