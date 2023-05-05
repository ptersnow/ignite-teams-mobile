import { Pressable, Text } from "react-native";

export function Option({ title, isSelected, onPress }) {
    return (
        <Pressable onPress={onPress}>
            <Text>{title}</Text>
        </Pressable>
    )
}