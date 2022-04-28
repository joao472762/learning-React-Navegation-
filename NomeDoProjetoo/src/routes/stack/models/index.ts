import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type propsNavegationStack = {
    Home: undefined,
    Search:{
        name: string,
    },
    SignIn: undefined,
    pageName?: {

    }
   
}

export type propsStack = NativeStackNavigationProp<propsNavegationStack>