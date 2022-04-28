import React from "react";
import { StyleSheet, Text, View } from "react-native";

export function Search(){
    return(
        <View style={styles.content}>
            <Text style={styles.message}>
                you arrived in
            </Text>
            <Text style={styles.boldMessage}>
                Search Page
            </Text>
        </View>
    )
    
}
const styles= StyleSheet.create({
    content:{
        flex: 1,
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
    }
})
