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

const DetailMenucheck = ({route, navigation}) => {
  const detail = route.params;
  const yearSub = detail.atk_datetime.substring(0, 4);
  const monthSub = detail.atk_datetime.substring(5, 7);
  const daySub = detail.atk_datetime.substring(8, 10);
  const hourSub = detail.atk_datetime.substring(10, 12);
  const minSub = detail.atk_datetime.substring(13, 15);
  const year = parseInt(yearSub);
  const day = parseInt(daySub);
  const month = parseInt(monthSub);
  const hour = parseInt(hourSub);
  const min = parseInt(minSub);

  const datePass = new Date(year, month - 1, day + 7);
  const date = new Date(year, month - 1, day);

  const onDate = () => {
    console.log(year);
    console.log(month - 1);
    console.log(day);
    console.log(date);
  };

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
            {detail.atk_result === 'undefined' ? (
              <View>
                <View
                  style={{
                    borderBottomWidth: 1,
                    marginHorizontal: 20,
                    paddingBottom: 50,
                  }}>
                  <View style={{alignItems: 'center'}}>
                    <Text
                      style={[
                        globeStyles.fontBold,
                        {fontSize: 20, color: 'black'},
                      ]}>
                      รายงานผลการตรวจ ATK
                    </Text>
                    <Text>
                      {format(new Date(2021, 11, 31), 'dd MMMM yyyy', {
                        locale: th,
                      })}
                    </Text>
                    <Text>
                      ด้วยชุดตรวจ Heal SARS-Cov-2 Antigen Rapid Test Kid
                    </Text>
                  </View>

                  <View
                    style={{flexDirection: 'row', justifyContent: 'center'}}>
                    <Text>Picture</Text>
                    <Text>Picture</Text>
                  </View>
                  <Text>Picture</Text>
                  <View style={{marginStart: 20}}>
                    <Text>แปลผลการทดสอบไม่ได้ (Invaild)</Text>
                    <Text>
                      ไม่พบแถบสีม่วงที่ (C) หรือพบเฉพาะแถบสีม่วงที่ (T)
                    </Text>
                    <Text>แนะนำให้ทำการตรวจ ซ้ำ</Text>
                  </View>
                  <View style={{marginStart: 20, marginTop: 25}}>
                    <Text>Unable to internet test results (Invild)</Text>
                    <Text>The purple band is not found at (C)</Text>
                    <Text>or the purple band is only found at (T).</Text>
                    <Text>It is recommended to repeat the examination</Text>
                  </View>
                </View>
                <TouchableOpacity>
                  <Image
                    source={require('../assets/download.png')}
                    style={{width: 200, height: 50, alignSelf: 'center'}}
                  />
                </TouchableOpacity>
              </View>
            ) : detail.atk_result === 'negative' ? (
              <View>
                <View
                  style={{
                    borderBottomWidth: 1,
                    marginHorizontal: 20,
                    paddingBottom: 50,
                  }}>
                  <View style={{alignItems: 'center'}}>
                    <Text
                      style={[
                        globeStyles.fontBold,
                        {fontSize: 20, color: 'black'},
                      ]}>
                      รายงานผลการตรวจ ATK
                    </Text>
                    <Text>
                      {format(new Date(year, month - 1, day), 'dd MMMM yyyy', {
                        locale: th,
                      })}{' '}
                      เวลา {hour} : {min} น.
                    </Text>
                    <Text>
                      ด้วยชุดตรวจ Heal SARS-Cov-2 Antigen Rapid Test Kid
                    </Text>
                  </View>

                  <View
                    style={{flexDirection: 'row', justifyContent: 'center'}}>
                    <Image
                      source={require('../assets/logo_test.png')}
                      style={{width: 25, height: 25}}
                    />
                    <Text>{format(date, 'dd/MM/yyyy')}</Text>
                    <Image
                      source={require('../assets/logo_exp.png')}
                      style={{width: 25, height: 25}}
                    />
                    <Text>{format(datePass, 'dd/MM/yyyy')}</Text>
                  </View>
                  <Image
                    source={{uri: detail.atk_image}}
                    style={{
                      width: 75,
                      height: 175,
                      resizeMode: 'contain',
                      alignSelf: 'center',
                      borderColor: 'green',
                      borderWidth: 5,
                      margin: 5,
                    }}
                  />
                  <View style={{marginStart: 20}}>
                    <Text style={[globeStyles.font, {color: 'green'}]}>
                      ผลไม่พบเชื้อ (Negative) เกิดแถบสีม่วง 1 แถบที่ (c)
                    </Text>
                  </View>
                  <View style={{marginStart: 20, marginTop: 25}}>
                    <Text style={[globeStyles.font, {color: 'green'}]}>
                      The result was not found (Negative)
                    </Text>
                    <Text style={[globeStyles.font, {color: 'green'}]}>
                      with 1 purple stripe at (C)
                    </Text>
                  </View>
                </View>
                <TouchableOpacity onPress={onDate}>
                  <Image
                    source={require('../assets/download.png')}
                    style={{width: 200, height: 50, alignSelf: 'center'}}
                  />
                </TouchableOpacity>
              </View>
            ) : detail.atk_result === 'positive' ? (
              <View>
                <View
                  style={{
                    borderBottomWidth: 1,

                    paddingBottom: 50,
                  }}>
                  <View style={{alignItems: 'center'}}>
                    <Text
                      style={[
                        globeStyles.fontBold,
                        {fontSize: 20, color: 'black'},
                      ]}>
                      รายงานผลการตรวจ ATK
                    </Text>
                    <Text>
                      {format(new Date(year, month - 1, day), 'dd MMMM yyyy', {
                        locale: th,
                      })}{' '}
                      เวลา {hour} : {min} น.
                    </Text>
                    <Text>
                      ด้วยชุดตรวจ Heal SARS-Cov-2 Antigen Rapid Test Kid
                    </Text>
                  </View>

                  <View
                    style={{flexDirection: 'row', justifyContent: 'center'}}>
                    <Image
                      source={require('../assets/logo_test.png')}
                      style={{width: 25, height: 25}}
                    />
                    <Text>{format(date, 'dd/MM/yyyy')}</Text>
                    <Image
                      source={require('../assets/logo_exp.png')}
                      style={{width: 25, height: 25}}
                    />
                    <Text>{format(datePass, 'dd/MM/yyyy')}</Text>
                  </View>
                  <Image
                    source={{uri: detail.atk_image}}
                    style={{
                      width: 75,
                      height: 175,
                      resizeMode: 'contain',
                      alignSelf: 'center',
                      borderColor: 'red',
                      borderWidth: 5,
                      margin: 5,
                    }}
                  />
                  <View style={{marginStart: 20}}>
                    <Text style={{color: 'red'}}>
                      ผลบวกพบเชื้อ (Positive) เกิดแถบสีม่วง 2 แถบที่ (C) และ ()
                    </Text>
                    <Text style={{color: 'red'}}>
                      ผลการใช้งานชุดตรวจโควิด 19 พบเชื้อ
                    </Text>
                    <Text>      ขณะนี้ข้อมูลผลการตรวจของท่านได้ถูกส่งให้</Text>
                    <Text>
                      สำนักงานหลักประกันสุขภาพแห่งชาติ (สปสช.) เรียบร้อยแล้ว
                    </Text>
                    <Text>กรุณานำรายงานการตรวจ ATK และชุดตรวจ</Text>
                    <Text>
                      หรือ โรงพยาบาลตามสิทธิ์การรักษา
                      เพื่อเข้ารับการรักษาโดยทันที
                    </Text>
                    <Text style={{color: 'red'}}>
                      คำแนะนำ โปรดดำเนินการภายใน 24 ชม.
                    </Text>
                    <Text style={{color: 'red'}}>
                      หลังจากตรวจชุดโควิด 19 หากพบผลเป็นบวก (พบเชื้อ)
                    </Text>
                    <Text style={{color: 'red'}}>
                      เพื่อขอรับความช่วยเหลือ ในการรักษาโดยทันที
                    </Text>
                  </View>
                  <View style={{marginStart: 20, marginTop: 25}}>
                    <Text>      
                            The result was positive, with 2 purple stripes at (C) and
                      (T).
                    </Text>
                    <Text>
                      The test results reveaied the SARS-CoV-2 virus antigen.
                    </Text>
                    <Text>Your test result information has now been sent.</Text>
                    <Text>
                      The National Health Security Office (NHSO) has been
                      completed
                    </Text>
                    <Text>
                      Please bring your ATK test report and ATK test kit.
                    </Text>
                    <Text>
                      Bring it to the screening point for COVID-19 in a hospotal
                      or hospital near your home.
                    </Text>
                    <Text>
                      or hospitais according to treatment rights for immediate
                      treatment
                    </Text>
                    <Text style={{color: 'red'}}>
                      Instructions: Please do so within 24 hours
                    </Text>
                    <Text style={{color: 'red'}}>
                      After testing the COVID-19 test kit,if the result is
                      positive (found)
                    </Text>
                    <Text style={{color: 'red'}}>
                      to get help for immediate treatment
                    </Text>
                  </View>
                </View>
                <TouchableOpacity>
                  <Image
                    source={require('../assets/download.png')}
                    style={{width: 200, height: 50, alignSelf: 'center'}}
                  />
                </TouchableOpacity>
              </View>
            ) : (
              ''
            )}
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
export default DetailMenucheck;
