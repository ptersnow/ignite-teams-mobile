import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { User, X } from "phosphor-react-native";

export function ItemTime({ nomeParticipante, onPress }) {
    return (
        <View style={styles.container}>
            <View style={styles.subcontainer}>
                <User size={24} color="#C4C4CC" weight="fill"/>
                <Text style={styles.text}>{nomeParticipante}</Text>
            </View>
            <TouchableOpacity onPress={onPress}>
                <X size={24} color="#CC2937" weight="regular" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 380,
        height: 54,
        marginVertical: 7,
        flexDirection: 'row',
        backgroundColor: '#29292E',

        paddingHorizontal: 12,
        paddingVertical: 12,

        alignItems: 'center',
        justifyContent: 'space-between'

    },
    subcontainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12
    },
    text: {
        fontSize: 16,
        color: '#C4C4CC'
    }
})