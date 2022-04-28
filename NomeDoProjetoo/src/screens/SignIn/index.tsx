import { useNavigation } from "@react-navigation/native";
import React from "react";
import {  StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Button } from "../../components/Button";

export function SignIn(){
    const Navegate = useNavigation();
    
    
    return(
      
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.message}>
                    you arrived in
                </Text>
                <Text style={styles.boldMessage}>
                    SignIn Page
                </Text>
            </View>
                <Button text="go to Home" activeOpacity={.7} pageName="Home"/>
                <Button text="go to Search" activeOpacity={.7} pageName="Search"/>
        </View>
    )
    
}
const styles= StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#920232",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
    },
    content:{
        marginBottom: 30,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#920232",
        textAlign: "center",
        flexDirection: "row",
        
    },
    message: {
        marginRight: 8,
        color: "white",
        fontSize: 24,
        
        
    },
    boldMessage: {
        borderBottomColor: "#fff",
        color: "white",
        fontSize: 24,
        borderBottomWidth:1,
        fontWeight: "bold",
    },
    
})
