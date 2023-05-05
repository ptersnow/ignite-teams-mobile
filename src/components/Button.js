import { StyleSheet, Text, TouchableOpacity } from "react-native";

export function Button({ type, text, onPress}) {
    return (
        <TouchableOpacity
            style={[
                styles.button,
                type === 'primary' ? styles.primary : styles.secondary
            ]}
            onPress={onPress}
        >
            <Text style={styles.buttontext}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 6,
        width: 380,
        height: 56,
        marginBottom: 42,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttontext: {
        fontSize: 16,
        color: '#FFFFFF',
        fontWeight: '700',
    },
    primary: {
        backgroundColor: '#00875F',
    },
    secondary: {
        backgroundColor: '#AA2834',
    }
})