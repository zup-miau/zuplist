import { StatusBar } from 'expo-status-bar';
import {link} from 'expo-router';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function welcome() {
  return (
    <View style={styles.container}>
      <view style={styles.containerImage}>
        <image source={require('../assets/tete.jpg')} style= {styles.logo}/>
      </view>
      <Text>Miau</Text>
      <link href={"/home"}>
        <text>acessar</text>
      </link>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  containerImage: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  }
  logo: {
    width: 230,
    height: 230,
    borderRadius: 115,
    resizeMode: 'cover'
  },
});

