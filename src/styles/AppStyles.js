// src/styles/AppStyles.js
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'arial',
    color: '#000',
    marginBottom: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#020202',
    marginBottom: 30,
    textAlign: 'center',
  },
input: {
  height: 40,             // mais baixinha
  borderColor: '#000',
  borderWidth: 1,
  borderRadius: 5,
  width: '35%',           // mais estreita
  paddingHorizontal: 10,
  marginBottom: 20,
  backgroundColor: '#fff',
  fontSize: 14,           // fonte menor
},


  button: {
    backgroundColor: '#3a7171ff',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 5,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'arial',
    fontSize: 18,
    textTransform: 'uppercase',
  },
});
