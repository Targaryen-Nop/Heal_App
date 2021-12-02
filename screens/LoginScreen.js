import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  CheckBox,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,Platform
} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';

import {globeStyles} from '../styles/globle';

import {AuthContext} from '../components/context';
import axios from 'axios';

const LoginScreen = ({navigation}) => {
  const [isSelected, setSelection] = React.useState(false);

  const [data, setData] = React.useState({
    username: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: false,
    isValidUser: true,
    isValidPassword: true,
  });

  const {signIn} = React.useContext(AuthContext);

  const textInputChange = val => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        username: val,
        check_textInputChange: true,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        username: val,
        check_textInputChange: false,
        isValidUser: false,
      });
    }
  };

  const handlePasswordChange = val => {
    if (val.trim().length >= 8) {
      setData({
        ...data,
        password: val,
        isValidPassword: true,
      });
    } else {
      setData({
        ...data,
        password: val,
        isValidPassword: false,
      });
    }
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const handleValidUser = val => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        isValidUser: false,
      });
    }
  };

  const loginHandle = async (userName, password) => {
    const urlLogin = 'http://pmtechapp.lnw.mn/heal_api/login.php';
    const resp = await axios.post(urlLogin, {
      customer_idcard: userName,
      customer_phone: password,
    });

    if (data.username.length == 0 || data.password.length == 0) {
      Alert.alert(
        'Wrong Input!',
        'Username or password field cannot be empty.',
        [{text: 'Okay'}],
      );
      return;
    }

    if (resp.data === 'LoginFailed') {
      Alert.alert('Invalid User!', 'Username or password is incorrect.', [
        {text: 'Okay'},
      ]);
      return;
    }
    signIn(resp.data);
    
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/background.jpg')}
        resizeMode="cover"
        style={styles.image}>
        <View style={{alignItems: 'center', marginTop: 75}}>
          <Image
            source={require('../assets/logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
          <View style={{marginTop: 75}}>
            <Text style={[globeStyles.fontWhite, {fontSize: 20,alignSelf:'center'}]}>
              Login to your Account
            </Text>
            <TextInput
              placeholder="Id Card"
              style={[styles.textinput, styles.shadow]}
              placeholderTextColor="#666666"
              autoCapitalize="none"
              onChangeText={val => textInputChange(val)}
              onEndEditing={e => handleValidUser(e.nativeEvent.text)}
            />

            {data.isValidUser ? null : (
              <Animatable.View animation="fadeInLeft" duration={500}>
                <Text style={styles.errorMsg}>
                  Username must be 4 characters long.
                </Text>
              </Animatable.View>
            )}
            <TextInput
              placeholder="Phone Number"
              style={[styles.textinput, styles.shadow]}
              placeholderTextColor="#666666"
              secureTextEntry={true}
              autoCapitalize="none"
              onChangeText={val => handlePasswordChange(val)}
            />


            {data.isValidPassword ? null : (
              <Animatable.View animation="fadeInLeft" duration={500}>
                <Text style={styles.errorMsg}>
                  Password must be 8 characters long.
                </Text>
              </Animatable.View>
            )}

            <View
              style={{flexDirection: 'row', padding: 20, alignItems: 'center'}}>
             
              
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <TouchableOpacity
                style={[
                  {
                    width: 125,
                    height: 50,
                    backgroundColor: '#fff',
                    borderRadius: 50,
                    alignItems: 'center',
                    justifyContent: 'center',
                  },
                  styles.shadow,
                ]}
                onPress={()=>{navigation.navigate('RuleScreen')}}>
                <Text style={[globeStyles.font, {fontSize: 20}]}>Register</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  {
                    width: 125,
                    height: 50,
                    backgroundColor: '#287094',
                    borderRadius: 50,
                    marginStart: 25,
                    alignItems: 'center',
                    justifyContent: 'center',
                  },
                  styles.shadow,
                ]}
                onPress={()=>{loginHandle(data.username, data.password)}}
                >
                <Text style={[globeStyles.fontWhite, {fontSize: 20}]}>
                  Sign in
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    ...Platform.select({
      ios:{paddingTop:100}
    })
  },
  logo: {
    width: 200,
    height: 100,
  },
  textinput: {
    backgroundColor: '#fff',
    width: 300,
    height: 50,
    borderRadius: 50,
    marginTop: 25,
    padding:10,
    fontSize:25
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
  },
});
export default LoginScreen;
