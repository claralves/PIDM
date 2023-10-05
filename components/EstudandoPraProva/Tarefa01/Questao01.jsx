import { View, Text, Image, Button } from "react-native";
import Questao03 from "../Questao03";
import { useState } from "react";

const Questao01 = () => {
  const imagem1 =
    "https://i.pinimg.com/236x/44/a7/7e/44a77e69f23ae583f66e19c283379d27.jpg";
  const imagem2 =
    "https://st2.depositphotos.com/2927537/7025/i/450/depositphotos_70252811-stock-photo-funny-monkey-with-a-red.jpg";

  //para começar com a 1
  const [imagemSource, setImageSource] = useState(imagem1);

  const trocarImagem = () => {
    const novaImagem = imagemSource === imagem1 ? imagem2 : imagem1;
    setImageSource(novaImagem);
  };

  return (
    <View
      style={{
        backgroundColor: "#C0C0C0",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image
        id="image"
        source={{ uri: imagemSource }}
        style={{ width: 150, height: 210 }}
      />
      <Text style={{ fontWeight: "bold", fontSize: 18 }}>Nome: </Text>
      <Text>Cidade: </Text>
      <Text style={{ color: "red" }}>Curso: </Text>
      <Text>Semestre: </Text>

      <Questao03 cor="green" />
      <Button
        title="Troca troca"
        onPress={() => {
          trocarImagem();
        }}
      />
    </View>
  );
};

export default Questao01;
