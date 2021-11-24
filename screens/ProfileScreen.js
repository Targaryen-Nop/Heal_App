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

const ProfileScreen = ({navigation}) => {
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
            <View style={[styles.flexRow, {justifyContent: 'space-around'}]}>
              <Text style={[globeStyles.font, {fontSize: 20}]}>
                xxxxxxxxxxx
              </Text>
              <View
                style={{
                  borderRightWidth: 1,
                  height: 50,
                  borderColor: '#287094',
                }}
              />
              <Text style={[globeStyles.font, {fontSize: 20}]}>
                xxxxxxxxxxx
              </Text>
            </View>
            <View style={styles.borderBot} />
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('SaveATK');
              }}>
              <View style={[styles.flexRow, {justifyContent: 'space-between'}]}>
                <Text
                  style={[globeStyles.font, {paddingStart: 40, fontSize: 20}]}>
                  บันทึกประวัติ ATK
                </Text>
                <View />
                <MaterialCommunityIcons
                  name="menu-right"
                  size={50}
                  style={{color: '#287094'}}
                />
              </View>
            </TouchableOpacity>
            <View style={styles.borderBot} />
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('MenuCheck');
              }}>
              <View style={[styles.flexRow, {justifyContent: 'space-between'}]}>
                <Text
                  style={[globeStyles.font, {paddingStart: 40, fontSize: 20}]}>
                  รายการตรวจ ATK
                </Text>
                <View />
                <MaterialCommunityIcons
                  name="menu-right"
                  size={50}
                  style={{color: '#287094'}}
                />
              </View>
            </TouchableOpacity>
            <View style={styles.borderBot} />
            <TouchableOpacity>
              <View style={[styles.flexRow, {justifyContent: 'space-between'}]}>
                <Text
                  style={[globeStyles.font, {paddingStart: 40, fontSize: 20}]}>
                  ดาวน์โหลดรายการตรวจ ATK
                </Text>
                <View />
                <MaterialCommunityIcons
                  name="menu-right"
                  size={50}
                  style={{color: '#287094'}}
                />
              </View>
            </TouchableOpacity>
            <View style={styles.borderBot} />
            <TouchableOpacity>
              <View style={[styles.flexRow, {justifyContent: 'space-between'}]}>
                <Text
                  style={[globeStyles.font, {paddingStart: 40, fontSize: 20}]}>
                  หน่วยงานที่รับผิดชอบ
                </Text>
                <View />
                <MaterialCommunityIcons
                  name="menu-right"
                  size={50}
                  style={{color: '#287094'}}
                />
              </View>
            </TouchableOpacity>
            <View style={styles.borderBot} />
            <TouchableOpacity>
              <View style={[styles.flexRow, {justifyContent: 'space-between'}]}>
                <Text
                  style={[globeStyles.font, {paddingStart: 40, fontSize: 20}]}>
                  ข้อมูล
                </Text>
                <View />
                <MaterialCommunityIcons
                  name="menu-right"
                  size={50}
                  style={{color: '#287094'}}
                />
              </View>
            </TouchableOpacity>
            <View style={styles.borderBot} />
            <TouchableOpacity>
              <View style={[styles.flexRow, {justifyContent: 'space-between'}]}>
                <Text
                  style={[globeStyles.font, {paddingStart: 40, fontSize: 20}]}>
                  ข้อมูล
                </Text>
                <View />
                <MaterialCommunityIcons
                  name="menu-right"
                  size={50}
                  style={{color: '#287094'}}
                />
              </View>
            </TouchableOpacity>
            <View style={styles.borderBot} />
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
export default ProfileScreen;
