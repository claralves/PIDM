import { View, Text, SectionList, StyleSheet } from "react-native";

const dados = [
  {
    title: "J",
    data: [
      { nome: "Jefferson", id: 1 },
      { nome: "Jonas", id: 2 },
      { nome: "Juarez", id: 7 },
    ],
  },
  {
    title: "C",
    data: [
      { nome: "Clara", id: 3 },
      { nome: "Clotilde", id: 4 },
    ],
  },
  {
    title: "V",
    data: [
      { nome: "Victor", id: 5 },
      { nome: "Vitoriana", id: 6 },
    ],
  },
];

const MySectionList = () => {
  return (
    <View style={estilos.container}>
      <SectionList
        sections={dados}
        keyExtractor={(item) => "SDDCeredEDDeed" + item.id}
        renderItem={({ item }) => {
          return <Text style={{ fontSize: 25 }}>{item.nome}</Text>;
        }}
        renderSectionHeader={({ section }) => {
          return (
            <Text style={{ fontSize: 25, fontWeight: "bold" }}>
              {section.title}
            </Text>
          );
        }}
      />
    </View>
  );
};

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 25,
  },
});

export default MySectionList;
