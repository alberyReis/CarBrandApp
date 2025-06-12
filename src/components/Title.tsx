import { PropsWithChildren } from "react"
import styled from "styled-components/native"

const Txt = styled.Text`
    color: #0D0D0D;
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    margin-top: 20px;
    margin-bottom: 20px;
`

export const Title = ({ children }: PropsWithChildren) => {
    return (
        <Txt>{children}</Txt>
    )
}