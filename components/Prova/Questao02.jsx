import React from "react";
import { View, Text } from "react-native";
import { PaperProvider, IconButton, MD3Colors } from "react-native-paper";
import estilos from "./estilos";

const Questao02 = ({ route }) => {
  // Obtém o título selecionado dos parâmetros de navegação
  const itens = route.params;

  console.log(itens);
  return (
    <PaperProvider>
      <View>
        <IconButton
          icon={itens.item.icon}
          iconColor={"white"}
          size={30}
          onPress={() => console.log("")}
          mode="contained"
        />
        <Text>{itens.selectedTitle}</Text>
        <View key={itens.item.nome}>
          <Text>{itens.item.nome}</Text>
          <Text>{itens.item.valor}</Text>
          <Text>{itens.item.hora}</Text>
        </View>
      </View>
    </PaperProvider>
  );
};

export default Questao02;
