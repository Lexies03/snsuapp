import React from 'react';
import {SafeAreaView, View, Text, StyleSheet, Image, ScrollView, useWindowDimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';

//icons
import Icon from 'react-native-vector-icons/MaterialIcons';
// import Icon from 'react-native-vector-icons/FontAwesome';

//assets
import logo from '../../assets/logo.png';

//components
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';

const LoginScreen = () => {

  const navigation = useNavigation();

  const onLogin = () => {
    console.warn('Login');
    navigation.navigate('Main');
  };

  const {height: screenHeight, width: screenWidth} = useWindowDimensions();
  const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent:"center",
      height:(screenHeight * 90) /100,
      position:"relative",
    },

    text_black: {
      color: 'black',
    },

    img_logo: {
      width: 150,
      height: 150,
    },

    view_container_flex_row: {
      displat: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
    },

    view_container_flex_col: {
      displat: 'flex',
      flexDirection: 'column',
      padding: 10,
    },

    view_container_logo: {
      flex: 1,
    },
    text_green_60: {
      color: 'green',
      fontSize: 60,
      fontWeight: 'bold',
    },

    text_gray_22: {
      color: 'gray',
      fontSize: 22,
      fontWeight: 'bold',
      textAlign: 'center',
    },

    text_gray_19: {
      color: 'gray',
      fontSize: 19,
      fontWeight: 'bold',
      textAlign: 'center',
      padding:15,
    },

    view_customInput_flex_col: {
      display: 'flex',
      gap: 10,
      padding:15,
    },

    view_help: {
      position: 'absolute',
      right: 0,
      bottom: 50,
    },
    view_copyright_container:{
      marginTop:20,
    },

    text_copyright: {
      width: (screenWidth * 90) / 100,
      fontSize:17,
      textAlign:"center",
      // alignSelf:"center"
      // alignItems:"flex-end"
    }
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view_container_flex_row}>
        <Image source={logo} style={styles.img_logo} />
        <View style={styles.view_container_flex_col}>
          <Text style={styles.text_green_60}>SNSU</Text>
          <Text style={styles.text_gray_22}>fgHemis Portal</Text>
        </View>
      </View>
      <View>
        <Text style={styles.text_gray_19}>Continue logging in</Text>
      </View>

      <View style={styles.view_customInput_flex_col}>
        <CustomInput
          placeholder="email"
          style="login"
          iconName="email"
          iconSize={30}
          iconColor="green"
        />
        <CustomInput
          placeholder="password"
          style="login"
          iconName="lock"
          iconSize={30}
          iconColor="green"
        />
      </View>
      <View>
        <CustomButton
          iconName="arrow-circle-right"
          iconSize={30}
          title="Login"
          iconColor="white"
          buttonType="login"
          onPress={onLogin}
        />
        <CustomButton
          iconName="person"
          iconSize={15}
          title="Freshmen? Click me"
          iconColor="#26b99a"
          buttonType="text"
        />
      </View>
      <View style={styles.view_help}>
        <CustomButton
          iconName="messenger"
          iconSize={30}
          title="Help"
          iconColor="green"
          buttonType="help"
        />
      </View>
      <View style={styles.view_copyright_container}>
        <Text style={styles.text_copyright}>
          &#169; 2019 www.snsu.edu.ph - All Rights Reserved. SNSU - ICT Office
          -fgWorkz
        </Text>
      </View>
    </SafeAreaView>
  );
};


export default LoginScreen;

{
  /* <Text style={styles.text_black}>Login Screen Text</Text>
        <Icon name="mic" size={30} style={{marginLeft: 10}} color="gray" /> */
}
{
  /* <Icon.Button
          name="facebook"
          backgroundColor="#3b5998"
          onPress={this.loginWithFacebook}>
          Login with Facebook
        </Icon.Button> */
}
