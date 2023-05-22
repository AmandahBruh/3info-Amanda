import { collection, getDocs, query, where } from "firebase/firestore";
import { View, FlatList } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { db } from "../config/firebase";
import { useEffect, useState } from "react";
import { styles } from "../utils/styles";

export default function BuscarFruta({ navigation }) {
  const [fruta, setfruta] = useState([]);
  const [NomeDaFruta, setNomeDaFruta] = useState("");

  async function queryCor(NomeDaFruta = null) {
    try {
      if (!NomeDaFruta) return;
      const corRef = collection(db, "cor");
      const queryCor = query(
        corRef,
        where("NomeDaFruta", ">=", NomeDaFruta),
        where("NomeDaFruta", "<=", NomeDaFruta + "\uf8ff")
      );

      const querySnapshot = await getDocs(queryFruta);
      const frutaTemp = [];
      querySnapshot.forEach((doc) => {
        corTemp.push(doc.data());
      });
      setCor(frutaTemp);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    queryCor(NomeDaFruta);
  }, [NomeDaFruta]);

  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <TextInput
        label="Nome da Fruta"
        value={NomeDaFruta}
        onChangeText={setNomeDaFruta}
      />

      <FlatList
        data={cor}
        renderItem={({ item }) => (
          <Text key={item.id}>{item.NomeDaFruta}</Text>
        )}
        // keyExtractor={(item) => item.id}
      />
    </View>
  );
}
