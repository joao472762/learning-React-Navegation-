import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native"; 

export function Home(){
    return(
        <View style={styles.content}>
            <Text style={styles.message}>
                you arrived in 
            </Text>
            <Text style={styles.boldMessage}>
                Home Page
            </Text>
            <TouchableOpacity
            >
                click here
            </TouchableOpacity>
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
