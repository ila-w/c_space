
import React, {useState} from 'react'
import { StyleSheet, Text, View,Dimensions,TextInput,Pressable } from 'react-native';

import Svg, {Image, Ellipse,ClipPath} from 'react-native-svg';
import Animated, {useSharedValue, useAnimatedStyle, interpolate, withTiming, withDelay,withSequence, withSpring} from 'react-native-reanimated';


export default function Messages() {

    return(
        <>
            <View>
                <Text>Sup dude</Text>
            </View>
        </>
    );
    
}