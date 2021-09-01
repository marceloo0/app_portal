import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 24px;
  background: ${({ theme }) => theme.colors.background_primary};
`
export const Description = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.text_detail};
`
export const Title = styled.Text`
  font-size: 26px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary_700};
`
