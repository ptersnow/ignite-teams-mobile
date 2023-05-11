import { Pressable, StyleSheet, Text } from "react-native";

export function Option({ title, isSelected, onPress }) {
    return (
        <Pressable style={[
                styles.container,
                isSelected && { borderColor: '#00B37E', borderWidth: 1 }
            ]}
            onPress={onPress}
        >
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 80,
        height: 40,
        borderRadius: 4,
        paddingVertical: 8,
        paddingHorizontal: 12,
    },
    text: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#FFFFFF',
    }
})