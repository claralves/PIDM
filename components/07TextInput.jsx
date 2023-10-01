import { View, Text, TextInput, StyleSheet } from "react-native";
import { useState } from "react";

const MyTextInput = () => {
  const [frase, setFrase] = useState("");

  return (
    <View style={estilos.view}>
      <Text style={estilos.header}>Tradutor emoji</Text>
      <TextInput
        style={estilos.input}
        placeholder="DIGITA LOGO!"
        //sempre que digitar algo
        defaultValue={frase}
        //ele ativa esse evento, então ele pega essa variável e altera o valor
        onChangeText={(textoDigitado) => setFrase(textoDigitado)}
      />
      <Text style={estilos.frase}>
        {/* chama a variável que eu quero exibir */}
        {/* pra escolher um emoji é só apertar windoms + "." */}
        {frase.split(" ").map((palavra) => palavra && "😊")}
        {/* split é pra separar as coisas de acordo com alguma regra */}
        {/* palavra && é para verificar se a palavra existe, se não é nulo, pra não começar já mostrando um emoji */}
      </Text>
    </View>
  );
};

const estilos = StyleSheet.create({
  header: {
    fontSize: 30,
    fontWeight: "bold",
    color: "purple",
    paddingBottom: 20,
  },
  view: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: "aquamarine",
  },
  input: {
    height: 50,
    width: 200,
    borderColor: "black",
    borderWidth: 2,
    fontSize: 22,
    paddingLeft: 10,
  },
  frase: {
    fontSize: 20,
    fontWeight: "bold",
    paddingTop: 20,
  },
});

export default MyTextInput;
