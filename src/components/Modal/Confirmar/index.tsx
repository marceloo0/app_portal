import React from 'react'
import Modal from 'react-native-modal';
import { ButtonCustomer } from '../../Button'
import { FontAwesome5  } from '@expo/vector-icons';
import { useWorkTime } from '../../../hooks/useWorkTime'
import Checkbox from 'expo-checkbox';

import * as S from './styles'

interface ConfirmarProps {
  close: () => void
  show?: boolean
  checkType: boolean
  checkBoxValue: boolean
  setCheckBoxValue?: () => void
}

interface WorkTimeProps {
  type: boolean
  checkBoxValue: boolean
}

export const Confirmar: React.FC<ConfirmarProps> = ({ show, close, checkType, setCheckBoxValue, checkBoxValue }) => {
  const { saveWorkTime } = useWorkTime()

  const handleWorkTime = ({type, checkBoxValue }: WorkTimeProps) => {
    close();
    saveWorkTime(type, checkBoxValue)
  }

  return (
    <S.Container>
      <Modal isVisible={show} >
        <S.Content>
        <S.Title>{`Deseja confirmar sua ${checkType ? 'entrada' : 'saída'}?`}</S.Title>
        {checkType === false &&
          <S.WapSaida>
            <S.MessageContain>
              <FontAwesome5 name="exclamation-circle" size={24} color="#0085FF" />
              <S.Description>Se você for produzir 6 horas ou menos{'\n'} no dia de hoje, não é necessário o {'\n'}descanso mínimo de 30 minutos.</S.Description>
            </S.MessageContain>
            <S.CheckContain>
              <Checkbox
                value={checkBoxValue}
                onValueChange={setCheckBoxValue}
                color={checkBoxValue ? '#009C3A' : '#0085FF' }
              />
              <S.TextCheck >Essa é minha pausa de 30 minutos.</S.TextCheck>
            </S.CheckContain>
          </S.WapSaida>
        }
          <S.Buttons>
            <ButtonCustomer onPress={close} title='Cancelar' type='null' />
            <ButtonCustomer onPress={() => handleWorkTime({type: checkType, checkBoxValue})} title='Confirmar' type='Entrada' />
          </S.Buttons>
        </S.Content>
      </Modal>
    </S.Container>
  )
}
