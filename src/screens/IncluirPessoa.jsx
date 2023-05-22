import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { db } from "../config/firebase";

export default function IncluirPessoa() {
  const [NomeDaFruta, setNomeDaFruta] = useState("");

  /**
   * Create a funcion to inser a person inside Firestore
   *
   */
  async function inserirPessoa() {
    try {
      const frutaRef = collection(db, "fruta");
      const payload = {
        NomeDaFruta: NomeDaFruta,
      };
      const fruta = await addDoc(frutaRef, payload);
      console.log(fruta);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View>
      <Text>Vamos inserir alguém bem bonite!</Text>
      <TextInput label="NomeDaFruta" value={NomeDaFruta} onChangeText={setNomeDaFruta} />
      <Button onPress={inserirPessoa}>Inserir esta bela pessoa!</Button>
    </View>
  );
}


/*import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { db } from "../config/firebase";

export default function IncluirPessoa() {
  const [Nome, setNome] = useState("");

  /**
   * Create a funcion to inser a person inside Firestore
   *
   */ /*<--->/*
  async function inserirPessoa() {
    try {
      const pessoaRef = collection(db, "Pessoa");
      const payload = {
        Nome: Nome,
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
      <TextInput label="Nome" value={Nome} onChangeText={setNome} />
      <Button onPress={inserirPessoa}>Inserir esta bela pessoa!</Button>
    </View>
  );
}*/

