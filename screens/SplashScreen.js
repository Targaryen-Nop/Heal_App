import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    Dimensions,
    StyleSheet,
    StatusBar,
    Image,
    ImageBackground
} from 'react-native';


const SplashScreen = ({navigation}) => {
    
    React.useEffect(()=>{
      
           setTimeout(()=> navigation.navigate('LoginScreen'),5000)
      
    },[])

    return (
      <ImageBackground source={require('../assets/background.jpg')} resizeMode="cover" style={{flex:1,justifyContent:'center',alignItems:'center'}}>
         <Image source={require('../assets/logo.png')}  resizeMode='contain' style={{width:250,height:250}}/>
      </ImageBackground>
    );
};

export default SplashScreen;



