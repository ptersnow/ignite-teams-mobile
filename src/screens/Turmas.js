import { useEffect, useState } from "react";

import { FlatList } from "react-native";

import { useNavigation, useRoute } from "@react-navigation/native";

import { Header } from "../components/Header";
import { Button } from "../components/Button";
import { ItemTurma } from "../components/ItemTurma";
import { Background } from "../components/Background";
import { EmptyTurmasList } from "../components/EmptyTurmasList";

export function Turmas() {

    const router = useRoute()
    const navigation = useNavigation()

    const request = router.params?.request

    const [turmas, setTurmas] = useState([
        {
            id: 0,
            nomeTurma: 'PROEJA',
            participantes: {
                timeA: [],
                timeB: []
            }
        },
        {
            id: 1,
            nomeTurma: 'TII',
            participantes: {
                timeA: [],
                timeB: []
            }
        }
    ])

    useEffect(() => {
        if (!request) {
            return
        }

        const { action, time } = request

        if (action == 'create') {
            const novoTime = {
                id: turmas.length,
                nomeTurma: time.nomeTurma,
                participantes: {
                    timeA: [],
                    timeB: []
                }
            }

            setTurmas([...turmas, novoTime])
        }
        else if (action == 'update') {
            const index = turmas.findIndex(turma => turma.id == time.id)
            turmas[index] = time
            setTurmas([...turmas])
        }
        else if (action == 'delete') {
            const index = turmas.findIndex(turma => turma.id == time.id)
            turmas.splice(index, 1)
            setTurmas([...turmas])
        }
        
    }, [request])

    function handleNovaTurma() {
        navigation.navigate('NovaTurma')
    }

    return (
        <Background>
            <Header
                showLogo={true}
                title="Turmas"
                subtitle="Jogue com a sua turma"
            />

            <FlatList
                data={turmas}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <ItemTurma
                        data={item}
                        onPress={() => navigation.navigate('Times', {time: item})}
                    />
                )}
                ListEmptyComponent={() => <EmptyTurmasList />}
            />

            <Button type='primary' text='Criar nova turma' onPress={handleNovaTurma} />
        </Background>
    )
}