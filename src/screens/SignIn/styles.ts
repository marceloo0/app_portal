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
  width: 100%;
  padding: 24px;
`
export const TextButton = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.text};
  font-size: 17px;
  `
export const ButtonContainer = styled.View`
  width: 100%;
  padding: 24px;
`
export const ForgotPasswordContainer = styled(TouchableOpacity)``
export const TextForgotPassword = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.main};
  font-size: 13px;
`