import React from 'react'

import { Container, Title, Description, Content, Contain, DiasContain } from './styles'

export interface CardPaidLeaveProps {
  type: 'annual_leaves' | 'days_off'
  obtained?: number
  approved?: number
  remaining?: number
}

export const CardPaidLeave: React.FC<CardPaidLeaveProps> = ({ type, obtained, approved, remaining }) => {

  return (
    <Container type={type} >
      <Title>{type === 'annual_leaves' ? 'Férias ' : 'Abonos'}</Title>
      <Content>
        <Contain>
          <DiasContain>
            <Title>{obtained?.toString()}</Title>
            <Description>dias</Description>
          </DiasContain>
          <Description>Adquirido</Description>
        </Contain>
        <Contain>
        <DiasContain>
            <Title>{approved?.toString()}</Title>
            <Description>dias</Description>
          </DiasContain>
          <Description>Utilizado</Description>
        </Contain>
        <Contain>
        <DiasContain>
            <Title>{remaining?.toString()}</Title>
            <Description>dias</Description>
          </DiasContain>
          <Description>Restante</Description>
        </Contain>
      </Content>
    </Container>
  )
}
