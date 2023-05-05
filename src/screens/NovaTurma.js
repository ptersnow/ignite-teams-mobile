import { useState } from "react";

import { StyleSheet, Text } from "react-native";

import { useNavigation } from "@react-navigation/native";

import { UsersThree } from 'phosphor-react-native'

import { Background } from "../components/Background";
import { Button } from "../components/Button";

export function NovaTurma() {

    const navigation = useNavigation()

    const [nomeTurma, setNomeTurma] = useState('')

    function handleNovaTurma() {
        navigation.navigate('Turmas', { nomeTurma: nomeTurma })
    }

    return (
        <Background>
            <UsersThree color='#00B37E' size={56} weight="regular" />
            <Text style={styles.title}>Nova Turma</Text>
            <Text style={styles.subtitle}>Crie uma turma para adicionar pessoas</Text>
            <Input 
                placeholder="Nome da turma"
                onChangeText={setNomeTurma}
            />

            <Button type="primary" text="Criar" onPress={handleNovaTurma} />
        </Background>
    )
}

const styles = StyleSheet.create({
    title: {
        color: '#FFFFFF',
        fontWeight: '700',
        fontSize: 24
    },
    subtitle: {
        color: '#7C7C8A',
        fontWeight: '400',
        fontSize: 16
    },
    input: {
        backgroundColor: '#121214',
        width: 380,
        height: 56
    },
    button: {
        backgroundColor: '#00875F',
        borderRadius: 6,
        width: 380,
        height: 56,
        marginBottom: 42,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttontext: {
        color: '#FFFFFF',
        fontWeight: '700',
        fontSize: 16
    }
})