import { Plus } from "phosphor-react-native";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";

export function Input({ value, placeholder, onChangeText, onPress }) {
    return (
        <View style={styles.container}>
            <TextInput
                value={value}
                style={styles.input}
                placeholderTextColor='#7C7C8A'
                placeholder={placeholder}
                onChangeText={onChangeText}
            />

            { onPress &&
                <TouchableOpacity style={styles.button} onPress={onPress}>
                    <Plus size={24} color="#04D361" weight="regular" />
                </TouchableOpacity>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 380,
        height: 56,
        
        borderRadius: 6,
        flexDirection: 'row',
        backgroundColor: '#121214',

        paddingHorizontal: 12,
        paddingVertical: 12,

        alignItems: 'center',
        justifyContent: 'space-between'

    },
    input: {
        flex: 4,
        height: 56,
        padding: 16,
        
        color: '#C4C4CC',
    },
    button: {
        flex: 1,
        height: 56
    }
})