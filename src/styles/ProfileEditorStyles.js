import {StyleSheet, Dimensions} from "react-native";
const {width, height} = Dimensions.get('window');
const PEStyles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: '#fff',
    },
    formContainer: {
      marginTop:60
    },
    field: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 16,
      marginTop:16
    },
    input: {
      flex: 1,
      marginLeft: 16,
      fontSize: 18,
    },
    button: {
      backgroundColor: 'rgba(0,255,188,0.8)',
      borderRadius: 4,
      paddingVertical: 12,
      paddingHorizontal: 16,
      alignSelf: 'flex-start',
    },
    buttonText: {
      color: '#000',
      fontSize: 18,
      fontWeight: 'bold',
    },
    titleBarContainer: {
      backgroundColor:'rgba(0,255,188,0.8)',
      width: width,
      height: 50,
      position: 'absolute',
     
    }
  });
  
  export default PEStyles;