import { collection, getDocs, query, where } from "firebase/firestore";
import { View, FlatList } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { db } from "../config/firebase";
import { useEffect, useState } from "react";
import { styles } from "../utils/styles";

export default function BuscarFruta({ navigation }) {
  const [fruta, setFruta] = useState([]);
  const [NomeDaFruta, setNomeDaFruta] = useState("");

  async function queryFruta(NomeDaFruta = null) {
    try {
      if (!NomeDaFruta) return;
      const frutaRef = collection(db, "fruta");
      const queryFruta = query(
        frutaRef,
        where("NomeDaFruta", ">=", NomeDaFruta),
        where("NomeDaFruta", "<=", NomeDaFruta + "\uf8ff")
      );

      const querySnapshot = await getDocs(queryFruta);
      const frutaTemp = [];
      querySnapshot.forEach((doc) => {
        frutaTemp.push(doc.data());
      });
      setFruta(frutaTemp);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    queryFruta(NomeDaFruta);
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
        data={fruta}
        renderItem={({ item }) => (
          <Text key={item.id}>{item.NomeDaFruta}</Text>
        )}
        // keyExtractor={(item) => item.id}
      />
    </View>
  );
}
