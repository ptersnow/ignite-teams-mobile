import { useEffect, useState } from "react";

import { FlatList } from "react-native";

import { useNavigation, useRoute } from "@react-navigation/native";

import { ItemTurma } from "../components/ItemTurma";
import { Background } from "../components/Background";
import { Button } from "../components/Button";
import { Header } from "../components/Header";

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
                        onPress={() => navigation.navigate('Times', {id: item.id})}
                    />
                )}
            />

            <Button type='primary' text='Criar nova turma' onPress={handleNovaTurma} />
        </Background>
    )
}