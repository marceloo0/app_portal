import React, { useEffect, useState } from 'react'
import { useWorkTime } from '../../hooks/useWorkTime'
import { Container, Title } from './styles'
import { format } from 'date-fns'

export const Count: React.FC = () => {
  const { timer } = useWorkTime()
  return (
    <Container>
       <Title>{format(timer, 'HH:mm:ss')}</Title>
    </Container>
  )
}
