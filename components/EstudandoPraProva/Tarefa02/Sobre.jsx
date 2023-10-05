import { View, Text, TextInput, Button, Pressable } from "react-native";
import estilo from "./Estilo";

const Sobre = ({ navigation }) => {
  return (
    <View style={estilo.container}>
      <Text style={{ fontWeight: "bold", fontSize: 50, color: "dodgerblue" }}>
        Sobre
      </Text>
      <Text style={estilo.text}>
        BlablablablablablablablablablablablablablablablablablablablablablablablablablablablaBlablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablabl
      </Text>
      <Pressable
        style={estilo.button}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={estilo.buttonText}>HOME</Text>
      </Pressable>
    </View>
  );
};

export default Sobre;
