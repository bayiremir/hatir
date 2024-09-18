import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';
import {logout} from '../../../redux/slices/authSlice';
import {styles} from './styles';

const HomeScreen = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <View style={styles.container}>
      <Text>Welcome to the Home Screen!</Text>
      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
