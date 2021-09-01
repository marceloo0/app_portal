import styled from 'styled-components/native'

import { CardPaidLeaveProps } from '.'

export const Container = styled.View<CardPaidLeaveProps>`
  flex-direction: row;
  border-radius: 8px;
  border-width: 1px;
  border-color: ${({ type, theme }) => type === 'annual_leaves' ? theme.colors.main : '#0085FF' };

  padding: 12px 24px;
  margin-bottom: 16px;

  background-color: ${({ type, theme }) => type === 'annual_leaves' ? '#112C1B' : '#111B2C' };

  align-items: center;
`
export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 18px;
`
export const Description = styled.Text`
  color: ${({ theme }) => theme.colors.text_detail};
  font-size: 12px;
  margin-left: 4px;
  margin-bottom: 2px;
`
export const Content = styled.View`
  flex-direction: row;
  margin-left: 8px;
`
export const Contain = styled.View`
  margin-left: 16px;
  justify-content: flex-start;
  align-items: center;
`
export const DiasContain = styled.View`
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
`
