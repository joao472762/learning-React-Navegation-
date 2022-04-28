import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../../screens/Home";
import { SignIn } from "../../screens/SignIn";
import { Search } from "../../screens/Search";
import { propsNavegationStack } from "./models";

const {Navigator, Screen} = createNativeStackNavigator<propsNavegationStack>();

export function StackRoutes(){
    return(
        <Navigator
        initialRouteName="SignIn"
        screenOptions={{
            headerShown: false
        }}
        >
            <Screen
            name="SignIn"
            component={SignIn}/>
            <Screen
            name="Home"
            component={Home}
            />
            <Screen
            name="Search"
            component={Search}/>
        </Navigator>
    );
}