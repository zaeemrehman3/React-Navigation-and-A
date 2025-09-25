import { View, Text, TextInput, Button } from 'react-native';
import React, { useState } from 'react';

const Login = ({navigation}) => {
    const [username , setUsername] = useState('');
  return (
    <View>
        <TextInput 
        placeholder='Enter Username'
        onChangeText={setUsername}
        />
        {/* <Button title='Login' onPress={()=>navigation.navigate('About',
             {username: 'Zaeem', age: '20' } )} /> */}
        <Button title='Login' onPress={()=>navigation.navigate( 'About' , 
            {username})} />
    </View>
  );
};

export default Login;