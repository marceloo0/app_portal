import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  padding: 24px;
  background: ${({ theme }) => theme.colors.background_primary};
`
export const Title = styled.Text`
  font-size: 48px;
  font-family: ${({ theme }) => theme.fonts.primary_700};
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
`
