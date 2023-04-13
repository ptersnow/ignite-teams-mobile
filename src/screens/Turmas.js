import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { UsersThree } from 'phosphor-react-native'

import logoImage from '../assets/logo.png'

export function Turmas() {

    const navigation = useNavigation()

    function handleNovaTurma() {
        navigation.navigate('NovaTurma')
    }

    function handleAbrirTurma() {
        navigation.navigate('Times')
    }

    return (
        <View style={styles.container}>
            <Image source={logoImage} style={styles.logo} />
            <Text style={styles.title}>Turmas</Text>
            <Text style={styles.subtitle}>Jogue com a sua turma</Text>
            <TouchableOpacity onPress={handleAbrirTurma}>
                <Image source={UsersThree} />
                <Text>PROEJA</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={handleNovaTurma}>
                <Text style={styles.buttontext}>Criar nova turma</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#29292E',
        paddingTop: 58
    },
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