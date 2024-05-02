import { StatusBar } from 'expo-status-bar';
import { Link } from 'expo-router';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function welcome() {
  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <Image source={require('../assets/tete.jpg')} style= {styles.logo}
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>
          zuplist
        </Text>
        <Text style={styles.title}>
          monte sua lista de desejos, plim, plim
        </Text>
        <Link style={styles.button} href={"/home"}>
          <Text style ={styles.buttontext} >Acessar</Text>
        </Link>
      </View>
      <StatusBar style="light" backgroundColor='#000' />
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
  },
  logo: {
    width: 230,
    height: 230,
    borderRadius: 115,
    resizeMode: 'cover'
  },
  content: {
    flex: 1,
    backgroundColor: '#dadada',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: '5%',

  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    margintop: 28,
    marginBottom: 20,
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    color: "gray",
  },
  button: {
    position: 'absolute',
    backgroundColor: '#000',
    bottom: '15%',
    alignSelf: 'center',
    borderRadius: 50,
    paddingVertical: 15,
    width: '60',
    textAlign: 'center',
  },
  buttontext: {
    fontSize: 22,
    color: '#fff' ,
    fontWeight: 'bold',
  },









});

