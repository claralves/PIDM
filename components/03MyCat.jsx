import { Text, ScrollView } from "react-native";

const MyCat = () => {
  let NomeDoGato = "Tom";

  const getFullName = (primeiroNome, segundoNome) => {
    return primeiroNome + " " + segundoNome;
  };

  return (
    <ScrollView>
      <Text style={{ fontSize: 20 }}>
        O nome do meu gato é {getFullName("Tom", "Felino")}
      </Text>
    </ScrollView>
  );
};

export default MyCat;
