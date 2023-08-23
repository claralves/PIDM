import { View, Text } from "react-native";
import ChildA from "./05ChildA";
import ChildB from "./05ChildB";

const Parent = () => {
  return (
    <View>
      <Text style={{ fontSize: 25, fontWeight: "bold" }}>
        Eu sou o componente Pai
      </Text>
      <ChildA />
      <ChildB dica="Aqui escreva seu nome" />
      <ChildB dica="Aqui escreva seu sobrenome" />
      <ChildB dica="Aqui escreva seu endereço" />
    </View>
  );
};

export default Parent;
