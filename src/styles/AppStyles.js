// src/styles/AppStyles.js
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f79f2cff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 48,
    fontWeight: 'arial',
    color: '#ffffffff',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#ffffffff',
    marginBottom: 30,
    textAlign: 'center',
  },
input: {
  height: 40,             // mais baixinha
  borderColor: '#ffffffff',
  borderWidth: 1,
  borderRadius: 5,
  width: '35%',           // mais estreita
  paddingHorizontal: 10,
  marginBottom: 20,
  backgroundColor: '#fff',
  fontSize: 14,           // fonte menor
},


  button: {
    backgroundColor: '#a9b40fff',
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
