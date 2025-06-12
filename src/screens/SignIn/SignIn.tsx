import { SafeAreaView } from 'react-native-safe-area-context'
import { FormInput } from '../../components/FormInput'
import { ErrorModal } from '../../components/ErrorModal'
import { useSignInForm } from './SignInBuilder'
import { Title } from '../../components/Title'
import { ActionButton } from '../../components/ActionButton'
import { Container } from '../../components/Container'

export const SignIn = () => {
  const {
    control,
    handleSubmit,
    errors,
    onSubmit,
    modalVisible,
    setModalVisible,
    errorMessage,
  } = useSignInForm()

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F2E4BB' }}>
      <Container>
        <Title>Login</Title>
        <FormInput
          control={control}
          name="username"
          label="Usuário"
          rules={{ required: 'O nome de usuário é obrigatório' }}
          error={errors.username}
        />
        <FormInput
          control={control}
          name="password"
          label="Senha"
          secureTextEntry
          rules={{ required: 'A senha é obrigatória' }}
          error={errors.password}
        />
        <ActionButton
          title='Login'
          onPress={handleSubmit(onSubmit)}
        />
        <ErrorModal
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          errorMessage={errorMessage}
        />
      </Container>
    </SafeAreaView>
  )
}
