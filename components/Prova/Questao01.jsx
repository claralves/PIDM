import { View, ScrollView, Text, SectionList } from "react-native";
import { PaperProvider, IconButton, MD3Colors } from "react-native-paper";
import dados from "./Dados";

const Questao01 = ({ navigation }) => {
  return (
    <PaperProvider>
      <ScrollView>
        <SectionList
          sections={dados}
          keyExtractor={(item) => item.nome}
          renderItem={({ item, section }) => {
            return (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingHorizontal: 16,
                  paddingVertical: 8,
                }}
              >
                <View style={{ flex: 1, flexDirection: "row" }}>
                  <IconButton
                    icon="cart"
                    iconColor={MD3Colors.tertiary0}
                    size={30}
                    onPress={() =>
                      navigation.navigate("Questao02", {
                        selectedTitle: section.title,
                      })
                    }
                    mode="contained"
                  />
                  <View>
                    <Text style={{ fontSize: 18 }}>{item.nome}</Text>
                    <Text style={{ fontSize: 15 }}>Hora: {item.hora}</Text>
                  </View>
                </View>
                <Text style={{ fontSize: 15, textAlign: "right" }}>
                  Valor: {item.valor}
                </Text>
              </View>
            );
          }}
          renderSectionHeader={({ section }) => {
            return (
              <Text style={{ fontSize: 25, fontWeight: "bold" }}>
                {section.title}
              </Text>
            );
          }}
        />
      </ScrollView>
    </PaperProvider>
  );
};

export default Questao01;
