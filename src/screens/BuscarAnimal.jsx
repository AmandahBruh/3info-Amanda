import { collection, getDocs, query, where } from "firebase/firestore";
import { View, FlatList } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { db } from "../config/firebase";
import { useEffect, useState } from "react";
import { styles } from "../utils/styles";

export default function BuscarAnimal() {
  const [animal, setAnimal] = useState([]);
  const [NomeDoAnimal, setNomeDoAnimal] = useState("");

  async function queryAnimal(NomeDoAnimal = null) {
    try {
      if (!NomeDoAnimal) return;
      const animalRef = collection(db, "animal");
      const queryAnimal = query(
        animalRef,
        where("NomeDoAnimal", ">=", NomeDoAnimal),
        // utilizado para fazer a busca levando em consideração o final da string
        where("NomeDoAnimal", "<=", NomeDoAnimal + "\uf8ff")
        // \uf8ff é utlizado  para indicar o final da string

      );

      const querySnapshot = await getDocs(queryAnimal);
      const animalTemp = [];
      querySnapshot.forEach((doc) => {
        animalTemp.push(doc.data());
      });
      setAnimal(animalTemp);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    queryAnimal(NomeDoAnimal);
  }, [NomeDoAnimal]);

  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <TextInput
        label="Nome do Animal"
        value={NomeDoAnimal}
        onChangeText={setNomeDoAnimal}
      />

      <FlatList
        data={animal}
        renderItem={({ item }) => (
          <Text key={item.id}>{item.NomeDoAnimal}</Text>
        )}
        // keyExtractor={(item) => item.id}
      />
    </View>
  );
}
