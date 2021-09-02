import React, { useEffect, useState } from 'react'
import { View, ActivityIndicator } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Header, Calendar, DayProps } from '../../components'

import { useProduction } from '../../hooks'

import * as S from './styles'

export function Production() {
  const navigation = useNavigation()
  const { getProducton, data, loading } = useProduction()
  const [selectedDate, setSelectedDate] = useState<DayProps>({} as DayProps)
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')

  function handleChangeDate(day: DayProps) {
    setSelectedDate(day)
  }

  function handleChangeDateMonth(month: DayProps) {
    setMonth(String(month.month))
    setYear(String(month.year))
  }

  useEffect(() => {
    getProducton(year, month)
  }, [year, month])

  const formatedData = data?.map(item => {
    if (item.timeline.length !== 0 || item.paid_leave !== null) {
      return {
        date: item.date,
        paidLeave: item.paid_leave,
        color: item.paid_leave === null ? '#FFF' : '#009C3A'
      }
    }
  })

  const dataF = formatedData.filter(item => item !== undefined)

  return (
    <S.Container>
      <Header />
      {loading
      ?
        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
          <ActivityIndicator size={100} color="#009C3A" />
        </View>
      :
        <>
          <S.Title>Sua produção mensal</S.Title>
          <S.Description>Selecione uma data abaixo, para acessar sua produção do dia em questão:</S.Description>
          <Calendar onDayPress={handleChangeDate} data={dataF} onMonthChange={handleChangeDateMonth} />
        </>
      }
    </S.Container>
  )
}
