import React, { useEffect, useState } from 'react'
import Modal from 'react-native-modal';
import { FlatList } from 'react-native'
import { ButtonCustomer } from '../../Button'
import { usePaidLeave } from '../../../hooks/usePaidLeave'
import { Container, Content, PeriodoItem, TextP, Separator } from './styles'
import moment from 'moment'
import { format, parseISO } from 'date-fns'

interface Periodo {
  start: string
  end: string
  key: string
}

interface PeriodoAquisitivoProps {
  close: () => void
  show: boolean
}

export const PeriodoAquisitivo: React.FC<PeriodoAquisitivoProps> = ({ show, close }) => {
  const { referencesPeriods, getPaidLeave } = usePaidLeave()

  function handleCategorySelect(periodo: string){
    getPaidLeave(periodo)
    close()
  }

  return (
    <Container>
      <Modal isVisible={show} >
        <Content>
          <FlatList
            data={referencesPeriods}
            keyExtractor={(item) => item.end}
            renderItem={({item}) => (
              <PeriodoItem
                onPress={() => handleCategorySelect(item.start)}
              >
                <TextP>{`${moment(item.start).format('DD/MM/YYYY')} - ${moment(item.end).format(
            'DD/MM/YYYY'
          )}`}</TextP>
              </PeriodoItem>
            )}
            ItemSeparatorComponent={() => <Separator />}
          />
          <ButtonCustomer title='close' type='null' onPress={close} />
        </Content>
      </Modal>
    </Container>
  )
}
