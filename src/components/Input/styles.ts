import styled from 'styled-components/native'
import { TextInput } from 'react-native'
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
  height: 45px;
  width: 100%;
  margin-top: 16px;
  background: ${({ theme }) => theme.colors.background_secondary};
  flex-direction: row;
  align-items: center;
  border-radius: 6px;
`
export const Icon = styled(Feather)`
  margin-left: 16px;
  color: ${({ theme }) => theme.colors.text};
`
export const InputText = styled(TextInput)`
  flex: 1;
  color: ${({ theme }) => theme.colors.text};
  margin-left: 8px;
`
