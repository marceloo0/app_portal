import styled from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient';

import { TimersProps } from '.'

export const Container = styled.View`
  width: 100%;
`
export const GradientView = styled(LinearGradient)<TimersProps>`
  flex-direction: row;
  width: 100%;

  padding: 12px;
  border-left-width: 6px;
  border-left-color: ${({ type, theme }) => type === 'entrada' ? theme.colors.main : theme.colors.main_secondary};
  border-radius: 8px;
  margin-top: 12px;

  justify-content: space-between;
  align-items: center;
`
export const Badge = styled.View<TimersProps>`
  flex-direction: row;
  padding: 4px 8px;
  border-width: 1px;
  border-color: ${({ type, theme }) => type === 'entrada' ? theme.colors.main : theme.colors.main_secondary};
  border-radius: 8px;
  background-color: transparent;
  align-items: center;
`
export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_700};
  color: ${({ theme }) => theme.colors.text};
  font-size: 28px;
`
export const TextCheck = styled.Text<TimersProps>`
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ type, theme }) => type === 'entrada' ? theme.colors.main : theme.colors.main_secondary};
  font-size: 14px;
  margin-left: 2px;
`
export const TextPosition = styled.Text<TimersProps>`
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ type, theme }) => type === 'entrada' ? theme.colors.main : theme.colors.main_secondary};
  font-size: 14px;
`
