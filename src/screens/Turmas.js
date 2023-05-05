import { useEffect, useState } from "react";

import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { useNavigation, useRoute } from "@react-navigation/native";

import logoImage from '../assets/logo.png'
import { ItemTurma } from "../components/ItemTurma";
import { Background } from "../components/Background";
import { Button } from "../components/Button";

export function Turmas() {

    const router = useRoute()
    const navigation = useNavigation()

    const nomeTurma = router.params?.nomeTurma

    const [turmas, setTurmas] = useState([
        {
            id: 0,
            text: 'PROEJA'
        },
        {
            id: 1,
            text: 'TII'
        }
    ])

    useEffect(() => {
        if (nomeTurma) {
            setTurmas([...turmas, { id: turmas.length, text: nomeTurma }])
        }
    }, [nomeTurma])

    function handleNovaTurma() {
        navigation.navigate('NovaTurma')
    }

    return (
        <Background>
            <Image source={logoImage} style={styles.logo} />
            <Text style={styles.title}>Turmas</Text>
            <Text style={styles.subtitle}>Jogue com a sua turma</Text>
            
            <FlatList
                data={turmas}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <ItemTurma
                        data={item}
                        onPress={() => navigation.navigate('Times', {id: item.id})}
                    />
                )}
            />

            <Button type='primary' text='Criar nova turma' onPress={handleNovaTurma} />
        </Background>
    )
}

const styles = StyleSheet.create({
    logo: {
        width: 46,
        height: 55,
        marginBottom: 32
    },
    title: {
        color: '#FFFFFF',
        fontWeight: '700',
        fontSize: 24
    },
    subtitle: {
        color: '#7C7C8A',
        fontWeight: '400',
        fontSize: 16
    }
})