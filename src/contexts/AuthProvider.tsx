import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { User, AuthContextType } from '../types/types'
import { login } from '../api/api'

const AuthContext = createContext<AuthContextType>({} as AuthContextType)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    AsyncStorage.getItem('@user').then((data) => {
      if (data) {
        const user = data
        setUser(JSON.parse(data))
      }
    })
  }, [])

  async function signIn(username: string, password: string) {
    try {
      const data = await login(username, password)
      const user = data.user
      await AsyncStorage.setItem('@user', JSON.stringify(user))
      setUser(user)
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Login error')
    }
  }

  async function signOut() {
    await AsyncStorage.removeItem('@user')
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext)
