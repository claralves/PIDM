import { View, Text, TextInput, Button, Pressable } from "react-native";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import estilo from "./Estilo";

const IMC = ({ navigation }) => {
  const [Peso, SetPeso] = useState(0);
  const [Altura, SetAltura] = useState(0);

  const navigation = useNavigation();

  return (
    <View style={estilo.container}>
      <TextInput
        style={estilo.input}
        placeholder="Digita seu peso"
        onChangeText={(x) => SetPeso(x)}
      />
      <TextInput
        style={estilo.input}
        placeholder="Digita sua altura"
        onChangeText={(x) => SetAltura(x)}
      />
      <Pressable
        style={estilo.button}
        onPress={() =>
          navigation.navigate("Resultado", { Peso: Peso, Altura: Altura })
        }
      >
        <Text style={estilo.buttonText}>OK!</Text>
      </Pressable>
    </View>
  );
};

export default IMC;
