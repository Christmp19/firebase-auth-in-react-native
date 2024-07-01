import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';

const Skip = ({ onPress = () => {} }) => {
  return (
    <Pressable
      style={{ marginHorizontal: 12 }}
       onPress={onPress}
    >
      <Text style={{ fontSize: 16 }}>Skip</Text>
    </Pressable>
  );
};
const Next = ({ onPress = () => {} }) => {
  return (
    <Pressable
      style={{ marginHorizontal: 12 }}
       onPress={onPress}
    >
      <Text style={{ fontSize: 16 }}>Next</Text>
    </Pressable>
  );
};

const Dots = ({ selected }) => {
  let backgroundColor;
  backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';

  return (
    <View
      style={{
        backgroundColor,
        width: 6,
        height: 6,
        marginHorizontal: 3,
      }}
    >

    </View>
  )
}

const Done = ({ onPress = () => { } }) => {
  return (
    <Pressable
      style={{ marginHorizontal: 12 }}
      onPress={onPress}
    >
      <Text style={{ fontSize: 16 }}>Done</Text>
    </Pressable>
  );
};


const OnboardingScreen = ({ navigation }) => {
  return (
    <Onboarding
      SkipButtonComponent={Skip}
      NextButtonComponent={Next}
      DotComponent={Dots}
      DoneButtonComponent={Done}
      onSkip={() => navigation.replace('Login')}
      onDone={() => navigation.replace('Login')}
      pages={[
        {
          backgroundColor: '#a6e4d0',
          image: <Image source={require('../assets/onboarding-img1.png')} />,
          title: 'Connect to the World',
          subtitle: 'A New Way To Connect With The World',
        },
        {
          backgroundColor: '#fdeb93',
          image: <Image source={require('../assets/onboarding-img2.png')} />,
          title: 'Share Your Favorites',
          subtitle: 'Share Your Thoughts With Similar Kind of People',
        },
        {
          backgroundColor: '#e9bcbe',
          image: <Image source={require('../assets/onboarding-img3.png')} />,
          title: 'Become The Star',
          subtitle: "Let The Spot Light Capture You",
        },
      ]}
    />
  )
}

export default OnboardingScreen