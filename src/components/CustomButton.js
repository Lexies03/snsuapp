import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Pressable,
  Button,
  useWindowDimensions,
  StyleSheet,
} from 'react-native';

//icons
import Icon from 'react-native-vector-icons/MaterialIcons';

const CustomButton = ({
  title,
  iconName,
  iconSize,
  buttonType,
  iconColor,
  bgColor,
  color,
  onPress,
  
}) => {
  const {width: screenWidth} = useWindowDimensions();

  const styles = StyleSheet.create({
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    view_container_login: {
      width: (screenWidth * 60) / 100,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'green',
      borderRadius: 5,
    },
    view_container_text: {
      width: (screenWidth * 60) / 100,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
    },
    view_container_help: {
      width: (screenWidth * 30) / 100,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#26b99a',
      borderTopLeftRadius: 20,
      borderBottomLeftRadius: 20,
      padding: 5,
    },
    button_login: {
      color: 'white',
      fontSize: 22,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
    },

    button_text: {
      color: '#26b99a',
      fontSize: 17,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 5,
    },

    button_help: {
      color: 'white',
      fontSize: 20,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 5,
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <Pressable onPress={onPress}>
        <View style={styles[`view_container_${buttonType}`]}>
          <Icon name={iconName} size={iconSize} color={iconColor} />
          <Text style={styles[`button_${buttonType}`]}>{title}</Text>
        </View>
      </Pressable>
    </SafeAreaView>
  );
};

export default CustomButton;

{
  /* <Button
          onClick={onClick}
          style={styles[`button_color_${colorType}`]}
          title={title}></Button> */
}
