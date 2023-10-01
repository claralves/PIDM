import { View, Text, TextInput, Button } from "react-native";
import { useState } from "react";
import estilos from "./09CSS";
import MyPressable from "./09MyPressable";

const Calculadora = () => {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [result, setResult] = useState("");

  function somar() {
    //parseInt transforma letras em numeros
    //parseFloat aceita números quebrados
    setResult(parseFloat(number1) + parseFloat(number2));
  }

  function diminui() {
    setResult(parseFloat(number1) - parseFloat(number2));
  }

  function multiplica() {
    setResult(parseFloat(number1) * parseFloat(number2));
  }

  function dividi() {
    //toFixed serve pra mostrar quantos numeros no maximo vai aparecer dps da virgula, ou seja números quebrados
    const rest = parseFloat(number1) / parseFloat(number2);
    setResult(rest.toFixed(2));
  }

  return (
    <View style={estilos.container}>
      <Text style={estilos.header}>Calculadora 0.1</Text>
      <TextInput
        style={estilos.input}
        keyboardType="numeric"
        placeholder="Número 1"
        onChangeText={(numero) => setNumber1(numero)}
      />
      <TextInput
        style={estilos.input}
        keyboardType="numeric"
        placeholder="Número 2"
        onChangeText={(numero) => setNumber2(numero)}
      />
      <View style={estilos.containerBotoes}>
        {/* se colocar o () depois de "somar" que é a função, ele já executa, mas sem () ele só chama */}

        {/* <Button title="Soma" onPress={somar} />
        <Button title="Diminui" onPress={diminui} />
        <Button title="Multiplica" onPress={multiplica} />
        <Button title="Dividi" onPress={dividi} /> */}

        <MyPressable funcao={somar} titulo="somar" />
        <MyPressable funcao={diminui} titulo="subtrai" />
        <MyPressable funcao={multiplica} titulo="multiplica" />
        <MyPressable funcao={dividi} titulo="dividir" />
      </View>

      <Text style={[estilos.header, { marginTop: 20 }]}>
        Resultado: {result}
      </Text>
    </View>
  );
};

export default Calculadora;
