import { Brand } from "../types/types"
import styled from "styled-components/native"

const Card = styled.View`
    background-color: #8C7F7733;
    border: 1px;
    border-color: #0D0D0D77;
    border-radius: 10px;
    margin: 5px;
    padding: 5px;
`

const Txt = styled.Text`
  color: #0D0D0D;
  font-size: 18px;
  padding: 5px;
  text-align: center;
`

export const Cars = ({ nome, codigo }: Brand) => {
    return (
        <Card>
            <Txt>{codigo} - {nome}</Txt>
        </Card>
    )
}