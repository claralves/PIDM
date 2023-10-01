import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import { useState } from "react";

const NomeAtividade = () => {
  const [nome1, setNome1] = useState("");
  const [nome2, setNome2] = useState("");
  const [nome3, setNome3] = useState("");

  return (
    <View>
      <TextInput
        style={estilos.input}
        placeholder="Nome"
        onChangeText={(textoDigitado) => setNome1(textoDigitado)}
      />
      <TextInput
        style={estilos.input}
        placeholder="Sobrenome"
        onChangeText={(textoDigitado) => setNome2(textoDigitado)}
      />
      <Button
        title="Fusão"
        onPress={() => {
          setNome3(nome1 + " " + nome2 + "😊");
        }}
      />
      <Text style={estilos.nome}>{nome3}</Text>
    </View>
  );
};
const estilos = StyleSheet.create({
  input: {
    height: 50,
    width: 200,
    borderColor: "black",
    borderWidth: 2,
    fontSize: 22,
    paddingLeft: 10,
  },
  nome: {
    fontSize: 20,
    fontWeight: "bold",
    paddingTop: 20,
  },
});

export default NomeAtividade;
