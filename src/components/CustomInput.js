import React from 'react';
import {
  SafeAreaView,
  View,
  TextInput,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';

//icons
import Icon from 'react-native-vector-icons/MaterialIcons';

const CustomInput = ({
  value,
  onChange,
  placeholder,
  secureTextEntry,
  style,
  iconSize,
  iconName,
  iconColor,
}) => {
  const {width: screenWidth} = useWindowDimensions();

  const styles = StyleSheet.create({
    container: {
      display: 'flex',
      alignItems: 'center',
    },
    view_login: {
      width: (screenWidth * 80) / 100,
      height: 60,
      backgroundColor: '#D0D0D0',
      borderRadius: 10,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      paddingLeft: 10,
      paddingRight: 10,
    },
    textInput_login: {
      flex: 1,
      fontSize: 20,
      marginLeft: 5,
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles[`view_${style}`]}>
        <Icon name={iconName} size={iconSize} color={iconColor} />
        <TextInput
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          secureTextEntry={secureTextEntry}
          style={styles[`textInput_${style}`]}></TextInput>
      </View>
    </SafeAreaView>
  );
};

export default CustomInput;
