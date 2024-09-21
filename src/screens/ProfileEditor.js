import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import PEStyles from '../styles/ProfileEditorStyles';
import LoginStyles from '../styles/ProfileEditorStyles';

const ProfileEditor = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [bio, setBio] = useState('');

  const handleSubmit = () => {
    // TODO: Save profile changes to backend
  };

  return (
   
    <View style={PEStyles.container}>
      <View style = {PEStyles.titleBarContainer}>
      
      </View>

      <View style={PEStyles.formContainer}>
        <View style={PEStyles.field}>
          <Icon name="user" type="font-awesome" color="#444" size={24} />
          <TextInput
            style={PEStyles.input}
            placeholder="Name"
            value={name}
            onChangeText={setName}
          />
        </View>
        <View style={PEStyles.field}>
          <Icon name="birthday-cake" type="font-awesome" color="#444" size={24} />
          <TextInput
            style={PEStyles.input}
            placeholder="Age"
            value={age}
            onChangeText={setAge}
            keyboardType="numeric"
          />
        </View>
        <View style={PEStyles.field}>
          <Icon name="info" type="font-awesome" color="#444" size={24} />
          <TextInput
            style={PEStyles.input}
            placeholder="Bio"
            value={bio}
            onChangeText={setBio}
            multiline={true}
            numberOfLines={4}
          />
        </View>
      </View>
      <TouchableOpacity style={PEStyles.button} onPress={handleSubmit}>
        <Text style={PEStyles.buttonText}>Save Changes</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileEditor;