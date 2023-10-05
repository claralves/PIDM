import { View, Text, Button, FlatList, ScrollView, Image } from "react-native";
import { useState, useEffect } from "react";
import PokeButton from "./PokeButton";

const PokedexScreen = ({ navigation }) => {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    fetchPokemons();
  }, []);

  const fetchPokemons = () => {
    //fetch resgata os dados?
    fetch("https://pokeapi.co/api/v2/pokemon?limit=51")
      .then((response) => response.json())
      .then((json) => {
        const vetorFormatado = json.results.map(({ name, url }) => {
          // console.log(url.split("/"));
          return { id: url.split("/")[6], name, url };
        });
        // console.log(vetorFormatado);
        setPokemons(vetorFormatado);
      })
      .catch((error) => console.log(error));
  };

  const renderPokemons = () => {
    return (
      <ScrollView style={{ width: "95%" }}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-evenly",
            //pra quebrar a linha
            flexWrap: "wrap",
          }}
        >
          {/* //dentro de um map */}
          {pokemons.map((pokemonObj) => {
            return (
              <View
                style={{
                  margin: 5,
                  marginBottom: 15,
                  padding: 2,
                  backgroundColor: "antiquewhite",
                  alignItems: "center",
                  width: 100,
                  borderColor: "red",
                  borderWidth: 2,
                  borderRadius: 5,
                }}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 11,
                  }}
                >
                  {/* //Deixa tudo em maiusculo */}
                  {pokemonObj.name.toUpperCase()}
                </Text>
                <Image
                  source={{
                    uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonObj.id}.png`,
                  }}
                  style={{ width: 60, height: 60 }}
                />
                <PokeButton
                  title="Detalhes"
                  onPress={() => {
                    navigation.navigate("PokemonModal", {
                      url: pokemonObj.url,
                    });
                  }}
                />
              </View>
            );
          })}
        </View>
      </ScrollView>
    );
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
        Pokedex Screen
      </Text>
      {renderPokemons()}
    </View>
  );
};

export default PokedexScreen;
