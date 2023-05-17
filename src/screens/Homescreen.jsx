import { collection, getDocs, query, where } from "firebase/firestore";
import { View, FlatList } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { db } from "../config/firebase";
import { useState } from "react";

export default function Homescreen() {
    const[produtos, setProdutos] = useState([]);
    const [nomeDoProduto, setNomeDoProduto] = useState("");
    const [precoDoProduto, setPrecoDoProduto] = useState("");
    const [quantidadeDoProduto, setQuantidadeDoProduto] = useState("");

    async function queryProdutos(nomeDoProduto = null ){
        try{
            const produtosRef = collection(db, "produto");
            const queryProdutos = query(produtosRef, where("NomeDoProduto"  , "==", "abacaxi"));


            const querySnapshot = await getDocs(query);
        } catch(error) {
            console.log(error);
        }     
    }
    




    return(
        <View>
            <Text>Home</Text>
            <TextInput
                label="Nome do Produto"
                value={nomeDoProduto}
                onChangeText={setNomeDoProduto} />

            <FlatList
                data={produtos}
                renderItem={({ item }) => <Text>{item.NomeDoProduto}</Text>}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}