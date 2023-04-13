import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

import { UsersThree } from 'phosphor-react-native'

export function Times() {
    return (
        <View style={styles.container}>
            <Image source={UsersThree} />
            <Text>Nova Turma</Text>
            <Text>Crie uma turma para adicionar pessoas</Text>
            <TextInput placeholder="Nome da turma" />
            <TouchableOpacity>
                <Text>Criar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#29292E'
    },
})