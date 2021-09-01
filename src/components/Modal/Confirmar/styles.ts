import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
`
export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_500};
  font-size: 20px;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 12px;
`
export const Buttons = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`
export const Content = styled.View`
  align-items: center;
  justify-content: center;

  background-color: #121214;

  border-radius: 8px;
  padding: 24px;
`
export const WapSaida = styled.View`
  padding: 12px 0;
`
export const MessageContain = styled.View`
  border-width: 1px;
  border-color: #0085FF;
  border-radius: 8px;

  flex-direction: row;
  padding: 12px;
`
export const Description = styled.Text`
  color: ${({ theme }) => theme.colors.text_detail};
  margin-left: 8px;
`
export const CheckContain = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
`
export const TextCheck = styled.Text`
  color: ${({ theme }) => theme.colors.text_detail};
`
