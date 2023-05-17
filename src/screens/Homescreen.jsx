import { collection, getDocs, query, where } from "firebase/firestore";
import { View } from "react-native";
import { Text } from "react-native-paper";
import { db } from "../config/firebase";
import { useState } from "react";

export default function Homescreen() {
    const[produtos, setProdutos] = useState([]);

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
        </View>
    )
}