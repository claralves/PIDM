import { View, Text, Image, ScrollView } from "react-native";

const imagem = {
  uri: "https://i1.sndcdn.com/artworks-000368687409-4f0s5j-t500x500.jpg",
  width: 240,
  height: 320,
};

const MyScrollView = () => {
  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          justifyContent: "flex-start",
          alignItems: "center",
          paddingTop: 25,
        }}
      >
        <Text style={{ fontSize: 25, fontWeight: "bold" }}>Shrek????</Text>
        <Image source={imagem}></Image>
        <Image source={imagem}></Image>
        <Image source={imagem}></Image>
        <Image source={imagem}></Image>
        <Image source={imagem}></Image>
      </View>
    </ScrollView>
  );
};

export default MyScrollView;
