import { View } from "react-native";
import {Text } from "react-native-paper";
import { Button } from "react-native-paper";

export default function HomeScreen({ navigation }) {
  return (
    <View>
      <Text>Bem Vindo a Home</Text>
      <Button
        mode="contained"
        onPress={() => {
          navigation.navigate("BuscarFruta");
        }}
      >
        Fruta
      </Button>
      <Button
        mode="contained"
        onPress={() => {
          navigation.navigate("BuscarPessoa");
        }}
      >
        Pessoa
      </Button>
      <Button
        mode="contained"
        onPress={() => {
          navigation.navigate("BuscarAnimal");
        }}
      >
        Animal
      </Button>
      <Button
        mode="contained"
        onPress={() => {
          navigation.navigate("BuscarCarro");
        }}
      >
        Carro
      </Button>
      <Button
        mode="contained"
        onPress={() => {
          navigation.navigate("BuscarCor");
        }}
      >
        Cor
      </Button>
      <Button
        mode="contained"
        onPress={() => {
          navigation.navigate("BuscarProduto");
        }}
      >
        Produto
      </Button>
      <Button
        mode="contained"
        onPress={() => {
          navigation.navigate("IncluirPessoa");
        }}
      >
        Incluir Pessoa
      </Button>
    </View>
  );
}