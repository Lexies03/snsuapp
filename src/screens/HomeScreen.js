import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  Pressable,
  Platform,
  Image,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';

import SNSUModel from '../../assets/snsu-model.jpg';

const HomeScreen = () => {
  const {height: screenHeight, width: screenWidth} = useWindowDimensions();

  const instructorList = [
    {
      id: '0',
      image: require('../../assets/elon-musk.jpg'),
      name: 'Elon Musk',
    },
    {
      id: '1',
      image: require('../../assets/elon-musk.jpg'),
      name: 'Mark Zuckerberg',
    },
    {
      id: '2',
      image: require('../../assets/elon-musk.jpg'),
      name: 'Bill Gates',
    },
    {
      id: '3',
      image: require('../../assets/elon-musk.jpg'),
      name: 'Jeffrey Bezos',
    },
    {
      id: '5',
      image: require('../../assets/elon-musk.jpg'),
      name: 'Robert T. Kiyosaki',
    },
  ];

  const subjectList = [
    {
      id: '0',
      subject: 'Drafting',
      code: 'ECE 404',
      instructor: 'Elon Musk',
    },
    {
      id: '1',
      subject: 'Drafting',
      code: 'ECE 404',
      instructor: 'Mark Zuckerberg',
    },
    {
      id: '2',
      subject: 'Drafting',
      code: 'ECE 404',
      instructor: 'Bill Gates',
    },
    {
      id: '3',
      subject: 'Drafting',
      code: 'ECE 404',
      instructor: 'Jeffrey Bezos',
    },
    {
      id: '4',
      subject: 'Drafting',
      code: 'ECE 404',
      instructor: 'Robert T. Kiyosaki',
    },
    {
      id: '5',
      subject: 'Drafting',
      code: 'ECE 404',
      instructor: 'Elon Musk',
    },
  ];

  const styles = StyleSheet.create({
    safeArea_container: {
      marginTop: Platform.OS === 'android' ? 0 : 0,
      flex: 1,
      backgroundColor: 'white',
      padding: 10,
    },
    line: {
      height: 1,
      borderColor: '#D0D0D0',
      borderWidth: 1,
    },
    text_header: {
      fontSize: 20,
      color: 'black',
      fontWeight: '700',
      padding: 5,
    },
    pressable_profiles: {
      margin: 8,
      justifyContent: 'center',
      alignItems: 'center',
    },
    image_profiles: {
      width: 60,
      height: 60,
      resizeMode: 'contain',
      borderRadius: 100,
    },
    profile_names: {
      textAlign: 'center',
      fontSize: 13,
      fontWeight: '500',
      marginTop: 5,
      color: 'black',
    },
    view_model: {
      display: 'flex',
      alignItems: 'center',
      padding: 10,
    },
    image_model: {
      width: (screenWidth * 90) / 100,
      height: (screenHeight * 25) / 100,
      resizeMode: 'contain',
      borderRadius: 20,
    },
    view_subjects: {
      backgroundColor: '#17594A',
      margin: 10,
      padding: 15,
      borderRadius: 10,
      color: 'white',
    },
    text_subject: {
      fontSize: 20,
      fontWeight: '500',
      color: 'white',
    },
    text_code: {
      fontSize: 15,
      fontWeight: '500',
      color: 'white',
    },
    text_instrcutor: {
      fontSize: 15,
      fontWeight: '500',
      marginTop: 20,
      color: 'white',
    },
    view_announcement: {
      // display:"flex",
      // alignItems:"center",
    },
    text_announcement: {
      color: 'white',
      backgroundColor: 'gray',
      fontSize: 20,
      padding: 20,
      marginTop: 10,
      textAlign: 'center',
      // borderColor: 'green',
      // borderWidth: 1,
      borderRadius: 20,
    },
  });

  return (
    <SafeAreaView style={styles.safeArea_container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Text style={styles.text_header}>My Instructors</Text>
          <Text style={styles.line}></Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {instructorList.map((instructor, index) => (
              <Pressable key={index} style={styles.pressable_profiles}>
                <Image
                  source={instructor.image}
                  style={styles.image_profiles}
                />
                <Text style={styles.profile_names}>{instructor.name}</Text>
              </Pressable>
            ))}
          </ScrollView>
        </View>

        {/* <Text style={styles.line}></Text> */}

        <View>
          <View style={styles.view_model}>
            <Image source={SNSUModel} style={styles.image_model} />
          </View>
        </View>

        <View style={styles.view_announcement}>
          <Text style={styles.text_header}>Announcements</Text>
          <Text style={styles.line}></Text>
          <Text style={styles.text_announcement}>
            Intramurals: November 15, 2023
          </Text>
        </View>

        <View>
          <Text style={styles.text_header}>Enrolled Subjects</Text>
          <Text style={styles.line}></Text>

          {subjectList.map((subject, index) => (
            <Pressable key={index}>
              <View style={styles.view_subjects}>
                <Text style={styles.text_subject}>{subject.subject}</Text>
                <Text style={styles.text_code}>{subject.code}</Text>
                <Text style={styles.text_instrcutor}>{subject.instructor}</Text>
              </View>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
