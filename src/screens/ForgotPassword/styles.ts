import styled from 'styled-components/native'
import { TouchableOpacity } from 'react-native'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.background_primary};
`
export const Image = styled.Image``
export const InputContainer = styled.View`
  padding: 24px;
`
export const ButtonContainer = styled.View`
  padding: 24px;
  width: 100%;
`
export const SignInContainer = styled(TouchableOpacity)`
  padding: 24px;
`
export const TextSignIn = styled.Text`
  color: ${({ theme }) => theme.colors.main};
`
