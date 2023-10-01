import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 30,
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    color: "navy",
  },
  description: {
    fontSize: 15,
    color: "black",
    textAlign: "center",
  },
  description_view: {
    padding: 10,
    margin: 10,
    backgroundColor: "powderblue",
    borderColor: "steelblue",
    borderWidth: 2,
    borderRadius: 15,
  },
  flatlist: { width: "100%", padding: 5 },
  card: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "steelblue",
    margin: 5,
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "steelblue",
    borderRadius: 15,
  },
  movie: {
    flex: 1,
    backgroundColor: "aliceblue",
    alignItems: "center",
    justifyContent: "center",
    borderBottomRightRadius: 15,
    borderTopRightRadius: 15,
  },
});

export default estilos;
