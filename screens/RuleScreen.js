import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import {globeStyles} from '../styles/globle';

const RuleScreen = ({navigation}) => {
  return (
    <ImageBackground
      style={{flex: 1}}
      source={require('../assets/background_gray.jpg')}>
      <ScrollView>
        <Image
          source={require('../assets/Rule_one.jpg')}
          style={{flex: 1, resizeMode: 'contain', margin: 20}}
        />
        <Image
          source={require('../assets/Rule_two.jpg')}
          style={{flex: 1, resizeMode: 'contain', margin: 20}}
        />
        <Image
          source={require('../assets/Rule_three.jpg')}
          style={{flex: 1, resizeMode: 'contain', margin: 20}}
        />
        <Image
          source={require('../assets/Rule_four.jpg')}
          style={{flex: 1, resizeMode: 'contain', margin: 20}}
        />

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
            onPress={() => {
              navigation.navigate('RegisterScreen');
            }}>
            <Text style={[globeStyles.font, {fontSize: 15}]}>ยอมรับเงื่อนไข</Text>
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
            onPress={() => {
              navigation.navigate('LoginScreen');
            }}>
            <Text style={[globeStyles.fontWhite, {fontSize: 15}]}>ไม่ยอมรับเงื่อนไข</Text>
          </TouchableOpacity>
        </View>
        <View style={{height:50}}/>
      </ScrollView>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
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

  });
export default RuleScreen;
