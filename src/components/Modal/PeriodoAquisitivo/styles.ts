import styled from 'styled-components/native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

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
export const Content = styled.View`
  background-color: #CECECE;
  height: 300px;
`
export const PeriodoItem = styled.TouchableOpacity`
  width: 100%;
  padding: 15px;
  flex-direction: row;
  align-items: center;
`
export const TextP = styled.Text`
  color: ${({ theme }) => theme.colors.text_detail};
`
export const Separator = styled.View`
  height: 1px;
  width: 100%;
  background-color:  ${({ theme }) => theme.colors.text};
`;
