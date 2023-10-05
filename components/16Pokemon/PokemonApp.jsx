import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PokedexScreen from "./PokedexScreen";
import PokemonModalScreen from "./PokemonModalScreen";

const NativeStack = createNativeStackNavigator();

const PokemonApp = () => {
  return (
    <NavigationContainer>
      <NativeStack.Navigator>
        {/* //grupo de telas principais */}
        <NativeStack.Group>
          <NativeStack.Screen name="Pokedex" component={PokedexScreen} />
        </NativeStack.Group>
        {/* //grupo de telas moldais */}
        {/* //presentation recebe uma string e define que essa tela é um modal */}
        <NativeStack.Group screenOptions={{ presentation: "modal" }}>
          <NativeStack.Screen
            name="PokemonModal"
            component={PokemonModalScreen}
          />
        </NativeStack.Group>
      </NativeStack.Navigator>
    </NavigationContainer>
  );
};

export default PokemonApp;
