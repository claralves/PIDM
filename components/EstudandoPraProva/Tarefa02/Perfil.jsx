import { View, Text, TextInput, Button, Pressable, Image } from "react-native";
import estilo from "./Estilo";

const Perfil = ({ navigation, route }) => {
  return (
    <View style={estilo.container}>
      <View style={estilo.perfil}>
        <Image
          style={estilo.perfilImage}
          source={require("../../midia/gatou.jpg")}
        ></Image>
        <View style={{ justifyContent: "space-between" }}>
          <Text style={estilo.title}>Nome: {route.params?.Nome}</Text>
          <Text style={estilo.title}>Idade: {route.params?.Idade}</Text>
          <Text style={estilo.title}>
            Curso: <Text style={estilo.respon}>{route.params?.Curso}</Text>
          </Text>
        </View>
      </View>

      <Pressable
        style={estilo.button}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={estilo.buttonText}>HOME</Text>
      </Pressable>
    </View>
  );
};

export default Perfil;
