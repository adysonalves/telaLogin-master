import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Icone from './src/components/Icon/User';
import FormLogin from './src/components/Form/login';
import FormCadastro from './src/components/Form/cadastro';
import { Button } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Icone />
      <FormLogin />

      <Button title={'Login'} titleStyle={{ fontSize: 28, fontWeight: 'bold' }} buttonStyle={styles.buttonLog} />

      <Button title={'Cadastre-se'} titleStyle={{ fontSize: 28, fontWeight: 'bold' }} buttonStyle={styles.buttonCad} onPress={() => { navigation.navigate('Usuários') }} />
    </View>

  );
}

function Cadastro({ navigation }) {
  return (
    <View style={styles.container}>
      <FormCadastro/>
      <Button title={'Salvar'} titleStyle={{ fontSize: 28, fontWeight: 'bold' }} buttonStyle={styles.buttonLog} />
    </View>
  )

}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Usuários" component={Cadastro} />
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
  buttonLog:{
    marginTop: 30,
    padding: 10,
  },
  buttonCad:{
    marginTop: 20,
    backgroundColor: 'rgba(214, 61, 57, 1)',
    padding: 10
  }
});
