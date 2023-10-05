import { View, ScrollView, Text, SectionList } from "react-native";
import { PaperProvider, IconButton, MD3Colors } from "react-native-paper";
import estilos from "./estilos";
import dados from "./Dados";

const Questao01 = ({ navigation }) => {
  return (
    <PaperProvider>
      <ScrollView style={estilos.fundo}>
        <SectionList
          sections={dados}
          keyExtractor={(item) => item.nome}
          renderItem={({ item, section }) => {
            return (
              <View style={estilos.container}>
                <View style={{ flex: 1, flexDirection: "row" }}>
                  <IconButton
                    icon={item.icon}
                    iconColor={"white"}
                    size={30}
                    onPress={() =>
                      navigation.navigate("Questao02", {
                        selectedTitle: section.title,
                        item,
                      })
                    }
                    mode="contained"
                  />
                  <View>
                    <Text style={estilos.textoNome}>{item.nome}</Text>
                    <Text style={estilos.textoHora}>Hora: {item.hora}</Text>
                  </View>
                </View>
                <Text style={estilos.textoValor}>Valor: {item.valor}</Text>
              </View>
            );
          }}
          renderSectionHeader={({ section }) => {
            return <Text style={estilos.titulo}>{section.title}</Text>;
          }}
        />
      </ScrollView>
    </PaperProvider>
  );
};

export default Questao01;
