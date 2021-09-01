import React, { useEffect, useState } from 'react'
import { SafeAreaView, ScrollView, ActivityIndicator, View } from 'react-native'
import { Header, CardPaidLeave, Select, ButtonCustomer, PeriodoAquisitivo, ChartPie } from '../../components'
// import moment from 'moment'
import { usePaidLeave } from '../../hooks/usePaidLeave'
import { format, parseISO } from 'date-fns'

import { Container, Title, ChartsPaidLeave, Content } from './styles'

export function VacationsAllowences() {
  const { annual_leaves, days_off, paidleaveLoading, referencesPeriods, getPaidLeave, getReferencesPeriods } = usePaidLeave()
  const [showPeriodoModal, setShowPeriodoModal ] = useState(false)

  function handleShowPeriodoModal () {
    setShowPeriodoModal(true)
  }

  function handleClosePeriodoModal () {
    setShowPeriodoModal(false)
  }

  useEffect(() => {
    getReferencesPeriods()
  }, [])

  useEffect(() => {
    getPaidLeave(referencesPeriods[0].start)
  }, [referencesPeriods])

  return (
      <ScrollView style={{ backgroundColor: '#121214'}}>
        <Container>
          <Header paidleave={true} onPress={() => {}} />
          <Title>Férias e Abono</Title>
          <Select title={`${format(parseISO(referencesPeriods[0].start), 'dd/MM/yyyy')} - ${format(parseISO(referencesPeriods[0].end),
            'dd/MM/yyyy'
          )}`} onPress={handleShowPeriodoModal} />
          {paidleaveLoading ?
            <Content>
              <ActivityIndicator size={100} color="#009C3A" />
            </Content> : (
              <>
                <ChartsPaidLeave>
                  <ChartPie />
                </ChartsPaidLeave>
                <Content>
                  <CardPaidLeave
                    type='annual_leaves'
                    obtained={Object(annual_leaves).obtained}
                    approved={Object(annual_leaves).approved}
                    remaining={Object(annual_leaves).remaining}
                  />
                  <CardPaidLeave
                    type='days_off'
                    obtained={Object(days_off).obtained}
                    approved={Object(days_off).approved}
                    remaining={Object(days_off).remaining}
                    />
                </Content>
                <ButtonCustomer title='Solicitar Ferias/Abonos' type='Entrada' onPress={() => {}} />
              </>
            )}
        </Container>
        {showPeriodoModal &&
          <PeriodoAquisitivo
          show={showPeriodoModal}
          close={handleClosePeriodoModal}
        />}
      </ScrollView>
  )
}
