import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  width: 100%;
  margin-top: 24px;
  align-items: center;
`
export const Flex = styled.View`
  flex-direction: row;
  justify-content: space-between;
`
export const Box = styled.View`
  align-items: center;
  justify-content: center;
`
export const Producao = styled.View`
  padding: 24px;
  align-items: center;
  justify-content: center;
`
export const Title1 = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_700};
  color: ${({ theme }) => theme.colors.text_detail};
  font-size: 18px;
  margin-top: 24px;
  text-align: center;
`
export const Image = styled.Image`
  margin-top: 24px;
`
