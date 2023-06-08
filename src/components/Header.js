import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { CaretLeft, UsersThree } from "phosphor-react-native";

import logoImage from '../assets/logo.png'

export function Header({ showBackButton, showUsersIcon, showLogo, onPress, title, subtitle }) {

    return (
        <View style={styles.container}>
            {showBackButton &&
                <View style={styles.header}>
                    <TouchableOpacity onPress={onPress}>
                        <CaretLeft color="#FFFFFF" size={24} />
                    </TouchableOpacity>
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