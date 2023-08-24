import { View, Text, Image } from "react-native";
import Questao03 from "./Questao03";
import { Button } from "react-native-web";
import { useState } from "react";

const Questao01 = () => {
  const imagem1 =
    "https://i.pinimg.com/736x/af/d3/ec/afd3ec6369c534a4d6e1121f19b5d59c.jpg";
  const imagem2 =
    "https://i.pinimg.com/736x/f8/1c/62/f81c62853a3d3304107c7e472fe0ca23.jpg";

  const [imageSource, setImageSource] = useState(imagem1);

  const trocarImagem = () => {
    const novaImagem = imageSource === imagem1 ? imagem2 : imagem1;
    setImageSource(novaImagem);

    // if (imageSource === imagem1) {
    //   setImageSource(imagem2);
    // } else {
    //   setImageSource(imagem1);
    // }
    //se for igual a imagem 1 muda pra imagem2, se for a imagem 2 volta pra 1
  };

  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Button
        title="Mudar imagem"
        onPress={() => {
          trocarImagem();
        }}
      />

      <Image
        id="imagem"
        source={{
          uri: imageSource,
        }}
        style={{ height: 150, width: 150 }}
      />

      <Text style={{ fontWeight: "bold" }}>Maria Clara Rodrigues Alves</Text>
      <Text style={{ fontWeight: "bold" }}>Fortaleza</Text>
      <Text style={{ fontWeight: "bold", color: "red" }}>Design Digital</Text>
      <Text style={{ fontWeight: "bold" }}>Sexto Semestre</Text>
      <br />
      <Questao03 cor="purple" />
    </View>
  );
};

export default Questao01;
