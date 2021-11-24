import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground
} from 'react-native';

import {Avatar} from 'react-native-paper';
import {th} from 'date-fns/locale';
import {format} from 'date-fns';

import {globeStyles} from '../styles/globle';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const MenuCheckATKScreen = ({navigation}) => {
  return (
    <ScrollView>
           <ImageBackground
        source={require('../assets/background_gray.jpg')}
        style={{flex: 1}}
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
          <TouchableOpacity>
            <Image
              source={require('../assets/setting.png')}
              style={{width: 50, height: 50}}
            />
          </TouchableOpacity>
        </View>
        <Avatar.Image
          source={{
            uri: 'https://api.adorable.io/avatars/80/abott@adorable.png',
          }}
          size={75}
        />
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View>
            <Text style={[styles.text, globeStyles.fontBold]}>MY TODAY</Text>
            <Text style={[globeStyles.font, {fontSize: 15}]}>
              {format(new Date(), 'dd MMMM yyyy', {locale: th})}
            </Text>
          </View>
          <TouchableOpacity
          onPress={()=>{navigation.navigate('SaveATK')}}
          >
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
          <View style={{alignItems: 'center'}}>
            <Text style={[globeStyles.font, {fontSize: 25}]}>
              รายงานการตรวจ ATK
            </Text>
            <View style={[styles.cardBlue, {marginTop: 20}]}>
              <TouchableOpacity>
                <Text style={[globeStyles.fontWhite, {fontSize: 20}]}>
                  รายงานการตรวจ
                </Text>
                <Text style={[globeStyles.fontWhite, {fontSize: 15}]}>
                  วันพฤหัสบดี, 16 กันยายน 2564
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.cardWhite}>
              <TouchableOpacity>
                <Text style={[globeStyles.font, {fontSize: 20}]}>
                  รายงานการตรวจ
                </Text>
                <Text style={[globeStyles.font, {fontSize: 15}]}>
                  วันพฤหัสบดี, 16 กันยายน 2564
                </Text>
              </TouchableOpacity>
            </View>
            <View style={[styles.cardBlue, {marginTop: 20}]}>
              <TouchableOpacity>
                <Text style={[globeStyles.fontWhite, {fontSize: 20}]}>
                  รายงานการตรวจ
                </Text>
                <Text style={[globeStyles.fontWhite, {fontSize: 15}]}>
                  วันพฤหัสบดี, 16 กันยายน 2564
                </Text>
              </TouchableOpacity>
            </View>
          </View>
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
