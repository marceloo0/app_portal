import React from 'react'

import * as S from './styles'

interface SelectProps {
  title: string
  onPress: () => void
}

export const Select: React.FC<SelectProps> = ({ title, onPress }) => {
  return (
    <S.Container>
      <S.PeriodoText>Periodo Aquisitivo</S.PeriodoText>
      <S.Content onPress={onPress}>
        <S.Periodo>{title}</S.Periodo>
        <S.Icon name="chevron-down" />
      </S.Content>
    </S.Container>
  )
}
