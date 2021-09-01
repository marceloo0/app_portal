import styled, { css } from 'styled-components/native'
import { TextInput } from 'react-native'
import { Feather, Ionicons } from '@expo/vector-icons';

interface TypeError {
  isErrored: boolean
  isFocused: boolean
  isFilled?: boolean
}

export const Container = styled.View<TypeError>`
  height: 45px;
  width: 100%;
  margin-top: 16px;
  background: ${({ theme }) => theme.colors.background_secondary};
  border-color: ${({ theme }) => theme.colors.background_secondary};
  flex-direction: row;
  align-items: center;
  border-radius: 6px;
  border: 0.3px;

  ${({ isErrored }) =>
    isErrored &&
    css`
      border-color: ${({ theme }) => theme.colors.main_secondary};
    `}

  ${({ isFocused }) =>
    isFocused &&
    css`
      border-color: ${({ theme }) => theme.colors.main};
    `}

`
export const Icon = styled(Feather)<TypeError>`
  margin-left: 16px;
  color: ${({ theme }) => theme.colors.iconInput};

  ${({ isFocused }) =>
    isFocused &&
    css`
      color: ${({ theme }) => theme.colors.main};
    `}
`
export const InputText = styled(TextInput)`
  flex: 1;
  color: ${({ theme }) => theme.colors.text};
  margin-left: 8px;
`
export const Error = styled.Text`
  color: ${({ theme }) => theme.colors.main_secondary};
`

export const IconContainer = styled.View`
  height: 43px;
  width: 55px;
  justify-content: center;
  align-items: center;
  margin-right: 4px;
  background-color: transparent;
`;
