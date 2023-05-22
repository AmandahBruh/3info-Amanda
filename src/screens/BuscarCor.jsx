import { collection, getDocs, query, where } from "firebase/firestore";
import { View, FlatList } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { db } from "../config/firebase";
import { useEffect, useState } from "react";
import { styles } from "../utils/styles";

export default function BuscarCor() {
  const [cor, setCor] = useState([]);
  const [NomeDaCor, setNomeDaCor] = useState("");

  async function queryCor(NomeDaCor = null) {
    try {
      if (!NomeDaCor) return;
      const corRef = collection(db, "cor");
      const queryCor = query(
        corRef,
        where("NomeDaCor", ">=", NomeDaCor),
        where("NomeDaCor", "<=", NomeDaCor + "\uf8ff")
      );

      const querySnapshot = await getDocs(queryCor);
      const corTemp = [];
      querySnapshot.forEach((doc) => {
        corTemp.push(doc.data());
      });
      setCor(corTemp);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    queryCor(NomeDaCor);
  }, [NomeDaCor]);

  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <TextInput
        label="Nome da Cor"
        value={NomeDaCor}
        onChangeText={setNomeDaCor}
      />

      <FlatList
        data={cor}
        renderItem={({ item }) => (
          <Text key={item.id}>{item.NomeDaCor}</Text>
        )}
        // keyExtractor={(item) => item.id}
      />
    </View>
  );
}
