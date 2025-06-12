import { Modal } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ErrorModalProps } from '../types/types'
import styled from 'styled-components/native'

const CenteredSafeAreaView = styled.SafeAreaView`
  align-items: center;
  flex: 1;
  justify-content: center;
`
const CenteredView = styled.View`
  align-items: center;
  flex: 1;
  justify-content: center;
`

const ModalView = styled.View`
  align-items: center;
  background-color: #F2E4BB;
  border: 1px;
  border-color: #735229;
  border-radius: 20px;
  margin: 20px;
  padding: 20px;
`

const Txt = styled.Text`
  color: #0D0D0D;
  font-size: 16px;
  padding: 20px;
  text-align: center;
`

const Btn = styled.TouchableOpacity`
  background-color: #8C7F77;
  margin-bottom: 15px;
  border-radius: 10px;
  width: 80%;
`

const TxtButton = styled.Text`
  color: #F2E4BB;
  font-size: 16px;
  padding-bottom: 10px;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 10px;
  text-align: center;
`

export const ErrorModal: React.FC<ErrorModalProps> = ({ visible, onClose, errorMessage }) => {
  return (
    <SafeAreaProvider>
      <CenteredSafeAreaView>
        <Modal
          animationType="slide"
          transparent={true}
          visible={visible}
          onRequestClose={onClose}
        >
          <CenteredView>
            <ModalView>
              <Txt>{errorMessage}</Txt>
              <Btn
                onPress={onClose}
              >
                <TxtButton>Fechar</TxtButton>
              </Btn>
            </ModalView>
          </CenteredView>
        </Modal>
      </CenteredSafeAreaView>
    </SafeAreaProvider>
  )
}
