import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  Platform,
} from 'react-native';

import {Avatar} from 'react-native-paper';
import {th} from 'date-fns/locale';
import {format} from 'date-fns';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import ImagePicker from 'react-native-image-crop-picker';

import {globeStyles} from '../styles/globle';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const SaveATKScreen = ({navigation}) => {
  const [image, setImage] = React.useState();
  const [profile, setProfile] = React.useState({});

  const getProfile = async () => {
    const idcard = await AsyncStorage.getItem('userIdcard');
    setProfile({
      idcard: idcard,
    });
  };

  React.useEffect(() => {
    getProfile();
  }, []);

  const openCamera = async () => {
    if (Platform.OS === 'ios') {
      launchCamera({includeBase64}, async response => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
        } else {
          const source = {uri: response.assets[0].base64};
          await setImage(source.uri);
          // You can also display the image using data:
          // const source = { uri: 'data:image/jpeg;base64,' + response.data };
        }
      });
    } else if (Platform.OS === 'android') {
      launchCamera({}, async response => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
        } else {
          const source = {uri: response.assets[0].uri};
          await setImage(source.uri);
          // You can also display the image using data:
          // const source = { uri: 'data:image/jpeg;base64,' + response.data };
        }
      });
    }

    const onUpload = async () => {
      const urlUpload = 'http://pmtechapp.lnw.mn/heal_api/atk.php';
      const resp = await axios.post(urlUpload, {
        file_attachment: image,
        customer_idcard: profile.idcard,
        atk_result: '',
      });
      console.log(resp.data);
    };
  };
  return (
    <View style={{flex: 1}}>
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
            <TouchableOpacity>
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
              <Text style={[styles.text, globeStyles.fontBold]}>
                บันทึกประวัติ ATK
              </Text>
              <ImageBackground
                source={{
                  uri: image,
                }}
                style={{
                  height: 200,
                  width: 200,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                imageStyle={{borderRadius: 15}}>
                <Icon
                  name="camera"
                  size={100}
                  color="#000"
                  style={{
                    opacity: 0.7,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderWidth: 1,
                    borderColor: '#fff',
                    borderRadius: 10,
                  }}
                />
              </ImageBackground>
              <View>
                <TouchableOpacity>
                  <Text>ติดเชื้อ</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text>ไม่ติดเชื้อ</Text>
                </TouchableOpacity>
              </View>
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                  style={styles.open_button}
                  onPress={openCamera}>
                  <Text style={[globeStyles.fontWhite]}>เปิดกล้อง</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.open_button}>
                  <Text style={[globeStyles.fontWhite]}>Upload</Text>
                </TouchableOpacity>
              </View>
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
  input: {
    borderColor: '#287094',
    borderBottomWidth: 1,
    width: '90%',
  },
  open_button: {
    margin: 10,
    width: 100,
    height: 50,
    backgroundColor: '#287094',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SaveATKScreen;
