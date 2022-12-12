import { View, Text, TextInput, TouchableHighlight } from "react-native";
import { Button, ListItem, Avatar, Header } from "react-native-elements";
import axios from "axios";
import { ScrollView } from "react-native-gesture-handler";
import styles from "./styles";
import FormCadastro from '../src/components/Form/cadastro'
import { useEffect, useState } from "react";


function Contatos({ route,navigation }) {

  const [list, setlist] = useState([]);
  const [getNome, setNome] = useState();
  const [getEmail, setEmail] = useState();
  const [getTelefone, setTelefone] = useState();
  const [getCpf, setCpf] = useState();



 function inserirDados(){
  axios.post('http://professornilson.com/testeservico/clientes', {
      nome: getNome,
      email: getEmail,
      telefone: getTelefone,
      cpf: getCpf
    }).then(response => {
      navigation.navigate('Contatos')
    }).catch(error => {
      console.log(error);
    })
  }


  return (
    <View style={{ alignItems: "center" }}>
      <Text>Digite seu Nome</Text>
      <TextInput
        style={{ height: 40, width: 300, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => setNome(text)}
        value={getNome}
      />

      <Text>Digite seu E-mail</Text>
      <TextInput
        style={{ height: 40, width: 300, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => setEmail(text)}
        value={getEmail}
      />

      <Text>Digite seu Telefone</Text>
      <TextInput
        style={{ height: 40, width: 300, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => setTelefone(text)}
        value={getTelefone}
      />

      <Text>Digite seu CPF</Text>
      <TextInput
        style={{ height: 40, width: 300, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => setCpf(text)}
        value={getCpf}
      />

      <Button title="Salvar dados"
      buttonStyle={{marginTop: 20, width: 300}}
        onPress={() => inserirDados()}
      />
    </View>
  )

}

export default Contatos;