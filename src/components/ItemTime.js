import { StyleSheet, Text, View } from "react-native";

import { User, X } from "phosphor-react-native";

export function ItemTime({ nomeParticipante }) {
    return (
        <View>
            <User />
            <Text>{nomeParticipante}</Text>
            <X />
        </View>
    )
}

const styles = StyleSheet.create({
})