import styled from 'styled-components/native'
import { BorderlessButton } from 'react-native-gesture-handler'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.background_primary};
`
export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_700};
  color: ${({ theme }) => theme.colors.text};
  font-size: 20px;
  text-align: center;
  `
export const Box = styled.View`
  padding: 24px;
`
export const SignInContainer = styled(BorderlessButton)`
  padding: 24px;
`
export const TextSignIn = styled.Text`
  color: ${({ theme }) => theme.colors.main};
`
export const Description = styled.Text`
  color: ${({ theme }) => theme.colors.text_detail};
  margin-top: 8px;
`
