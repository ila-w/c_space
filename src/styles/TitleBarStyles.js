import {StyleSheet, Dimensions} from "react-native";
const {width, height} = Dimensions.get('window');
const TitleBarStyles = StyleSheet.create({
    
    container: {
      flex: 1,
      justifyContent:'flex-end'
      
    },
    

});

export default TitleBarStyles;