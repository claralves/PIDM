import { Text, Image, ScrollView, TextInput } from "react-native";

const HelloRNV2 = () => {
  return (
    <ScrollView>
      <Text>React Native 4 cats</Text>
      <Image
        source={{
          uri: "https://hitsite.com.br/wp-content/uploads/2022/10/Elenco-e-equipe-em-live-action-de-One-Piece-comemoram-o-1200x675-1.jpg",
        }}
        style={{ width: 200, height: 200 }}
      />
      <TextInput
        style={{
          height: 50,
          borderColor: "black",
          borderWidth: 2,
          fontSize: 22,
          paddingLeft: 10,
        }}
      />
    </ScrollView>
  );
};

export default HelloRNV2;
