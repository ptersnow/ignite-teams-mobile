import { useState } from "react";

import { useNavigation } from "@react-navigation/native";

import { FlatList, StyleSheet, Text, View } from "react-native";

import { Background } from "../components/Background";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Option } from "../components/Option";
import { ItemTime } from "../components/ItemTime";
import { Header } from "../components/Header";

export function Times() {

    const navigation = useNavigation()

    const [nomeParticipante, setNomeParticipante] = useState('')
    const [optionSelected, setOptionSelected] = useState('timeA')

    const [participantes, setParticipantes] = useState({
        timeA: [
            {
                id: 0,
                nomeParticipante: 'Antenor'
            }, 
            { 
                id: 1,
                nomeParticipante: 'Beatriz'
            }
        ],
        timeB: [
            {
                id: 0,
                nomeParticipante: 'Agenor'
            }, 
            { 
                id: 1,
                nomeParticipante: 'Biagio'
            }
        ]
    })

    return (
        <Background>
            <Header
                showBackButton={true}
                title="Nome da turma"
                subtitle="Adicione a galera e separe os times"
            />
            
            <Input
                value={nomeParticipante}
                placeholder="Nome do participante"
                onChangeText={setNomeParticipante}
            />

            <View style={{ flexDirection: 'row', width: 380, gap: 10 }}>
                <Option
                    title='Time A'
                    isSelected={optionSelected == 'timeA'}
                    onPress={() => {
                        console.log(participantes[optionSelected])
                        setOptionSelected('timeA')
                    }}
                />
                <Option
                    title='Time B'
                    isSelected={optionSelected == 'timeB'}
                    onPress={() => { setOptionSelected('timeB') }}
                />
            </View>
            
            <FlatList
                data={participantes[optionSelected]}
                renderItem={({ item }) => <ItemTime nomeParticipante={item.nomeParticipante} />}
                keyExtractor={item => item.key}
            />
            
            <Button type='secondary' text='Remover Turma' onPress={() => {
                navigation.navigate('Turmas')
             }} />
        </Background>
    )
}