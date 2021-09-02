import React from 'react'
import { parseISO, format } from 'date-fns';
import * as S from './styles'

export interface TimersProps {
  worktime?: string
  type: 'entrada' | 'saida'
  position?: string
}

export const Timers: React.FC<TimersProps> = ({ worktime = '', type, position = '' }) => {
  const hour = format(parseISO(worktime), 'HH:mm')

  return (
    <S.Container>
      <S.GradientView
        type={type}
        colors={type === 'entrada' ? ['#17490A', '#121214'] : ['#490B0B', '#121214']}
        locations={[0.2,0.9]}
        start={[1,5]}
      >
        <S.Title >{hour}</S.Title>
        <S.Badge type={type} >
          <S.TextPosition type={type} >{position.toString()}º</S.TextPosition>
          <S.TextCheck type={type} >{type === 'entrada' ? 'Entrada' : 'Saída' }</S.TextCheck>
        </S.Badge>
      </S.GradientView>
    </S.Container>
  )
}
