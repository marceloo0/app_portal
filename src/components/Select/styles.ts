import styled from 'styled-components/native'
import { Feather } from '@expo/vector-icons';


export const Container = styled.View`
  padding: 8px 16px;
`
export const Content = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7
})`
  background-color: ${({ theme }) => theme.colors.background_secondary};
  flex-direction: row;
  justify-content: space-between;
  border-radius: 5px;
  padding: 12px 16px;

`
export const Periodo = styled.Text`
  color: ${({ theme }) => theme.colors.text_detail};
  font-size: 14px;
`
export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.colors.text_detail};
  font-size: 20px;

  margin-left: 16px;
`
export const PeriodoText = styled.Text`
  color: ${({ theme }) => theme.colors.text_detail};
  font-size: 14px;
  text-align: center;
  margin-bottom: 8px;
`
