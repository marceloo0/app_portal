import React from 'react'

import * as S from './styles'

export interface CardPaidLeaveProps {
  type: 'annual_leaves' | 'days_off'
  obtained?: number
  approved?: number
  remaining?: number
}

export const CardPaidLeave: React.FC<CardPaidLeaveProps> = ({ type, obtained, approved, remaining }) => {

  return (
    <S.Container type={type} >
      <S.Title>{type === 'annual_leaves' ? 'Férias ' : 'Abonos'}</S.Title>
      <S.Content>
        <S.Contain>
          <S.DiasContain>
            <S.Title>{obtained?.toString()}</S.Title>
            <S.Description>dias</S.Description>
          </S.DiasContain>
          <S.Description>Adquirido</S.Description>
        </S.Contain>
        <S.Contain>
        <S.DiasContain>
            <S.Title>{approved?.toString()}</S.Title>
            <S.Description>dias</S.Description>
          </S.DiasContain>
          <S.Description>Utilizado</S.Description>
        </S.Contain>
        <S.Contain>
        <S.DiasContain>
            <S.Title>{remaining?.toString()}</S.Title>
            <S.Description>dias</S.Description>
          </S.DiasContain>
          <S.Description>Restante</S.Description>
        </S.Contain>
      </S.Content>
    </S.Container>
  )
}
