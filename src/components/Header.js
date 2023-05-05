import { View } from "react-native";

import { useNavigation } from "@react-navigation/native";

import { CaretLeft } from "phosphor-react-native";

export function Header() {

    const navigation = useNavigation()

    return (
        <View>
            <CaretLeft color="#FFFFFF" size={24} onPress={() => navigation.goBack()} />
        </View>
    )
}