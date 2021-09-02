import React, { useEffect, useState } from 'react'
import { useWorkTime } from '../../hooks/useWorkTime'
import * as S from './styles'
import { format } from 'date-fns'

export const Count: React.FC = () => {
  const { timer } = useWorkTime()
  return (
    <S.Container>
       <S.Title>{format(timer, 'HH:mm:ss')}</S.Title>
    </S.Container>
  )
}
