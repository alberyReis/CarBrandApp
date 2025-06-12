import { ActionButtonProps } from '../types/types'
import styled from 'styled-components/native'

const Btn = styled.TouchableOpacity`
  background-color: #8C7F77;
  border: 1px;
  border-color: #BF925A;
  border-radius: 10px;
  margin-bottom: 20px;
  margin-top: 20px;
  padding: 10px;
`

const Txt = styled.Text`
  color: #F2E4BB;
  font-size: 16px;
  text-align: center;
`

export const ActionButton: React.FC<ActionButtonProps> = ({ title, onPress }) => {
  return (
    <Btn onPress={onPress} activeOpacity={0.7}>
      <Txt>{title}</Txt>
    </Btn>
  )
}