import { View, ActivityIndicator } from 'react-native'
import { LoadingErrorProps } from '../types/types'
import styled from 'styled-components/native'

const TxtError = styled.Text`
  color: #735229;
  font-size: 16px;
  margin-bottom: 10px;
  margin-top: 10px;
`

export const LoadingError: React.FC<LoadingErrorProps> = ({ loading, error }) => {
    if (loading) {
        return (
            <View>
                <ActivityIndicator size="large" color="#735229" />
            </View>
        )
    }

    if (error) {
        return (
            <View>
                <TxtError>{error}</TxtError>
            </View>
        )
    }

    return null
}
