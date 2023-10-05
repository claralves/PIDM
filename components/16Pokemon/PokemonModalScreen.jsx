import { View, Text, Button, Image } from "react-native";
import { useState, useEffect } from "react";

const PokemonModalScreen = ({ navigation, route }) => {
  const { url } = route.params;
  const [dados, setDados] = useState({});

  useEffect(() => {
    fetchPokemon();
  }, []);

  const fetchPokemon = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const pokemon = {
          id: data.id,
          name: data.name,
          height: data.height,
          order: data.order,
          weight: data.weight,
        };
        setDados(pokemon);
      })
      .catch((error) => console.log(error));
  };
  return (
    <View
      style={{ flex: 1, justifyContent: "flex-start", alignItems: "center" }}
    >
      <Text
        style={{
          fontSize: 25,
          fontWeight: "bold",
          margin: 10,
          color: "orange",
          marginBottom: 20,
        }}
      >
        Tela modal
      </Text>
      <View
        style={{
          margin: 5,
          marginBottom: 15,
          padding: 2,
          backgroundColor: "antiquewhite",
          alignItems: "flex-start",
          width: 100,
          borderColor: "red",
          borderWidth: 2,
          borderRadius: 5,
        }}
      >
        <Text style={{ fontSize: 13, fontWeight: "bold" }}>ID: {dados.id}</Text>
        <Text style={{ fontSize: 13, fontWeight: "bold" }}>
          NOME: {dados.name}
        </Text>
        <Text style={{ fontSize: 13, fontWeight: "bold" }}>
          ALTURA: {dados.height}
        </Text>
        <Text style={{ fontSize: 13, fontWeight: "bold" }}>
          ORDEM: {dados.order}
        </Text>
        <Text style={{ fontSize: 13, fontWeight: "bold" }}>
          PESO: {dados.weight}
        </Text>
      </View>

      <Image
        source={{
          uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${dados.id}.png`,
        }}
        style={{ width: 200, height: 200 }}
      />
      <Image
        source={{
          uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${dados.id}.png`,
        }}
        style={{ width: 200, height: 200 }}
      />
      <Button title="FECHAR MODAL" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default PokemonModalScreen;
