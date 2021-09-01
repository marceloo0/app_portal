import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  height: 100%;
  padding: 24px;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.background_primary};
`
export const Title = styled.Text`
  font-size: 21px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
  color: ${({ theme }) => theme.colors.text};
`
export const ChartsPaidLeave = styled.View`
  height: 320px;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
`
export const AmostraContainer = styled.View``
export const Content = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_primary};
  align-items: center;
  justify-content: center;
`
