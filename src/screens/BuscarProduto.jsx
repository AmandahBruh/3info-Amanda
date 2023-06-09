import { collection, getDocs, query, where } from "firebase/firestore";
import { View, FlatList } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { db } from "../config/firebase";
import { useEffect, useState } from "react";
import { styles } from "../utils/styles";

export default function BuscarProduto() {
  const [produto, setProduto] = useState([]);
  const [NomeDoProduto, setNomeDoProduto] = useState("");

  async function queryProduto(NomeDoProduto = null) {
    try {
      if (!NomeDoProduto) return;
      const produtoRef = collection(db, "produto");
      const queryProduto = query(
        produtoRef,
        where("NomeDoProduto", ">=", NomeDoProduto),
        where("NomeDoProduto", "<=", NomeDoProduto + "\uf8ff")
      );

      const querySnapshot = await getDocs(queryProduto);
      const produtoTemp = [];
      querySnapshot.forEach((doc) => {
        produtoTemp.push(doc.data());
      });
      setProduto(produtoTemp);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    queryProduto(NomeDoProduto);
  }, [NomeDoProduto]);

  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <TextInput
        label="Nome do Produto"
        value={NomeDoProduto}
        onChangeText={setNomeDoProduto}
      />

      <FlatList
        data={produto}
        renderItem={({ item }) => (
          <Text key={item.id}>{item.NomeDoProduto}</Text>
        )}
        // keyExtractor={(item) => item.id}
      />
    </View>
  );
}
