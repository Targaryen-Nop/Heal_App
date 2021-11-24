import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  CheckBox,
  Image,
  TextInput,
  TouchableOpacityBase,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';

import {globeStyles} from '../styles/globle';
import Feather from 'react-native-vector-icons/Feather';

import * as Animatable from 'react-native-animatable';
import axios from 'axios';

const RegisterScreen = ({navigation}) => {
  const [isSelected, setSelection] = React.useState(false);

  const [data, setData] = React.useState({
    fristname: '',
    lastname: '',
    birthday: '',
    phone: '',
    idcard: '',
    address: '',
    province: '',
    blood: '',
    history: '',
    email: '',
    isValidFname: true,
    isValidLname: true,
    isValidBirthday: true,
    isValidPhone: true,
    isValidIdcard: true,
    isValidBlood: true,
    isValidAddress: true,
    isValidProvince: true,
    isValidHistory: true,
    isValidEmail: true,
  });

  const firstnameChange = val => {
    if (val) {
      setData({
        ...data,
        fristname: val,
        isValidFname: true,
      });
    } else {
      setData({
        ...data,
        fristname: val,
        isValidFname: false,
      });
    }
  };

  const lastnameChange = val => {
    if (val) {
      setData({
        ...data,
        lastname: val,
        isValidLname: true,
      });
    } else {
      setData({
        ...data,
        lastname: val,
        isValidLname: false,
      });
    }
  };
  const birthdayChange = val => {
    if (val) {
      setData({
        ...data,
        birthday: val,
        isValidBirthday: true,
      });
    } else {
      setData({
        ...data,
        birthday: val,
        isValidBirthday: false,
      });
    }
  };
  const phoneChange = val => {
    if (val.trim().length == 10) {
      setData({
        ...data,
        phone: val,
        isValidPhone: true,
      });
    } else {
      setData({
        ...data,
        phone: val,
        isValidPhone: false,
      });
    }
  };
  const idChange = val => {
    if (val.trim().length == 13) {
      setData({
        ...data,
        idcard: val,
        isValidIdcard: true,
      });
    } else {
      setData({
        ...data,
        idcard: val,
        isValidIdcard: false,
      });
    }
  };
  const adressChange = val => {
    if (val) {
      setData({
        ...data,
        address: val,
        isValidAddress: true,
      });
    } else {
      setData({
        ...data,
        address: val,
        isValidAddress: false,
      });
    }
  };
  const provinceChange = val => {
    if (val) {
      setData({
        ...data,
        province: val,
        isValidProvince: true,
      });
    } else {
      setData({
        ...data,
        province: val,
        isValidProvince: false,
      });
    }
  };
  const bloodChange = val => {
    if (val) {
      setData({
        ...data,
        blood: val,
        isValidBlood: true,
      });
    } else {
      setData({
        ...data,
        blood: val,
        isValidBlood: false,
      });
    }
  };
  const historyChange = val => {
    if (val) {
      setData({
        ...data,
        history: val,
        isValidHistory: true,
      });
    } else {
      setData({
        ...data,
        history: val,
        isValidHistory: false,
      });
    }
  };
  const emailChange = val => {
    if (val) {
      setData({
        ...data,
        email: val,
        isValidEmail: true,
      });
    } else {
      setData({
        ...data,
        email: val,
        isValidEmail: false,
      });
    }
  };

  const registerHandle = async (
    firstname,
    lastname,
    birthday,
    phone,
    idcard,
    address,
    province,
    blood,
    history,
    email,
  ) => {
    const urlRegister = ' http://pmtechapp.lnw.mn/heal_api/register.php';
    const resp = await axios.post(urlRegister, {
      customer_fname: firstname,
      customer_lname: lastname,
      customer_birthday: birthday,
      customer_phone: phone,
      customer_idcard: idcard,
      customer_address: address,
      customer_province: province,
      customer_blood: blood,
      customer_history: history,
      customer_email: email,
    });
    // console.log(data);
    // console.log(resp.data);
  
    if (data.isValidPhone == false || data.isValidIdcard == false) {
      Alert.alert('Wrong !!!', 'Phone or IDcard field cannot be empty.', [
        {text: 'Okay'},
      ]);
      return;
    } else if (resp.data === 'ID Card Already Exist, Please Try Again !!!') {
      Alert.alert(
        'ID Card Already',
        'ID Card Already Exist, Please Try Again !!!.',
        [{text: 'Okay'}],
      );
      return;
    } else if (resp.data === 'No data') {
      Alert.alert('No Data', 'Please Enter your Data.', [{text: 'Okay'}]);
      return;
    }
   
  };

  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        source={require('../assets/background.jpg')}
        resizeMode="cover"
        style={styles.image}>
        <ScrollView >
      
      <View style={{alignItems: 'center'}}>
        <TextInput
          placeholder="Email"
          keyboardType="email-address"
          style={[styles.textinput, styles.shadow]}
          onChangeText={val => emailChange(val)}
        />
        {data.isValidEmail ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>Do not leave blank.</Text>
          </Animatable.View>
        )}

        <TextInput
          placeholder="First Name"
          style={[styles.textinput, styles.shadow]}
          onChangeText={val => firstnameChange(val)}
        />
        {data.isValidFname ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>Do not leave blank.</Text>
          </Animatable.View>
        )}

        <TextInput
          placeholder="Last Name"
          style={[styles.textinput, styles.shadow]}
          onChangeText={val => lastnameChange(val)}
        />
        {data.isValidLname ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>Do not leave blank.</Text>
          </Animatable.View>
        )}

        <TextInput
          placeholder="Id card"
          keyboardType="number-pad"
          maxLength={13}
          style={[styles.textinput, styles.shadow]}
          onChangeText={val => idChange(val)}
        />
        {data.isValidIdcard ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>
              Id must be 13 characters long.
            </Text>
          </Animatable.View>
        )}

        <TextInput
          placeholder="Birthday"
          style={[styles.textinput, styles.shadow]}
          onChangeText={val => birthdayChange(val)}
        />
        {data.isValidBirthday ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>Do not leave blank.</Text>
          </Animatable.View>
        )}

        <TextInput
          placeholder="Phone Number"
          keyboardType="phone-pad"
          maxLength={10}
          style={[styles.textinput, styles.shadow]}
          onChangeText={val => phoneChange(val)}
        />
        {data.isValidPhone ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>
              Phone must be 10 characters long.
            </Text>
          </Animatable.View>
        )}

        <TextInput
          placeholder="Blood"
          style={[styles.textinput, styles.shadow]}
          onChangeText={val => bloodChange(val)}
        />
        {data.isValidBlood ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>Do not leave blank.</Text>
          </Animatable.View>
        )}
        <TextInput
          placeholder="Province"
          style={[styles.textinput, styles.shadow]}
          onChangeText={val => provinceChange(val)}
        />
        {data.isValidProvince ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>Do not leave blank.</Text>
          </Animatable.View>
        )}
        <TextInput
          placeholder="Address"
          multiline
          numberOfLines={2}
          style={[styles.textarea, styles.shadow]}
          onChangeText={val => adressChange(val)}
        />
        {data.isValidAddress ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>Do not leave blank.</Text>
          </Animatable.View>
        )}
        <TextInput
          placeholder="History"
          multiline
          numberOfLines={4}
          style={[styles.textarea, styles.shadow]}
          onChangeText={val => historyChange(val)}
        />
        {data.isValidHistory ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>Do not leave blank.</Text>
          </Animatable.View>
        )}

        <View
          style={{flexDirection: 'row', padding: 20, alignItems: 'center'}}>
         
          <Text style={globeStyles.fontWhite}>
            I Agree with privacy and policy
          </Text>
        </View>
        
      </View>
      </ScrollView>
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
          onPress={() => {
            registerHandle(
              data.fristname,
              data.lastname,
              data.birthday,
              data.phone,
              data.idcard,
              data.address,
              data.province,
              data.blood,
              data.history,
              data.email,
            );
          }}>
          <Text style={[globeStyles.fontWhite, {fontSize: 20}]}>
            Sign up
          </Text>
        </TouchableOpacity>
        <Text style={{height: 40}} />
 
      </ImageBackground>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
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
  },
  textarea: {
    backgroundColor: '#fff',
    width: 300,
    borderRadius: 10,
    marginTop: 25,
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

export default RegisterScreen;
