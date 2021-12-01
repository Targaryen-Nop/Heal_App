import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
  Platform,
} from 'react-native';

import {Avatar} from 'react-native-paper';
import {th} from 'date-fns/locale';
import {format} from 'date-fns';

import {globeStyles} from '../styles/globle';

import axios from 'axios';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

import AsyncStorage from '@react-native-community/async-storage';

const MenuCheckATKScreen = ({route, navigation}) => {
  const [detailUser, setDetailUser] = React.useState([]);

  const getData = async idcard => {
    const dataUrl = 'http://pmtechapp.lnw.mn/heal_api/getATK.php';
    const resp = await axios.post(dataUrl, {
      customer_idcard: idcard,
    });
    setDetailUser(resp.data);
  };

  React.useEffect(async () => {
    const idcard = await AsyncStorage.getItem('userIdcard');
    getData(idcard);
  }, []);

  return (
    <ImageBackground
      source={require('../assets/background_gray.jpg')}
      style={{
        flex: 1,
        ...Platform.select({
          ios: {paddingTop: 30},
        }),
      }}
      resizeMode="cover">
      <View style={{paddingHorizontal: 20, paddingTop: 20}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <Image
              source={require('../assets/back.png')}
              style={{width: 50, height: 50}}
            />
          </TouchableOpacity>
          <Text style={[styles.text, globeStyles.fontBold]}>MY PROFILE</Text>
          {/* <TouchableOpacity> */}
          <Image
            // source={require('../assets/setting.png')}
            style={{width: 50, height: 50}}
          />
          {/* </TouchableOpacity> */}
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{alignItems: 'center'}}>
            <Avatar.Image
              source={{
                uri: 'https://api.adorable.io/avatars/80/abott@adorable.png',
              }}
              size={50}
            />
            <Text style={[globeStyles.font, {fontSize: 15}]}>
              {format(new Date(), 'dd MMMM yyyy', {locale: th})}
            </Text>
          </View>
          <TouchableOpacity
            style={{marginTop: 25}}
            onPress={() => {
              navigation.navigate('SaveATK');
            }}>
            <Image
              source={require('../assets/scan.png')}
              style={{width: 200, height: 50}}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={globeStyles.cardlayout}>
        <Text />
        <View style={[globeStyles.cardinside]}>
          <ScrollView>
            <View style={{alignItems: 'center'}}>
              <Text style={[globeStyles.font, {fontSize: 25}]}>
                รายงานการตรวจ ATK
              </Text>
              {detailUser ? (
                detailUser.map((detail, index) => {
                  return (
                    <View style={[styles.cardBlue, {marginTop: 20}]}>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                        }}>
                        <View>
                          <Text style={[globeStyles.fontWhite, {fontSize: 20}]}>
                            รายงานการตรวจ
                          </Text>
                          <Text style={[globeStyles.fontWhite, {fontSize: 15}]}>
                            {detail.atk_datetime}
                          </Text>
                        </View>
                        <TouchableOpacity
                          onPress={() => {
                            navigation.navigate('Detail', detail);
                          }}
                          style={{margin: 10, alignItems: 'center'}}>
                          <SimpleLineIcons
                            name="magic-wand"
                            size={20}
                            style={{color: 'white'}}
                          />
                          <Text style={{color: 'white'}}>รายละเอียด</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  );
                })
              ) : (
                <Text />
              )}
            </View>
          </ScrollView>
        </View>
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D3D3D3',
  },
  cardBlue: {
    backgroundColor: '#287094',
    width: '100%',
    padding: 15,
  },
  cardWhite: {
    backgroundColor: 'white',
    width: '100%',
    padding: 15,
  },
  text: {
    fontSize: 25,
  },
});

export default MenuCheckATKScreen;
