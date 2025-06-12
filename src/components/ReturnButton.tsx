import { TouchableOpacity, View } from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons'
import { useNavigation } from "@react-navigation/native"

export const ReturnButton = () => {
    const navigation = useNavigation<any>();

    return (
        <View>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Ionicons name="arrow-back-circle-outline" size={30} color='#735229' />
            </TouchableOpacity>
        </View>
    )
}