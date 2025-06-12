
import { useNavigation } from '@react-navigation/native'
import { Brand } from "../types/types"
import styled from "styled-components/native"

const Card = styled.TouchableOpacity`
    background-color: #8C7F7733;
    border: 1px;
    border-color: #0D0D0D77;
    border-radius: 10px;
    margin: 5px;
`

const Txt = styled.Text`
  color: #0D0D0D;
  font-size: 22px;
  padding: 20px;
  text-align: center;
`

export const Brands = ({ nome, codigo }: Brand) => {
    const navigation = useNavigation<any>();

    return (
        <Card onPress={() => navigation.navigate('Model', { brandCode: codigo, brandName: nome })}>
            <Txt>{nome}</Txt>
        </Card>
    )
}