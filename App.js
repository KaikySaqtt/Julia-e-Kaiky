import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, Image } from 'react-native';
import styles from "./src/styles/AppStyles";


export default function App() {
  const [name, setName] = React.useState('');
  const [image, setImage] = React.useState(require('./assets/img/mico.jpeg'));  // Imagem padrão

  // Função para trocar a imagem conforme o nome digitado
  function trocarImagem() {
    if (name.toLowerCase() === 'mico') {
      setImage(require('./assets/img/mico.jpeg'));
    } else if (name.toLowerCase() === 'babuino') {
      setImage(require('./assets/img/babuino.jpg'));
    } else if (name.toLowerCase() === 'sagui') {
      setImage(require('./assets/img/sagui.jpg'));
    } else {
      setImage(require('./assets/img/macacoconfuso.jpg')); 
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <Text style={styles.title}>Melhores macacos</Text>
      <Image source={image} style={{ width: 300, height: 300 ,borderRadius: 15, borderWidth: 1, borderColor: '#ffffffff', marginBottom: 15}} />

      

      <TextInput
        style={styles.input}
        onChangeText={(value) => setName(value)} 
        placeholder="Coloque o nome da imagem (Mico, babuino e sagui)"
        placeholderTextColor="#6f5c77ff"

      />


      <Pressable style={styles.button} onPress={trocarImagem}>
        <Text style={styles.buttonText}>Entrar</Text>
      </Pressable>

      
    </View>
  );
}
