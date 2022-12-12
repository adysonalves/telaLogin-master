import React, {useState} from "react";
import { View, Text, TextInput } from "react-native";
import { Button } from "react-native-elements";
import styles from "./styles";
import axios from "axios";
import stylesForm from '../src/components/Form/style'
import FormCadastro from '../src/components/Form/cadastro'



function Cadastro({ navigation }) {

  const [getEmail, setEmail] = useState();
  const [getSenha, setSenha] = useState();

  async function addUser() {
    await axios.post('http://192.168.0.28:4002/add-user', {
      email: getEmail,
      senha: getSenha
    }).then(response => { 
      navigation.navigate('Login');
  }).catch(err => { console.log("Ocorreu um erro" + err) });
  }

    return (
      <View style={styles.container}>

        <Text style={stylesForm.label}>E-mail</Text>
        <TextInput style={stylesForm.input} onChangeText={text => setEmail(text)} value={getEmail}/>

        <Text style={stylesForm.label}>Senha</Text>
        <TextInput secureTextEntry={true} style={stylesForm.input} onChangeText={text => setSenha(text)} value={getSenha} />

        <Button title={'Criar conta'} titleStyle={{ fontSize: 28, fontWeight: 'bold' }} buttonStyle={styles.buttonLog} onPress={() => addUser()}/>
      </View>
    )
  
  }

  export default Cadastro;