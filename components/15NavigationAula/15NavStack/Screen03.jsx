import { View, Text, Button } from "react-native";
import myStyle from "./MyStyle";

const Screen03 = ({ navigation }) => {
  return (
    <View style={myStyle.container}>
      <Text style={myStyle.header}>Screen 03</Text>
      <Button
        title="Voltar para Screen 01"
        //isso aqui é para direcionar a tela q o botão vai levar
        onPress={() => navigation.popToTop("")}
      />
    </View>
  );
};

export default Screen03;
