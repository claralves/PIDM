import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    margin: 10,
    fontSize: 22,
    fontWeight: "bold",
  },
  input: {
    height: 40,
    width: 200,
    borderColor: "black",
    borderWidth: 2,
    paddingLeft: 10,
    margin: 5,
    fontSize: 20,
    borderRadius: 25,
  },
  containerBotoes: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: 300,
    marginTop: 5,
    borderRadius: 25,
  },
});

export default estilos;
