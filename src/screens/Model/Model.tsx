import { FlatList } from 'react-native'
import { RouteProp, useRoute } from '@react-navigation/native'
import { RouteParams } from '../../types/types'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Cars } from '../../components/Cars'
import { ReturnButton } from '../../components/ReturnButton'
import { ModelBuilder } from './ModelBuilder'
import { LoadingError } from '../../components/LoadingError'
import { Container } from '../../components/Container'
import { Title } from '../../components/Title'

export const Model = () => {
  const route = useRoute<RouteProp<{ params: RouteParams }, 'params'>>()
  const { brandCode, brandName } = route.params

  const {
    models,
    loading,
    error
  } = ModelBuilder(brandCode)

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F2E4BB' }}>
      <Container>
        <ReturnButton />
        <Title>Modelos {brandName}</Title>
        <LoadingError loading={loading} error={error} />
        <FlatList
          data={models}
          keyExtractor={(item) => item.codigo}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <Cars nome={item.nome} codigo={item.codigo} />}
        />
      </Container>
    </SafeAreaView>
  )
}
