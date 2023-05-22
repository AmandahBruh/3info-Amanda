import { collection, getDocs, query, where } from "firebase/firestore";
import { View, FlatList } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { db } from "../config/firebase";
import { useEffect, useState } from "react";
import { styles } from "../utils/styles";

export default function BuscarPessoa() {
  const [pessoa, setPessoa] = useState([]);
  const [NomeDaPessoa, setNomeDaPessoa] = useState("");

  async function queryPessoa(NomeDaPessoa = null) {
    try {
      if (!NomeDaPessoa) return;
      const pessoaRef = collection(db, "Pessoa");
      const queryPessoa = query(
        pessoaRef,
        where("NomeDaPessoa", ">=", NomeDaPessoa),
        where("NomeDaPessoa", "<=", NomeDaPessoa + "\uf8ff")
      );

      const querySnapshot = await getDocs(queryPessoa);
      const pessoaTemp = [];
      querySnapshot.forEach((doc) => {
        pessoaTemp.push(doc.data());
      });
      setPessoa(pessoaTemp);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    queryPessoa(NomeDaPessoa);
  }, [NomeDaPessoa]);

  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <TextInput
        label="Nome da Pessoa"
        value={NomeDaPessoa}
        onChangeText={setNomeDaPessoa}
      />

      <FlatList
        data={pessoa}
        renderItem={({ item }) => (
          <Text key={item.id}>{item.NomeDaPessoa}</Text>
        )}
        // keyExtractor={(item) => item.id}
      />
    </View>
  );
}
