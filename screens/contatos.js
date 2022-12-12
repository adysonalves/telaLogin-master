import { View, Text, TextInput, TouchableHighlight } from "react-native";
import { Button, ListItem, Avatar, Header } from "react-native-elements";
import axios from "axios";
import { ScrollView } from "react-native-gesture-handler";
import styles from "./styles";
import FormCadastro from '../src/components/Form/cadastro'
import { useEffect, useState } from "react";



function Contatos({ route,navigation }) {

  const [list, setlist] = useState([])

  useEffect(() => {

    function consultarDados() {

      axios.get('http://professornilson.com/testeservico/clientes')
        .then(function (response) {
          setlist(response.data)
        }).catch(function (error) {
          console.log(error);
        });

    }
    consultarDados();
  });


  return (
    <View >
      <Header
        centerComponent={{ text: 'Lista de contatos', style: { color: '#fff' } }}
        rightComponent={
        <Button 
        title="+" onPress={() => {
          navigation.navigate('Inserir')
        }}
        
        />}
      />
      <ScrollView>
        {
          list.map((l, i) => (
            <ListItem key={i} bottomDivider onPress={() => {
              navigation.navigate('Editar',{
                nome: l.nome,
                telefone: l.telefone,
                cpf: l.cpf,
                email: l.email,
                id: l.id,
              });
            }}>
              <Avatar source={{ uri: "http://www.def.uem.br/arquivos/imagens/fotos-dos-docentes/semimagemavatar.png/image" }} />
              <ListItem.Content >
                <ListItem.Title>{l.nome}</ListItem.Title>
                <ListItem.Subtitle>{l.email}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          ))
        }
      </ScrollView>
    </View>
  )

}

export default Contatos;