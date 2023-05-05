import { StyleSheet, TextInput } from "react-native";

export function Input({ placeholder, onChangeText}) {
    return (
        <TextInput
            style={styles.input}
            placeholderTextColor='#7C7C8A'
            placeholder={placeholder}
            onChangeText={onChangeText}
        />
    )
}

const styles = StyleSheet.create({
    input: {
        width: 380,
        height: 56,
        padding: 16,
        borderRadius: 6,
        color: '#C4C4CC',
        backgroundColor: '#121214',
    }
})