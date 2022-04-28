import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export function SignIn(){
    const Navegate = useNavigation();
    
    return(

        <View style={styles.content}>
            <Text style={styles.message}>
                you arrived in 
            </Text>
            <Text style={styles.boldMessage}>
                SignIn Page
            </Text>
            <TouchableOpacity onPress={()=> Navegate.navigate('Search')}
            >
                <Text>
                    click here
                </Text>
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
