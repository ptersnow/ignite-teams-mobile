import { Image, StyleSheet, Text, View } from "react-native";

import { useNavigation } from "@react-navigation/native";

import { CaretLeft, UsersThree } from "phosphor-react-native";

import logoImage from '../assets/logo.png'

export function Header({ showBackButton = false, showUsersIcon = false, showLogo = false, title, subtitle }) {

    const navigation = useNavigation()

    console.log('showBackButton', showBackButton)
    console.log('showUsersIcon', showUsersIcon)
    console.log('showLogo', showLogo)

    return (
        <View style={styles.container}>
            {showBackButton &&
                <View style={styles.header}>
                    <CaretLeft color="#FFFFFF" size={24} onPress={() => navigation.goBack()} />
                    <Image source={logoImage} style={styles.logo} />
                </View>
            }

            {showUsersIcon && <UsersThree color='#00B37E' size={56} weight="regular" />}
            
            {showLogo && <Image source={logoImage} style={styles.logo} />}

            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 32
    },
    logo: {
        width: 46,
        height: 55,
        marginBottom: 16
    },
    header: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'baseline',
        justifyContent: 'space-between'
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
})