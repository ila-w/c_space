import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View,Dimensions,TextInput,Pressable } from 'react-native';
import LoginStyles from '../styles/LoginStyles';
import Svg, {Image, Ellipse,ClipPath} from 'react-native-svg';
import Animated, {useSharedValue, useAnimatedStyle, interpolate, withTiming, withDelay,withSequence, withSpring} from 'react-native-reanimated';
import {firebase} from '../firebase/index';
import { useNavigation } from '@react-navigation/native';

export default function Login(props){
    //Database Accessing variables
    // const [user, setUser] = useState([]);
    // const userRef = firebase.firestore().collection('users');
    // const [addData,setAddData] = useState('');

    const { navigation } = props;
    //Page styling and animation
    const {height, width} = Dimensions.get('window');
    const imagePosition = useSharedValue(1);
    const formButtonScale = useSharedValue(1);
    const [isRegistering, setIsRegistering] = useState(false);
  
    const imageAnimatedStyle = useAnimatedStyle(() =>{
      //handling animation if button has pushed
      // if button is pushed then the interpolation below will move the image to [-height / 2, 0] in 1000ms
      const interpolation = interpolate(imagePosition.value, [0,1], [-height / 2, 0])
      return {
        transform: [{translateY: withTiming(interpolation, {duration: 1000})}]
        
      }
    })
  
    //transforms the image to whatever value is attached to zero
    const loginHandler = () =>{
      imagePosition.value = 0
      if(isRegistering){
        setIsRegistering(false);
      }
    }
    const registerHandler = () =>{
      imagePosition.value = 0
      if(!isRegistering){
        setIsRegistering(true);
      }
    }
  
    const buttonsAnimatedStyle = useAnimatedStyle(() =>{
      const interpolation = interpolate(imagePosition.value, [0,1],[250,0])
      return{
        opacity: withTiming(imagePosition.value,  {duration:500}),
        transform: [{translateY: withTiming(interpolation, {duration: 1000})}]
      }
    })
  
    const closeButtonContainerStyle = useAnimatedStyle(() => {
      const interpolation = interpolate(imagePosition.value, [0,1],[180,360])
      return{
        opacity: withTiming(imagePosition.value === 1 ? 0: 1, {duration:800} ),
        transform: [{rotate: withTiming(interpolation + "deg", {duration:1000})}]
      }
    })
  
    const formButtonAnimatedStyle = useAnimatedStyle (() =>{
      return{
        transform: [{scale: formButtonScale.value}]
      }
  
    })
  
    const formAnimatedStyle = useAnimatedStyle(() => {
      return{
        opacity: imagePosition.value === 0 ? withDelay(400,withTiming(1,{duration:800})) : withTiming(0, {duration:300})
      }
    })
    return (
      <Animated.View style={LoginStyles.container}>
          <Animated.View style={[StyleSheet.absoluteFill, imageAnimatedStyle]}>
            <Svg height={height+100} width={width}>
            <ClipPath id= "clipPathId">
              <Ellipse cx={width/2} rx={height} ry={height+100}/>
            </ClipPath>
            <Image 
                href = {require('../../assets/login_background.jpg')}
                width={width+100}
                height = {height+100}
                preserveAspectRatio = "xMidYMid slice"
                clipPath='url(#clipPathId)'
            />
            </Svg>
          <Animated.View style = {[LoginStyles.closeButtonContainer, closeButtonContainerStyle]}>
            <Text onPress = {() => imagePosition.value = 1}>X</Text>
          </Animated.View>
        </Animated.View>
      
        <View style = {LoginStyles.bottomContainer}>
          <Animated.View style = {buttonsAnimatedStyle}>
            <Pressable  style={LoginStyles.button} onPress = {loginHandler}>
              <Text style={LoginStyles.buttonText}>LOG IN</Text>
            </Pressable>
          </Animated.View>
          <Animated.View style = {buttonsAnimatedStyle}>
            <Pressable style={LoginStyles.button}>
              <Text style={LoginStyles.buttonText} onPress = {registerHandler}>REGISTER</Text>
            </Pressable>
          </Animated.View>
  
          <Animated.View style={[LoginStyles.formInputContainer,formAnimatedStyle]}>
            <TextInput
              placeholder="Email" 
              placeholderTextColor="black" 
              style = {LoginStyles.textInput}
              />
              {isRegistering &&(
                <TextInput 
                placeholder="Full Name"
                placeholderTextColor="black" 
                style = {LoginStyles.textInput}
                />
              )}
            
            <TextInput 
              placeholder="Password" 
              placeholderTextColor="black" 
              style = {LoginStyles.textInput
              }/>
            <Animated.View style ={[LoginStyles.formButton, formButtonAnimatedStyle]}>
              <Pressable onPress = {() => 
                {
                  formButtonScale.value = withSequence(withSpring(1.5),withSpring(1))
      //add authentication here
                  navigation.navigate('MainScreen')
                }
                }>
                <Text style = {LoginStyles.buttonText}>{isRegistering ? 'REGISTER': 'LOG IN'}</Text>
              </Pressable>
            </Animated.View>
          </Animated.View>
  
          </View>
      </Animated.View>
    );
}