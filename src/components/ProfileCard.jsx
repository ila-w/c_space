import React, {useState} from 'react'
import { StyleSheet, Text, View,Dimensions,TextInput,Pressable } from 'react-native';
import ProfileCardStyles from '../styles/ProfileCardStyles';
import Svg, {Image, Ellipse,ClipPath} from 'react-native-svg';
import Animated, {useSharedValue, useAnimatedStyle, interpolate, withTiming, withDelay,withSequence, withSpring} from 'react-native-reanimated';

//This is the generic title bar that will have a programmable back arrow, this way it can be
//used accross the application, the back arrow page destination will be given as a function parameter
//whenever this component is used, there will also be a boolean expression tied to this component for 
//if the back arrow is needed at all.

export default function MainScreen() {
    const {height, width} = Dimensions.get('window');

    
  const HandleBack = () => {
    // TODO: Use function parameters to handle what page back takes you to.
  };
    return(
        <>
          <Pressable>
            <View>
              <View>
                <Image

                />
              </View>
              <Text>

              </Text>
            </View>
          </Pressable>
        </>

    );
    

    
}