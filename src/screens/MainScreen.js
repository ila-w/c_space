import React, {useState} from 'react'
import { StyleSheet, Text, View,Dimensions,TextInput,Pressable,TouchableOpacity } from 'react-native';
import MSStyles from '../styles/MainScreenStyles';
import Svg, {Image, Ellipse,ClipPath} from 'react-native-svg';
import Animated, {useSharedValue, useAnimatedStyle, interpolate, withTiming, withDelay,withSequence, withSpring} from 'react-native-reanimated';


export default function MainScreen(props) {
    const { navigation } = props;
    return(
        <>
        <View style = {MSStyles.MainContainer}>
            <View style = {MSStyles.SearchBarContainer}>
                <TextInput placeholder='Search...' placeholderTextColor='black' style={MSStyles.SearchText}></TextInput>
            </View>
            <View>
                {/* This will be for the profiles to load into the phone screen*/}
            </View>
            <View style={MSStyles.MessageButtonContainer}>
                <TouchableOpacity onPress=
                    {() => 
                        { //add authentication here
                            navigation.navigate('Messages')
                        }
                    }>
                    <Text style = {MSStyles.MessageButtonText}> Messages</Text>
                </TouchableOpacity>
            </View>

        </View>
        </>

    );
    

    
}