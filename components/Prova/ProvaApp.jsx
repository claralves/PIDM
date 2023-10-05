import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Questao01 from "./Questao01";
import Questao02 from "./Questao02";

const NativeStack = createNativeStackNavigator();

const ProvaApp = () => {
  return (
    <NavigationContainer>
      <NativeStack.Navigator>
        {/* Tela principal */}
        <NativeStack.Group>
          <NativeStack.Screen name="Questao01" component={Questao01} />
        </NativeStack.Group>

        {/* Tela modal */}
        <NativeStack.Group screenOptions={{ presentation: "modal" }}>
          <NativeStack.Screen name="Questao02" component={Questao02} />
        </NativeStack.Group>
      </NativeStack.Navigator>
    </NavigationContainer>
  );
};

export default ProvaApp;
