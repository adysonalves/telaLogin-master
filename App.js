import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import axios from "axios";
import Icone from './src/components/Icon/User';
import FormLogin from './src/components/Form/login';
import FormCadastro from './src/components/Form/cadastro';
import ListContatos from './screens/contatos';
import inserirContato from './screens/inserirContato';
import editarContatos from './screens/editarContato';
import { Button } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cadastro from './screens/cadastro';

function Login({ route, navigation }) {
  const [getEmail, setEmail] = useState();
  const [getSenha, setSenha] = useState();

  async function logar() {
    await axios.post('http://192.168.0.28:4002/login', {
      email: getEmail,
      senha: getSenha
    }).then(response => { 
      if(response.data.status){
      navigation.navigate('Contatos');
    } else {
      navigation.navigate('Login');
    }
  }).catch(err => { console.log("Ocorreu um " + err) });
  }

  return (
    <View style={styles.container}>
      <Icone />
      <Text style={styles.label}>Login</Text>
      <TextInput style={styles.input} onChangeText={text => setEmail(text)} value={getEmail} />

      <Text style={styles.label}>Senha</Text>
      <TextInput secureTextEntry={true} style={styles.input} onChangeText={text => setSenha(text)} value={getSenha} />

      <Button title={'Login'} titleStyle={{ fontSize: 28, fontWeight: 'bold' }} buttonStyle={styles.buttonLog} onPress={() => logar()} />

      <Button title={'Cadastre-se'} titleStyle={{ fontSize: 28, fontWeight: 'bold' }} buttonStyle={styles.buttonCad} onPress={() => { navigation.navigate('Usuários') }} />
    </View>



  );
}



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Usuários" component={Cadastro} />
        <Stack.Screen name="Contatos" component={ListContatos} options={{ headerShown: false }} />
        <Stack.Screen name="Inserir" component={inserirContato} />
        <Stack.Screen name="Editar" component={editarContatos} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E7DDD7',
    justifyContent: 'center',
    padding: 40
  },
  buttonLog: {
    marginTop: 30,
    padding: 10,
  },
  buttonCad: {
    marginTop: 20,
    backgroundColor: 'rgba(214, 61, 57, 1)',
    padding: 10
  },
  input:{
    backgroundColor: '#fff',
    width: '100%',
    height: 50,
    borderStyle: 'solid',
    borderColor: 'lightgrey',
    borderWidth: 1,
    paddingLeft: 10
  },
  label:{
    fontSize: 32,
    paddingBottom: 8,
    fontWeight: '300'
  }
});
