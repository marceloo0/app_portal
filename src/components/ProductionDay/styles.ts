import styled from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
  padding: 0 24px;
  align-items: center;
  justify-content: center;
`
export const Title = styled.Text`
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
`
export const WorkTimer = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text_detail};
  text-align: center;
`
export const ButtonContainer = styled.View`
  width: 100%;
`
