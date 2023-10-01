import { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import estilos from "./14Estilos";

const MyNetworking = () => {
  //estado para pegar e setar a propriedade titulo
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [movies, setMovies] = useState([]); //vetor

  //hook pra rodar assim q o código carregar
  useEffect(
    () => {
      //chama a função p/ pegar os filmes
      getMovies();
    },
    //se n colocar nd ele entende que só precisa ser carregado uma vez quando o componente for carregado
    []
  );

  const getMovies = () => {
    fetch("https://reactnative.dev/movies.json")
      //se der certo, pra pegar a promessa que tem o json
      .then((response) => response.json())
      //pode ser qualquer nome aqui, pega as propriedades do objeto
      .then(({ title, description, movies }) => {
        //console.log(title);
        setTitle(title);
        setDescription(description);
        setMovies(movies);
      })
      //se der errado, captura o erro
      //o nome dessa função é callback
      .catch((error) => console.log(error));
  };

  return (
    <View style={estilos.container}>
      <Text style={estilos.header}>{title}</Text>
      <View style={estilos.description_view}>
        <Text style={estilos.description}>{description}</Text>
      </View>
      <FlatList
        style={estilos.flatlist}
        //propriedade que passa os filmes
        data={movies}
        //como renderizar?
        renderItem={({ item }) => {
          return (
            <View style={estilos.card}>
              <View style={{ padding: 20 }}>
                <Text style={{ fontSize: 25, fontWeight: "bold" }}>
                  {item.id}
                </Text>
              </View>
              <View style={estilos.movie}>
                <Text style={{ fontSize: 20 }}>{item.title}</Text>
                <Text style={{ fontSize: 20 }}>{item.releaseYear}</Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default MyNetworking;
