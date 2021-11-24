import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {Avatar} from 'react-native-paper';
import {gl, th} from 'date-fns/locale';
import {format} from 'date-fns';
import {globeStyles} from '../styles/globle';

const HomeScreen = ({navigation}) => {
  const theme = useTheme();
  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        source={require('../assets/background_gray.jpg')}
        style={{flex: 1}}
        resizeMode="cover">
        <View style={{paddingHorizontal: 20, paddingTop: 20}}>
          <Image
            source={require('../assets/logo.png')}
            style={{
              width: 100,
              height: 50,
              resizeMode: 'contain',
              alignSelf: 'center',
            }}
          />
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
              <Avatar.Image
                source={{
                  uri: 'https://api.adorable.io/avatars/80/abott@adorable.png',
                }}
                size={75}
              />
            </TouchableOpacity>
            <TouchableOpacity style={{marginLeft: 200}}>
              <Image
                source={require('../assets/message.png')}
                style={{width: 50, height: 50}}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require('../assets/bell.png')}
                style={{width: 50, height: 50}}
              />
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
              <Text style={[{fontSize: 25}, globeStyles.fontBold]}>
                MY TODAY
              </Text>
              <Text style={[globeStyles.font, {fontSize: 20}]}>
                {format(new Date(), 'dd MMMM yyyy', {locale: th})}
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
                    source={require('../assets/banners/food-banner1.jpg')}
                    style={styles.cardBig}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={{margin: 10}}>
                  <Image
                    source={require('../assets/banners/food-banner2.jpg')}
                    style={styles.cardBig}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={{margin: 10}}>
                  <Image
                    source={require('../assets/banners/food-banner2.jpg')}
                    style={styles.cardBig}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={{margin: 10}}>
                  <Image
                    source={require('../assets/banners/food-banner2.jpg')}
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
                    source={require('../assets/banners/food-banner1.jpg')}
                    style={styles.cardsmall}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={{margin: 10}}>
                  <Image
                    source={require('../assets/banners/food-banner1.jpg')}
                    style={styles.cardsmall}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={{margin: 10}}>
                  <Image
                    source={require('../assets/banners/food-banner1.jpg')}
                    style={styles.cardsmall}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={{margin: 10}}>
                  <Image
                    source={require('../assets/banners/food-banner1.jpg')}
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
                    source={require('../assets/banners/food-banner1.jpg')}
                    style={styles.cardsmall}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={{margin: 10}}>
                  <Image
                    source={require('../assets/banners/food-banner1.jpg')}
                    style={styles.cardsmall}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={{margin: 10}}>
                  <Image
                    source={require('../assets/banners/food-banner1.jpg')}
                    style={styles.cardsmall}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={{margin: 10}}>
                  <Image
                    source={require('../assets/banners/food-banner1.jpg')}
                    style={styles.cardsmall}
                  />
                </TouchableOpacity>
              </ScrollView>
            </View>
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D3D3D3',
  },
  cardBig: {
    width: 200,
    height: 200,
  },
  cardsmall: {
    width: 125,
    height: 125,
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
