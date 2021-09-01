import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 24px;
  background: ${({ theme }) => theme.colors.background_primary};
`
export const Title = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.text};
  margin-left: 2px;
  text-align: center;
`
export const WapperTop = styled.View`
  justify-content: center;
  align-items: center;
  padding: 0 36px;
`
export const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  margin: 24px auto;
  border-radius: 50px;
  border-width: 4px;
  border-color: ${({ theme }) => theme.colors.text};
`
export const WapperText = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
export const Label = styled.Text`
  color: ${({ theme }) => theme.colors.text_detail};
  font-size: 14px;
`
