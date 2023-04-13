import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

import { User, X } from 'phosphor-react-native'

export function NovaTurma() {
    return (
        <View>
            <Text>Nome da turma</Text>
            <Text>Adicione a galera e separe os times</Text>
            <TextInput placeholder="Nome do participante" />
            <Text>Time A | Time B</Text>

            <View>
                <Image source={User} />
                <Text>Angélica</Text>
                <Image source={X} />
            </View>
            <View>
                <Image source={User} />
                <Text>Euzilene</Text>
                <Image source={X} />
            </View>

            <TouchableOpacity>
                <Text>Remover turma</Text>
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