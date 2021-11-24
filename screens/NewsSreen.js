import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import {Avatar} from 'react-native-paper';
import {th} from 'date-fns/locale';
import {format} from 'date-fns';

import {globeStyles} from '../styles/globle';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import axios from 'axios';


import {AuthContext} from '../components/context';

import AsyncStorage from '@react-native-community/async-storage';

const NewsSreen =  ({navigation}) => {
 

  const [profile,setProfile] = React.useState({});
 
  const getProfile = async () =>{
    const name = await AsyncStorage.getItem('userName')
    const lname = await AsyncStorage.getItem('userLname')
    const phone = await AsyncStorage.getItem('userPhone')
    const idcard = await AsyncStorage.getItem('userIdcard')
    setProfile({
      name:name,
      lname:lname,
      phone:phone,
      idcard:idcard,
    })
  }
React.useEffect(()=>{
  getProfile()
  
},[])
  return (
    <ScrollView>
      <ImageBackground
        source={require('../assets/background_gray.jpg')}
        style={{flex: 1}}
        resizeMode="cover">
        <View style={{paddingHorizontal: 20, paddingVertical: 20}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={() => {             
              }}>
              <Image
                source={require('../assets/back.png')}
                style={{width: 50, height: 50}}
              />
            </TouchableOpacity>
            <Text style={[styles.text, globeStyles.fontBold]}>ข่าวสาร</Text>
         
            <TouchableOpacity>
              <Image
                source={require('../assets/setting.png')}
                style={{width: 50, height: 50}}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={globeStyles.cardlayout}>
          <Text />
          <View style={[globeStyles.cardinside]}>
         
           <TouchableOpacity style={{backgroundColor:'#000',width:100,height:100}} onPress={()=>{console.log(profile.name)}}>
              <Text>{profile.name}</Text>
           </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D3D3D3',
  },
  borderBot: {
    borderBottomWidth: 1,
    width: '90%',
    alignSelf: 'center',
    borderColor: '#287094',
  },
  flexRow: {
    flexDirection: 'row',
    paddingVertical: 20,
    alignItems: 'center',
  },
  text: {
    fontSize: 25,
  },
});

export default NewsSreen;
