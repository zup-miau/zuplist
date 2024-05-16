import React from 'react'
import { 
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  TextInput,
  TouchableOpacity
    } from 'react-native'
import { Ionicons } from "@expo/vector-icons";
import { styles } from './style';
import ItemList from '../../components/ItemList';

export default function HOME() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground 
      source={require('../../assets/background.jpg')}
      resizeMode='repeat'
      style={{ flex: 1, justifyContent: 'flex-start'}}
      >
      <View style={styles.header}>
        <Text style={styles.title}> Lista de Produtos </Text>
        <View>
          <Ionicons name="trash" size={32} color="#fff" />
        </View>
      </View>

      {/* listinha*/}
      <ItemList item={"café"}></ItemList>
      <ItemList item={"chocolate"}></ItemList>
      
      <View style={styles.footer}>
        <View style={styles.inputContainer}>
          <TextInput 
          color="#fff"
          fontSize={18}
          placeholderTextColor="#aeaeae"
          placeholder='digite o nome do produto'/>
        </View>
        <TouchableOpacity style={styles.iconContainer}>
          <Ionicons name="add" size={36} color="#fff" />
        </TouchableOpacity>
      </View>
      </ImageBackground>
    </SafeAreaView>
  )
}