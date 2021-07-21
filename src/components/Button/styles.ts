import styled from 'styled-components/native'
import { TouchableOpacity } from 'react-native'

export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 45px;
  background: ${({ theme }) => theme.colors.main};
  align-items: center;
  justify-content: center;
  border-radius: 6px;
`
export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_700};
  font-size: 18px;
  color: ${({ theme }) => theme.colors.text};
`