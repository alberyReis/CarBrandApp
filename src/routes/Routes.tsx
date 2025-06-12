import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useAuth } from '../contexts/AuthProvider'
import { SignIn } from '../screens/SignIn/SignIn'
import { Home } from '../screens/Home/Home'
import { Model } from '../screens/Model/Model'

const Stack = createNativeStackNavigator()

export default function Routes() {
  const { user } = useAuth()

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!user
          ? <Stack.Screen name="SignIn" component={SignIn} />
          : (
            <>
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="Model" component={Model} />
            </>
          )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}