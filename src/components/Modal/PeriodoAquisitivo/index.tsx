import React, { useEffect, useState } from 'react'
import Modal from 'react-native-modal';
import { FlatList } from 'react-native'
import { ButtonCustomer } from '../../Button'
import { usePaidLeave } from '../../../hooks/usePaidLeave'
import * as S from './styles'
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
    <S.Container>
      <Modal isVisible={show} >
        <S.Content>
          <FlatList
            data={referencesPeriods}
            keyExtractor={(item) => item.end}
            renderItem={({item}) => (
              <S.PeriodoItem
                onPress={() => handleCategorySelect(item.start)}
              >
                <S.TextP>{`${moment(item.start).format('DD/MM/YYYY')} - ${moment(item.end).format(
            'DD/MM/YYYY'
          )}`}</S.TextP>
              </S.PeriodoItem>
            )}
            ItemSeparatorComponent={() => <S.Separator />}
          />
          <ButtonCustomer title='close' type='null' onPress={close} />
        </S.Content>
      </Modal>
    </S.Container>
  )
}
