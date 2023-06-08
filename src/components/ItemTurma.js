import { StyleSheet, Text, TouchableOpacity } from "react-native";

import { UsersThree } from "phosphor-react-native";

export function ItemTurma({ data, onPress }) {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <UsersThree color='#00B37E' size={32} weight="fill" />
            <Text style={styles.text}>{data.nomeTurma}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 380,
        height: 96,
        marginVertical: 12,
        flexDirection: 'row',
        backgroundColor: '#29292E',
        paddingHorizontal: 24,
        paddingVertical: 32,
        gap: 20
        
    },
    text: {
        fontSize: 16,
        color: '#E1E1E6'
    }
})