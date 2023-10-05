import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Screen01 from "./Screen01";
import Screen02 from "./Screen02";
import Screen03 from "./Screen03";

const Stack = createNativeStackNavigator();

const MainScreen = () => {
  return (
    <NavigationContainer>
      {/* initialRouteName fala qual tela é a inicial */}
      <Stack.Navigator initialRouteName="Screen01">
        <Stack.Screen
          name="Screen01"
          component={Screen01}
          options={{
            title: "Tela 01",
            headerStyle: {
              backgroundColor: "orange",
            },
          }}
        />
        <Stack.Screen
          name="Screen02"
          component={Screen02}
          options={{ title: "Tela 02" }}
        />
        <Stack.Screen
          name="Screen03"
          component={Screen03}
          options={{ title: "Tela 03" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainScreen;
