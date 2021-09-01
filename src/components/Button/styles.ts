import styled, { css } from 'styled-components/native'
import { TouchableOpacity } from 'react-native'

interface Typeprops {
  type: 'Entrada' | 'Saida' | 'null'
}

export const Container = styled(TouchableOpacity)<Typeprops>`
  /* width: 100%; */
  height: 45px;
  background: ${({ theme }) => theme.colors.main};
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  margin-top: 12px;
  padding: 8px 21px;

  ${({ type }) => type === 'Entrada' && css`
    background-color: ${({ theme }) => theme.colors.success};
  `}

  ${({ type }) => type === 'Saida' && css`
    background-color: ${({ theme }) => theme.colors.main_secondary};
  `}

  ${({ type }) => type === 'null' && css`
    background-color: ${({ theme }) => theme.colors.text_detail};
  `}
`
export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_700};
  font-size: 18px;
  color: ${({ theme }) => theme.colors.text};
  text-transform: uppercase;
`
