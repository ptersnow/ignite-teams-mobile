import { StyleSheet, View } from "react-native"

export function Background({ children }) {
    return (
        <View style={styles.background}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#202024'
    }
})