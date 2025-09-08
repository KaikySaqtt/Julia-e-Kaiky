import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, Image } from 'react-native';
import styles from "./src/styles/AppStyles";


export default function App() {
  const [name, setName] = React.useState('');
  const [image, setImage] = React.useState(require('./assets/img/gato1.jpg'));  // Imagem padrão

  // Função para trocar a imagem conforme o nome digitado
  function trocarImagem() {
    if (name.toLowerCase() === 'gato1') {
      setImage(require('./assets/img/gato1.jpg'));
    } else if (name.toLowerCase() === 'gato2') {
      setImage(require('./assets/img/gato2.jpg'));
    } else if (name.toLowerCase() === 'gato3') {
      setImage(require('./assets/img/gato3.jpg'));
    } else {
      // Caso o nome não seja 'gato1', 'gato2' ou 'gato3', você pode adicionar uma imagem padrão ou uma mensagem.
      setImage(require('./assets/img/gato1.jpg')); // Ou qualquer outra imagem padrão
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

    
      <Image source={image} style={{ width: 200, height: 200 ,borderRadius: 30,     borderColor: '#000', borderWidth: 1,}} />

      <Text style={styles.title}>gatos gatos</Text>


      <Text style={styles.subtitle}>
        gatos miau miau
      </Text>

      <TextInput
        style={styles.input}
        onChangeText={(value) => setName(value)} 
        placeholder="Digite o nome da imagem (gato1, gato2, gato3)"
        placeholderTextColor="#aaa"

      />


      <Pressable style={styles.button} onPress={trocarImagem}>
        <Text style={styles.buttonText}>Entrar</Text>
      </Pressable>

      {name.length > 0 ? (
        <Text style={styles.greeting}></Text>
      ) : (
        <Text style={styles.greeting}>Digite o nome da imagem que você deseja visualizar</Text>
      )}
    </View>
  );
}
