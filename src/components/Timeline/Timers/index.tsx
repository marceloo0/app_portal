import React from 'react'
import { parseISO, format } from 'date-fns';
import { GradientView, Container, Title, Badge, TextCheck, TextPosition } from './styles'

export interface TimersProps {
  worktime?: string
  type: 'entrada' | 'saida'
  position?: string
}

export const Timers: React.FC<TimersProps> = ({ worktime = '', type, position = '' }) => {
  const hour = format(parseISO(worktime), 'HH:mm')

  return (
    <Container>
      <GradientView
        type={type}
        colors={type === 'entrada' ? ['#17490A', '#121214'] : ['#490B0B', '#121214']}
        locations={[0.2,0.9]}
        start={[1,5]}
      >
        <Title >{hour}</Title>
        <Badge type={type} >
          <TextPosition type={type} >{position.toString()}º</TextPosition>
          <TextCheck type={type} >{type === 'entrada' ? 'Entrada' : 'Saída' }</TextCheck>
        </Badge>
      </GradientView>
    </Container>
  )
}
