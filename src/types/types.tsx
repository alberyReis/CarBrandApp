import { Control, FieldError } from "react-hook-form"

export type ActionButtonProps = {
  title: string
  onPress: () => void
  backgroundColor?: string
  textColor?: string
}

export type AuthContextType = {
  user: User | null;
  signIn: (username: string, password: string) => Promise<void>
  signOut: () => void
}

export type Brand = {
  nome: string
  codigo: string
}

export type ErrorModalProps = {
  visible: boolean
  errorMessage: string
  onClose: () => void
}

export type FormData = {
  username: string
  password: string
}

export type FormInputProps = {
  control: Control<any>
  name: string
  label: string
  defaultValue?: string
  rules?: object
  secureTextEntry?: boolean
  error?: FieldError
}

export type LoadingErrorProps = {
  loading: boolean
  error?: string | null
}

export type RouteParams = {
  brandCode: string
  brandName: string
}

export type User = {
  name: string
  user: string
}

export type UserModel = {
  nome: string
  codigo: string
}





