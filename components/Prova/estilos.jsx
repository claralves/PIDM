import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 8,
    margin: 5,
    borderBottomWidth: 1,
    borderColor: "grey",
  },
  fundo: {
    backgroundColor: "black",
  },
  titulo: {
    fontSize: 18,
    fontWeight: "bold",
    paddingLeft: 20,
    color: "lightgrey",
  },
  textoValor: {
    fontSize: 15,
    textAlign: "right",
    color: "white",
    fontWeight: "bold",
  },
  textoHora: {
    fontSize: 15,
    color: "lightgrey",
  },
  textoNome: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
});

export default estilos;
