import { Text } from 'react-native'
import { Controller } from 'react-hook-form'
import { FormInputProps } from '../types/types'
import styled from 'styled-components/native'

const Container = styled.View`
  justify-content: center;
`

const Label = styled.Text`
  color: #0D0D0D;
  font-size: 16px;
  margin-bottom: 10px;
  margin-top: 10px;
`

const Input = styled.TextInput`
  border: 1px;
  border-color: #8C7F77;
  border-radius: 10px;
  padding: 10px;
`

const TxtError = styled.Text`
  color: #735229;
  font-size: 16px;
  margin-bottom: 10px;
  margin-top: 10px;
`

export const FormInput = ({
  control,
  name,
  label,
  defaultValue = '',
  rules = {},
  secureTextEntry = false,
  error,
}: FormInputProps) => {

  return (
    <Container>
      <Label>{label}</Label>
      <Controller
        control={control}
        name={name}
        rules={rules}
        defaultValue={defaultValue}
        render={({ field: { onChange, value } }) => (
          <Input
            onChangeText={onChange}
            value={value}
            secureTextEntry={secureTextEntry}
          />
        )}
      />
      {error && <Text>{error.message}</Text>}
    </Container>
  )
}
