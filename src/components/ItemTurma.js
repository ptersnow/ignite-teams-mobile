import { StyleSheet, Text, TouchableOpacity } from "react-native";

import { UsersThree } from "phosphor-react-native";

export function ItemTurma({ data, onPress }) {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <UsersThree color='#00B37E' size={32} weight="fill" />
            <Text style={styles.text}>{data.text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 380,
        height: 96,
        flexDirection: 'row',
        backgroundColor: '#29292E'
    },
    text: {
        fontSize: 16,
        color: '#E1E1E6'
    }
})