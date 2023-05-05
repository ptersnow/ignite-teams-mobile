import { useState } from "react";

import { FlatList, StyleSheet, Text } from "react-native";

import { Background } from "../components/Background";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Option } from "../components/Option";
import { ItemTime } from "../components/ItemTime";

export function Times() {

    const [nomeParticipante, setNomeParticipante] = useState('')
    const [optionSelected, setOptionSelected] = useState('timeA')

    return (
        <Background>
            <Text style={styles.title}>Nome da turma</Text>
            <Text style={styles.subtitle}>Adicione a galera e separe os times</Text>
            <Input 
                placeholder="Nome do participante"
                onChangeText={setNomeParticipante}
            />

            <Option
                title='Time A'
                isSelected={optionSelected == 'timeA'}
                onPress={() => { }}
            />
            <Option
                title='Time B'
                isSelected={optionSelected == 'timeB'}
                onPress={() => { }}
            />
            
            <FlatList
                data={[{ id: 0, nomeParticipante: 'a' }, { id: 1, nomeParticipante: 'b' }]}
                renderItem={({ item }) => <ItemTime nomeParticipante={item.nomeParticipante} />}
                keyExtractor={item => item.key}
            />
            
            <Button type='secondary' text='Remover Turma' onPress={() => { }} />
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
        backgroundColor: '#AA2834',
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