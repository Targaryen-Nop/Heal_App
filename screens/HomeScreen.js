import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Platform,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {Avatar} from 'react-native-paper';
import {gl, th} from 'date-fns/locale';
import {format} from 'date-fns';
import {globeStyles} from '../styles/globle';
import AsyncStorage from '@react-native-community/async-storage';

const HomeScreen = ({navigation}) => {
  const [profile, setProfile] = React.useState({});

  const getProfile = async () => {
    const photo = await AsyncStorage.getItem('userPhoto');
    setProfile({
      photo: photo,
    });
  };
  React.useEffect(() => {
    getProfile();
  }, []);

  return (
    <ImageBackground
      source={require('../assets/background_gray.jpg')}
      style={[
        {
          flex: 1,
          ...Platform.select({
            ios: {paddingTop: 50},
          }),
        },
      ]}
      resizeMode="cover">
      <ScrollView style={styles.container}>
        <View style={{paddingHorizontal: 20}}>
          <Image
            source={require('../assets/logo.png')}
            style={{
              width: 100,
              height: 50,
              resizeMode: 'contain',
              alignSelf: 'center',
            }}
          />
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
              <Avatar.Image
                source={{
                  uri: profile.photo,
                }}
                size={50}
              />
            </TouchableOpacity>
            {/* <TouchableOpacity style={{marginLeft: 200}}>
              <Image
                source={require('../assets/message.png')}
                style={{width: 50, height: 50}}
              />
            </TouchableOpacity> */}
            <TouchableOpacity>
              <Image
                source={require('../assets/bell.png')}
                style={{width: 50, height: 50}}
              />
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
              <Text style={[globeStyles.font, {fontSize: 20}]}>
                MY TODAY {format(new Date(), 'dd MMMM yyyy', {locale: th})}
              </Text>
            </View>
          </View>
        </View>

        <View style={globeStyles.cardlayout}>
          <Text style={{width: 10}} />
          <View style={globeStyles.cardinside}>
            <View>
              <View style={styles.captionContainer}>
                <TouchableOpacity style={styles.caption}>
                  <Text style={[globeStyles.font, styles.fontCaption]}>
                    ข่าวสารอัพเดท
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={[globeStyles.font, styles.fontViewall]}>
                    View All
                  </Text>
                </TouchableOpacity>
              </View>
              <ScrollView
                horizontal
                scrollEventThrottle={10}
                showsHorizontalScrollIndicator={false}
                height={200}
                style={{flex: 1, flexDirection: 'row', padding: 10}}>
                <TouchableOpacity style={{margin: 10}}>
                  <Image
                    source={require('../assets/1.jpg')}
                    style={styles.cardBig}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={{margin: 10}}>
                  <Image
                    source={require('../assets/2.jpg')}
                    style={styles.cardBig}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={{margin: 10}}>
                  <Image
                    source={require('../assets/3.jpg')}
                    style={styles.cardBig}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={{margin: 10}}>
                  <Image
                    source={require('../assets/4.jpg')}
                    style={styles.cardBig}
                  />
                </TouchableOpacity>
              </ScrollView>
              <View style={styles.captionContainer}>
                <TouchableOpacity style={styles.caption}>
                  <Text style={[globeStyles.font, styles.fontCaption]}>
                    ข้อมูลสารด่วน
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={[globeStyles.font, styles.fontViewall]}>
                    View All
                  </Text>
                </TouchableOpacity>
              </View>
              <ScrollView
                horizontal
                scrollEventThrottle={1}
                showsHorizontalScrollIndicator={false}
                height={100}
                style={{flexDirection: 'row', padding: 10}}>
                <TouchableOpacity style={{margin: 10}}>
                  <Image
                    source={require('../assets/3.jpg')}
                    style={styles.cardsmall}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={{margin: 10}}>
                  <Image
                    source={require('../assets/4.jpg')}
                    style={styles.cardsmall}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={{margin: 10}}>
                  <Image
                    source={require('../assets/5.jpg')}
                    style={styles.cardsmall}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={{margin: 10}}>
                  <Image
                    source={require('../assets/6.jpg')}
                    style={styles.cardsmall}
                  />
                </TouchableOpacity>
              </ScrollView>
              <View style={styles.captionContainer}>
                <TouchableOpacity style={styles.caption}>
                  <Text style={[globeStyles.font, styles.fontCaption]}>
                    ข้อมูลหน่วยงาน
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={[globeStyles.font, styles.fontViewall]}>
                    View All
                  </Text>
                </TouchableOpacity>
              </View>
              <ScrollView
                horizontal
                scrollEventThrottle={1}
                showsHorizontalScrollIndicator={false}
                height={100}
                style={{flexDirection: 'row', padding: 10}}>
                <TouchableOpacity style={{margin: 10}}>
                  <Image
                    source={require('../assets/6.jpg')}
                    style={styles.cardsmall}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={{margin: 10}}>
                  <Image
                    source={require('../assets/7.jpg')}
                    style={styles.cardsmall}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={{margin: 10}}>
                  <Image
                    source={require('../assets/8.jpg')}
                    style={styles.cardsmall}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={{margin: 10}}>
                  <Image
                    source={require('../assets/9.jpg')}
                    style={styles.cardsmall}
                  />
                </TouchableOpacity>
              </ScrollView>
              {Platform.OS === 'ios' ? (
                <View style={{height: 100}} />
              ) : (
                <View />
              )}
            </View>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardBig: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  cardsmall: {
    width: 125,
    height: 125,
    resizeMode: 'contain',
  },
  feednews: {
    backgroundColor: '#fff',
    padding: 10,
    flex: 1,
    borderTopStartRadius: 25,
    borderTopRightRadius: 25,
  },
  captionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  caption: {
    borderStartWidth: 10,
    borderColor: '#287094',
  },
  fontCaption: {
    marginStart: 5,
    fontSize: 25,
  },
  fontViewall: {
    marginStart: 5,
    fontSize: 15,
  },
});
