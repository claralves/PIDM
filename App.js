import { StyleSheet, View, Text } from "react-native";
// // import HelloRN from "./components/01HelloRN";
// // import HelloRNV2 from "./components/02HelloRNV2";
// import MyCat from "./components/03MyCat";
// import State from "./components/06State";
// import Parent from "./components/05Nested/05Parent";
import Questao01 from "./components/Tarefas/Tarefa01/Questao01";

export default function App() {
  return (
    <View style={estilos.container}>
      {/* <Text style={estilos.titulo}>Título</Text> */}
      <Questao01 />
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#C0C0C0",
    alignItems: "center", //define o lugar da linha
    justifyContent: "center", //define o lugar da coluna
    marginTop: 0,
  },
  // titulo: {
  //   fontSize: 30,
  //   fontWeight: "bold",
  //   color: "red",
  // },
});
