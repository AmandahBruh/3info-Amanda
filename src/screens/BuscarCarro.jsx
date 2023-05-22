import { collection, getDocs, query, where } from "firebase/firestore";
import { View, FlatList } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { db } from "../config/firebase";
import { useEffect, useState } from "react";
import { styles } from "../utils/styles";

export default function BuscarCarro() {
  const [carro, setCarro] = useState([]);
  const [NomeDoCarro, setNomeDoCarro] = useState("");

  async function queryCarro(NomeDoCarro = null) {
    try {
      if (!NomeDoCarro) return;
      const carroRef = collection(db, "carro");
      const queryCarro = query(
        carroRef,
        where("NomeDoCarro", ">=", NomeDoCarro),
        where("NomeDoCarro", "<=", NomeDoCarro + "\uf8ff")
      );

      const querySnapshot = await getDocs(queryCarro);
      const carroTemp = [];
      querySnapshot.forEach((doc) => {
        carroTemp.push(doc.data());
      });
      setCarro(carroTemp);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    queryCarro(NomeDoCarro);
  }, [NomeDoCarro]);

  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <TextInput
        label="Nome do Carro"
        value={NomeDoCarro}
        onChangeText={setNomeDoCarro}
      />

      <FlatList
        data={carro}
        renderItem={({ item }) => (
          <Text key={item.id}>{item.NomeDoCarro}</Text>
        )}
        // keyExtractor={(item) => item.id}
      />
    </View>
  );
}
