import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useAuth } from '../../contexts/AuthProvider'
import { FormData } from '../../types/types'

export const useSignInForm = () => {
  const { signIn } = useAuth()
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

  const [modalVisible, setModalVisible] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const onSubmit = async (data: FormData) => {
    try {
      await signIn(data.username, data.password)
    } catch (err) {
      setErrorMessage('Usuário ou senha inválidos')
      setModalVisible(true)
    }
  }

  return {
    control,
    handleSubmit,
    errors,
    onSubmit,
    modalVisible,
    setModalVisible,
    errorMessage,
  }
}
