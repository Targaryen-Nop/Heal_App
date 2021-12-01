import React from 'react';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwsome from 'react-native-vector-icons/FontAwesome';

import HomeScreen from './HomeScreen';
import NotificationScreen from './NotificationScreen';
import ExploreScreen from './ExploreScreen';
import ProfileScreen from './ProfileScreen';
import MapTestScreen from './MapTestScreen';
import EditProfileScreen from './EditProfileScreen';

import {useTheme, Avatar} from 'react-native-paper';
import {View} from 'react-native-animatable';
import {TouchableOpacity} from 'react-native-gesture-handler';
import CardListScreen from './CardListScreen';
import CardItemDetails from './CardItemDetails';

import SaveATKScreen from './SaveATKScreen';
import MenuCheckATKScreen from './MenuCheckATKScreen';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import NewsSreen from './NewsSreen';
import SignInScreen from './SignUpScreen';
import SignUpScreen from './SignUpScreen';
import DetailMenucheck from './DetailMenucheck';

import AsyncStorage from '@react-native-community/async-storage';

const HomeStack = createStackNavigator();
const NotificationStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const NewsStack = createStackNavigator();
const MenuStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => {
  return (
    <Tab.Navigator initialRouteName="Home" activeColor="#fff">
      <Tab.Screen
        name="Notifications"
        component={NewsStackStackScreen}
        options={{
          tabBarLabel: 'ข่าวสาร',
          tabBarColor: '#023246',
          tabBarIcon: ({color}) => (
            <FontAwsome name="globe" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'หน้าหลัก',
          tabBarColor: '#023246',
          tabBarIcon: ({color}) => (
            <Icon name="ios-home" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="ATKReport"
        component={MenuCheckStackScreen}
        options={{
          tabBarLabel: 'ประวัติATK',
          tabBarColor: '#023246',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="book" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStackScreen}
        options={{
          tabBarLabel: 'PROFILE',
          tabBarColor: '#023246',
          tabBarIcon: ({color}) => (
            <Icon name="ios-person" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabScreen;

const HomeStackScreen = ({navigation}) => {
  const {colors} = useTheme();
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: colors.background,
          shadowColor: colors.background, // iOS
          elevation: 0, // Android
        },
        headerTintColor: colors.text,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: '',
          headerRight: () => (
            <View style={{flexDirection: 'row', marginRight: 10}} />
          ),
        }}
      />
      <HomeStack.Screen
        name="CardListScreen"
        component={CardListScreen}
        options={({route}) => ({
          title: route.params.title,
          headerBackTitleVisible: false,
        })}
      />
      <HomeStack.Screen
        name="CardItemDetails"
        component={CardItemDetails}
        options={({route}) => ({
          // title: route.params.title,
          headerBackTitleVisible: false,
          headerTitle: false,
          headerTransparent: true,
          headerTintColor: '#fff',
        })}
      />
    </HomeStack.Navigator>
  );
};

const NotificationStackScreen = ({navigation}) => (
  <NotificationStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#1f65ff',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <NotificationStack.Screen
      name="Notifications"
      component={NotificationScreen}
      options={{
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#1f65ff"
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}
    />
  </NotificationStack.Navigator>
);

const ProfileStackScreen = ({navigation}) => {
  const {colors} = useTheme();

  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <ProfileStack.Screen name="Profile" component={ProfileScreen} />
      <ProfileStack.Screen
        name="EditProfile"
        options={{
          title: 'Edit Profile',
        }}
        component={EditProfileScreen}
      />
      <ProfileStack.Screen
        name="SaveATK"
        options={{
          title: 'Save ATK',
        }}
        component={SaveATKScreen}
      />
      <ProfileStack.Screen
        name="MenuCheck"
        options={{
          title: 'Check ATK',
        }}
        component={MenuCheckStackScreen}
      />
    </ProfileStack.Navigator>
  );
};

const MenuCheckStackScreen = ({navigation}) => {
  return (
    <MenuStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <MenuStack.Screen
        name="MenuCheck"
        component={MenuCheckATKScreen}
        initialParams={{ad:'dawd'}}
      />
      <MenuStack.Screen name="Detail" component={DetailMenucheck} />
      <MenuStack.Screen name="SaveATK" component={SaveATKScreen} />
    </MenuStack.Navigator>
  );
};

const NewsStackStackScreen = ({navigation}) => {
  return (
    <NewsStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <NewsStack.Screen name="News" component={NewsSreen} />
    </NewsStack.Navigator>
  );
};
