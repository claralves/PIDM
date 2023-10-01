import { View, Text, FlatList } from "react-native";

// const dados = [
//   { key: 1, nome: "Clara", nota: 9.9 },
//   { key: 2, nome: "Vito", nota: 10 },
//   { key: 3, nome: "João", nota: 8.5 },
//   { key: 4, nome: "Pedro", nota: 3.7 },
//   { key: 5, nome: "Renata", nota: 7.3 },
// ];

const dados = [
  { nome: "Fulano", nota: 10 },
  { nome: "Sicrano", nota: 10 },
  { nome: "Beltrano", nota: 10 },
];

const MyFlatList = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        marginTop: 20,
      }}
    >
      <FlatList
        data={dados}
        renderItem={({ item }) => {
          return (
            <View>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                {item.nome} - {item.nota}
              </Text>
            </View>
          );
        }}
        //coloca uma chave em cada vetor de acordo com o texot de execução
        keyExtractor={(elemento) => {
          return elemento.nome + elemento;
        }}
      />
    </View>
  );
};
export default MyFlatList;
