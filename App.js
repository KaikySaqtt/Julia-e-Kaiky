import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, Image } from 'react-native';
import styles from "./src/styles/AppStyles";


export default function App() {
  const [name, setName] = React.useState('');
  const [image, setImage] = React.useState(require('./assets/img/pazul.jpg'));  // Imagem padrão

  // Função para trocar a imagem conforme o nome digitado
  function trocarImagem() {
    if (name.toLowerCase() === 'periquito1') {
      setImage(require('./assets/img/pazul.jpg'));
    } else if (name.toLowerCase() === 'periquito2') {
      setImage(require('./assets/img/pverde.jpg'));
    } else if (name.toLowerCase() === 'periquito3') {
      setImage(require('./assets/img/pgay.jpg'));
    } else {
      setImage(require('./assets/img/ptraumatizado.jpg')); 
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <Text style={styles.title}>Periquitos queridos</Text>
      <Image source={image} style={{ width: 200, height: 200 ,borderRadius: 15, borderWidth: 1, marginBottom: 15}} />

      

      <TextInput
        style={styles.input}
        onChangeText={(value) => setName(value)} 
        placeholder="Coloque o nome da imagem (periquito1, periquito2, periquito3)"
        placeholderTextColor="#6f5c77ff"

      />


      <Pressable style={styles.button} onPress={trocarImagem}>
        <Text style={styles.buttonText}>Entrar</Text>
      </Pressable>

      
    </View>
  );
}
