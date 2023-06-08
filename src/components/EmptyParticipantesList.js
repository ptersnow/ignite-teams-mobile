import { StyleSheet, Text, View } from "react-native";

export function EmptyParticipantesList() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Nenhum participante adicionado</Text>
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
    text: {
        fontSize: 16,
        color: '#C4C4CC'
    }
})