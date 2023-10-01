import { NavegationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native";

const NativeStack = createNativeStackNavigator();

const PokemonApp = () => {
  return (
    <NavigationContainer>
      {/* telas principais */}
      <NativeStack.Group></NativeStack.Group>

      <NativeStack.Group></NativeStack.Group>
    </NavigationContainer>
  );
};
