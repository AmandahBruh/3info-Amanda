import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { db } from "../config/firebase";

export default function IncluirPessoa() {
  const [NomeDaPessoa, setNomeDaPessoa] = useState("");

  /**
   * Create a funcion to inser a person inside Firestore
   *
   */
  async function inserirPessoa() {
    try {
      const pessoaRef = collection(db, "Pessoa");
      const payload = {
        NomeDaPessoa: NomeDaPessoa,
      };
      const pessoa = await addDoc(pessoaRef, payload);
      console.log(pessoa);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View>
      <Text>Vamos inserir alguém bem bonite!</Text>
      <TextInput label="NomeDaPessoa" value={NomeDaPessoa} onChangeText={setNomeDaPessoa} />
      <Button onPress={inserirPessoa}>Inserir esta bela pessoa!</Button>
    </View>
  );
}

