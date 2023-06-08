import { useState } from "react";

import { useNavigation, useRoute } from "@react-navigation/native";

import { FlatList, Text, View } from "react-native";

import { Background } from "../components/Background";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Option } from "../components/Option";
import { ItemTime } from "../components/ItemTime";
import { Header } from "../components/Header";
import { EmptyParticipantesList } from "../components/EmptyParticipantesList";

export function Times() {

    const navigation = useNavigation()
    const router = useRoute()

    const time = router.params?.time

    const [nomeParticipante, setNomeParticipante] = useState('')
    const [optionSelected, setOptionSelected] = useState('timeA')

    const [participantes, setParticipantes] = useState(time['participantes'])

    function handleAddParticipante() {
        if (nomeParticipante.trim() == '') {
            return
        }

        const novoParticipante = {
            id: participantes[optionSelected].length,
            nomeParticipante: nomeParticipante
        }

        setParticipantes({
            ...participantes,
            [optionSelected]: [...participantes[optionSelected], novoParticipante]
        })

        setNomeParticipante('')
    }

    function goBack() {
        navigation.navigate('Turmas', {
            request: {
                action: 'update',
                time: {
                    id: time.id,
                    nomeTurma: time.nomeTurma,
                    participantes: participantes
                }
            }
        })
    }

    function handleRemoveParticipante(id) {
        var novoTime = participantes[optionSelected].filter(participante => participante.id != id)

        setParticipantes({
            ...participantes,
            [optionSelected]: novoTime
        })  
    }

    function handleRemoveTurma() {
        navigation.navigate('Turmas', {
            request: {
                action: 'delete',
                time: {
                    id: time.id,
                    nomeTurma: time.nomeTurma,
                    participantes: participantes
                }
            }
        })
    }

    return (
        <Background>
            <Header
                showBackButton={true}
                title={time.nomeTurma}
                subtitle="Adicione a galera e separe os times"
                onPress={goBack}
            />
            
            <Input
                value={nomeParticipante}
                placeholder="Nome do participante"
                onChangeText={setNomeParticipante}
                onPress={handleAddParticipante}
            />

            <View style={{ flexDirection: 'row', width: 380, gap: 10, marginTop: 12 }}>
                <Option
                    title='Time A'
                    isSelected={optionSelected == 'timeA'}
                    onPress={() => { setOptionSelected('timeA') }}
                />
                <Option
                    title='Time B'
                    isSelected={optionSelected == 'timeB'}
                    onPress={() => { setOptionSelected('timeB') }}
                />

                <Text style={{ color: '#C4C4CC', fontSize: 16, marginTop: 12 }}>{participantes[optionSelected].length}</Text>
            </View>
            
            <FlatList
                data={participantes[optionSelected]}
                renderItem={({ item }) => <ItemTime nomeParticipante={item.nomeParticipante} onPress={() => handleRemoveParticipante(item.id)} />}
                keyExtractor={item => item.key}
                ListEmptyComponent={() => <EmptyParticipantesList />}
            />
            
            <Button type='secondary' text='Remover Turma' onPress={handleRemoveTurma} />
        </Background>
    )
}
