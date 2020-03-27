import {StyleSheet, Dimensions} from 'react-native';
import Colors from '../../Theme /colors';
import {Fonts} from '../../src/utils/fonts';

const win = Dimensions.get('window');

const styles = StyleSheet.create({
  headerText: {
    fontFamily: Fonts.openSans,
    color: Colors.white,
    fontSize: 35,
    marginHorizontal: 20,
    marginTop: 40,
    letterSpacing: 5,
  },
  signInText: {
    fontFamily: Fonts.openSans,
    color: Colors.white,
    marginTop: 10,
    marginHorizontal: 30,
  },
  upperContainer: {
    width: win.width,
    height: 270,
    backgroundColor: Colors.darkBlack,
  },
  innerContainer: {
    width: win.width,
    height: win.height,
    backgroundColor: Colors.darkBlack,
    marginTop: -50,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  inputContainer: {
    paddingTop: 30,
    paddingHorizontal: 20,
  },
  itemContainer: {
    marginTop: 30,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 40,
  },
  bottomSignIn: {
    color: Colors.white,
    fontSize: 30,
    flex: 1,
  },
  signInButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 90,
    height: 90,
    borderRadius: 90 / 2,
  },
  touchableText: {
    color: Colors.white,
    textDecorationLine: 'underline',
  },
  signUpInnerContainer: {
    width: win.width,
    height: win.height,
    backgroundColor: Colors.darkBlack,
  },
  coverPhotoTake: {
    backgroundColor: Colors.black,
    marginTop: 15,
    width: 300,
    height: 170,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInsideCoverButton: {
    fontFamily: Fonts.openSans,
    marginTop: 5,
    fontSize: 15,
  },
  profilePhotoTake: {
    width: 150,
    height: 150,
  },
  textInsideProfileButton: {
    fontFamily: Fonts.openSans,
    marginTop: 5,
    fontSize: 15,
  },
  profileImageBackground: {
    backgroundColor: Colors.black,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  },
  coverImageBackground: {
    backgroundColor: Colors.black,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  },
  buttonContainerImageI: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginTop: 100,
  },
  descriptionContainer: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    alignSelf: 'center',
    width: '90%',
    borderRadius: 20,
    height: 100,
    backgroundColor: Colors.black,
  },
  descriptionTextContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginHorizontal: 20,
    alignItems: 'center',
  },
  descriptionText: {
    fontFamily: Fonts.openSans,
    fontSize: 18,
    color: Colors.white,
    marginTop: 30,
    marginBottom: 10,
  },
  descriptionTextFlex: {
    fontFamily: Fonts.openSans,
    fontSize: 15,
    color: Colors.white,
    marginTop: 30,
    marginBottom: 10,
    marginHorizontal: 5,
  },
  descriptionTextInput: {
    width: '90%',
    fontFamily: Fonts.openSans,
    color: Colors.darkBlack,
    fontSize: 16,
    marginTop:5,
  },
  countryPickerContainer:{
    marginTop:30,
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center',
    marginBottom:-20
  },
  selectCountryText:{
    fontFamily:Fonts.openSans,
    color:Colors.white,
    marginRight:20,
  },
  countryContainer:{
    width:250,
    height:40,
    backgroundColor:Colors.black,
    borderRadius:20,
  },
});

export default styles;
