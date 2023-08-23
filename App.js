import { StyleSheet, View, Text } from "react-native";
// // import HelloRN from "./components/01HelloRN";
// // import HelloRNV2 from "./components/02HelloRNV2";
// import MyCat from "./components/03MyCat";
// import Parent from "./components/05Parent";
import State from "./components/06State";

export default function App() {
  return (
    <View style={estilos.container}>
      {/* <Text style={estilos.titulo}>Título</Text> */}
      <State />
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center", //define o lugar da linha
    justifyContent: "center", //define o lugar da coluna
    marginTop: 50,
  },
  // titulo: {
  //   fontSize: 30,
  //   fontWeight: "bold",
  //   color: "red",
  // },
});
