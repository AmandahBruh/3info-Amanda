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
    
    async function queryProdutos(precoDoProduto = null ){
        try{
            const produtosRef = collection(db, "produto");
            const queryProdutos = query(produtosRef, where("PrecoDoProduto"  , "==", "2,00"));


            const querySnapshot = await getDocs(query);
        } catch(error) {
            console.log(error);
        }     
    }

    async function queryProdutos(quantidadeDoProduto = null ){
        try{
            const produtosRef = collection(db, "produto");
            const queryProdutos = query(produtosRef, where("QuantidadeDoProduto"  , "==", "3"));


            const querySnapshot = await getDocs(query);
        } catch(error) {
            console.log(error);
        }     
    }
    
    function CadastrarProduto(){

    };



    return(
        <View>
            <Text>Home</Text>
            <TextInput
                label="Nome do Produto"
                value={nomeDoProduto}
                onChangeText={setNomeDoProduto}
            />
            <TextInput
                label="Preço do Produto"
                value={precoDoProduto}
                onChangeText={setPrecoDoProduto}
            />
            <TextInput
                label="Quantidade do Produto"
                value={quantidadeDoProduto}
                onChangeText={setQuantidadeDoProduto}
            />

            <Button onPress={CadastrarProduto}>aaaaaaaaaaaaaa</Button>

            <FlatList
                data={produtos}
                renderItem={({ item }) => <Text>{item.NomeDoProduto}</Text>}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}