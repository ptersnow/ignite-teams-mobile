import { useState } from "react";

import { useNavigation } from "@react-navigation/native";

import { Background } from "../components/Background";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Header } from "../components/Header";

export function NovaTurma() {

    const navigation = useNavigation()

    const [nomeTurma, setNomeTurma] = useState('')

    function handleNovaTurma() {
        navigation.navigate('Turmas', { 
            request: {
                action: 'create',
                time: {
                    id: 0,
                    nomeTurma: nomeTurma,
                    participantes: {
                        timeA: [],
                        timeB: []
                    }
                }
            }
         })
    }

    return (
        <Background>
            <Header
                showBackButton={true}
                showUsersIcon={true}
                title="Nova Turma"
                subtitle="Crie uma turma para adicionar pessoas"
                onPress={() => navigation.navigate('Turmas')}
            />
            
            <Input
                value={nomeTurma}
                placeholder="Nome da turma"
                onChangeText={setNomeTurma}
            />

            <Button type="primary" text="Criar" onPress={handleNovaTurma} />
        </Background>
    )
}