import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Turmas } from '../screens/Turmas'
import { Times } from '../screens/Times'
import { NovaTurma } from '../screens/NovaTurma'

const Stack = createNativeStackNavigator()

export function StackRoutes() {
    return (
        <Stack.Navigator
            initialRouteName='Turmas'
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Turmas" component={Turmas} />
            <Stack.Screen name="Times" component={Times} />
            <Stack.Screen name="NovaTurma" component={NovaTurma} />
        </Stack.Navigator>
    )
}