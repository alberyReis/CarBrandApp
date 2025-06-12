import { FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useAuth } from '../../contexts/AuthProvider'
import { Brands } from '../../components/Brands'
import { HomeBuilder } from './HomeBuilder'
import { ActionButton } from '../../components/ActionButton'
import { Title } from '../../components/Title'
import { LoadingError } from '../../components/LoadingError'
import { Container } from '../../components/Container'

export const Home = () => {
  const { user, signOut } = useAuth();
  const { brands, loading, error } = HomeBuilder()

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F2E4BB' }}>
      <Container>
        <Title>Bemvindo, {user?.name}</Title>
        <ActionButton
          title='Logout'
          onPress={signOut}
        />
        <LoadingError loading={loading} error={error} />
        <FlatList
          data={brands}
          keyExtractor={(item) => item.codigo}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <Brands nome={item.nome} codigo={item.codigo} />
          )}
        />
      </Container>
    </SafeAreaView>
  )
}
