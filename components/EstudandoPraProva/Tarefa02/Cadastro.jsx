import { View, Text, TextInput, Button, Pressable } from "react-native";
import { useState } from "react";
import estilo from "./Estilo";

const Cadastro = ({ navigation }) => {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState(0);
  const [curso, setCurso] = useState("");
  return (
    <View style={estilo.container}>
      <TextInput
        style={estilo.input}
        placeholder="Digita seu primeiro nome"
        onChangeText={(x) => setNome(x)}
      />
      <Text>{nome}</Text>
      <TextInput
        style={estilo.input}
        placeholder="Digita sua idade"
        onChangeText={(x) => setIdade(x)}
      />
      <TextInput
        style={estilo.input}
        placeholder="Digita seu curso"
        onChangeText={(x) => setCurso(x)}
      />
      <Pressable
        style={estilo.button}
        onPress={() =>
          navigation.navigate("Perfil", {
            Nome: nome,
            Idade: idade,
            Curso: curso,
          })
        }
      >
        <Text style={estilo.buttonText}>OK!</Text>
      </Pressable>
    </View>
  );
};

export default Cadastro;
