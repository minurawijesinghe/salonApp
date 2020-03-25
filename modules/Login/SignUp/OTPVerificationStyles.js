import {StyleSheet, Dimensions} from 'react-native';
import Colors from '../../../Theme /colors';
import {Fonts} from '../../../src/utils/fonts';

const win = Dimensions.get('window');
const styles = StyleSheet.create({
    Container:{
        height:win.height,
        width:win.width,
        backgroundColor:Colors.darkBlack,
        alignItems:'center',

    },
    OTPText:{
        letterSpacing:5,
        marginTop:200,
        alignSelf:'center',
        fontFamily:Fonts.openSans,
        fontSize:30,
        color:Colors.white,
    },
    inputContainer:{
        height:50,
        width:130,
        borderRadius:10,
        marginTop:20,
        backgroundColor:Colors.white,
        justifyContent:'center',
        alignItems:'center',
    },
    normalText:{
        fontFamily:Fonts.openSans,
        color:Colors.black,

    
    },
    textInput:{
        height:'100%',
        width:'100%',
        fontFamily:Fonts.openSans,
        fontSize:25,
        letterSpacing:15,
        fontWeight:'bold'

    },
    verifyButton:{
        backgroundColor:Colors.black,
        borderRadius:10,
        width:100,
        height:50,
        marginVertical:30,
        alignItems:'center',
        justifyContent:'center',
    },
});
export default styles;