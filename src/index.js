import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Homescreen from "./screens/Homescreen";
import { NavigationContainer } from "@react-navigation/native";
import BuscarProduto from "./screens/BuscarProduto";
import BuscarPessoa from "./screens/BuscarPessoa";
import BuscarCarro from "./screens/BuscarCarro";
import IncluirPessoa from "./screens/IncluirPessoa";
import BuscarCor from "./screens/BuscarCor";
import BuscarFruta from "./screens/BuscarFruta";
import BuscarAnimal from "./screens/BuscarAnimal";

const Stack = createNativeStackNavigator();

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Homescreen} />
        <Stack.Screen name="BuscarCarro" component={BuscarCarro} />
        <Stack.Screen name="BuscarPessoa" component={BuscarPessoa} />
        <Stack.Screen name="BuscarProduto" component={BuscarProduto} />
        <Stack.Screen name="BuscarCor" component={BuscarCor} />
        <Stack.Screen name="BuscarFruta" component={BuscarFruta} />
        <Stack.Screen name="BuscarAnimal" component={BuscarAnimal} />
        <Stack.Screen name="IncluirPessoa" component={IncluirPessoa} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
