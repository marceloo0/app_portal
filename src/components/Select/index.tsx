import React from 'react'

import { Container, Periodo, Icon, PeriodoText, Content } from './styles'

interface SelectProps {
  title: string
  onPress: () => void
}

export const Select: React.FC<SelectProps> = ({ title, onPress }) => {
  return (
    <Container>
      <PeriodoText>Periodo Aquisitivo</PeriodoText>
      <Content onPress={onPress}>
        <Periodo>{title}</Periodo>
        <Icon name="chevron-down" />
      </Content>
    </Container>
  )
}
