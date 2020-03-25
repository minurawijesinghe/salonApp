import {StyleSheet, Dimensions} from 'react-native';
import Colors from '../../../Theme /colors';
import {Fonts} from '../../../src/utils/fonts';

const win = Dimensions.get('window');

const styles = StyleSheet.create({
    map:{
        height:win.height,
        width:win.width,
    },
});

export default styles;
