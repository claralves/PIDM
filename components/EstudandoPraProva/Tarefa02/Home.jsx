import { View, Text, Button } from "react-native";
import estilo from "./Estilo";

const Home = ({ navigation }) => {
  return (
    <View style={estilo.container}>
      <Button
        title="Cadastro"
        onPress={() => navigation.navigate("Cadastro")}
      />
      <Button title="IMC" onPress={() => navigation.navigate("IMC")} />
      <Button title="Sobre" onPress={() => navigation.navigate("Sobre")} />
    </View>
  );
};

export default Home;
