import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { propsStack } from "../../routes/stack/models";
import { styles } from "./style";

type ButtonProps = TouchableOpacityProps & {
    text: string,
    pageName?: string  ,
    
}

export function Button({pageName,text,...rest}: ButtonProps){
    const Navegation = useNavigation<propsStack>();
    return(
        <TouchableOpacity  style={styles.button}{...rest}
        onPress={()=>Navegation.navigate(pageName)}>
            <Text style={styles.textButon}>
                {text}
            </Text>
        </TouchableOpacity>
    );
}