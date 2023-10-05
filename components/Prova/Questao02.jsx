import React from "react";
import { View, Text } from "react-native";
import dados from "./Dados";

const Questao02 = ({ route }) => {
  // Obtém o título selecionado dos parâmetros de navegação
  const { selectedTitle } = route.params;

  // Filtra os dados com base no título selecionado
  const filteredData = dados.find((item) => item.title === selectedTitle);

  return (
    <View>
      <Text>{selectedTitle}</Text>
      {filteredData &&
        filteredData.data.map((item) => (
          <View key={item.nome}>
            <Text>{item.nome}</Text>
            <Text>{item.valor}</Text>
            <Text>{item.hora}</Text>
          </View>
        ))}
    </View>
  );
};

export default Questao02;
