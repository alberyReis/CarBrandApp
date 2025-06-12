import { PropsWithChildren } from "react"
import styled from "styled-components/native"

const StyledContainer = styled.View`
    background-color: #F2E4BB;
    flex: 1;
    justify-content: center;
    padding: 20px;
`

export const Container = ({ children }: PropsWithChildren) => {
    return (
        <StyledContainer>
            {children}
        </StyledContainer>
    )
}