import {StyleSheet, Dimensions} from "react-native";
const {width, height} = Dimensions.get('window');
const MSStyles = StyleSheet.create({

    MainContainer: {
        flex:1,
    },
    MessageButtonContainer: {
        backgroundColor: 'rgba(0,255,188,0.8)',
        width:width-20,
        alignSelf:'center',
        position: 'absolute',
        bottom: 15,
        left: 10,
        right: 0,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 90,
        borderColor: 'rgba(0,0,0,0.8)',
        borderWidth: 2
        
    },
    MessageButtonText: {
        fontSize: 25,
        fontWeight: '600',
        letterSpacing: 1.5
        

    },
    SearchBarContainer: {
        width:width-30,
        height:50,
        justifyContent:'center',
        alignItems:'baseline',
        position:"absolute",
        top:45,
        left:15,
        borderRadius: 40,
        borderWidth:2,
        borderColor:'rgba(0,0,0,1)',
        backgroundColor: 'rgba(230,230,230,0.8)'

    },
    SearchText: {
        paddingLeft:5,
        fontWeight: '600',
        
    },


});

export default MSStyles;