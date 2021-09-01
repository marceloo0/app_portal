import React from 'react'
import Modal from 'react-native-modal';
import { ButtonCustomer } from '../../Button'
import { FontAwesome5  } from '@expo/vector-icons';
import { useWorkTime } from '../../../hooks/useWorkTime'
import Checkbox from 'expo-checkbox';

import { Container, Content, Title, Buttons, WapSaida, MessageContain, Description, CheckContain, TextCheck } from './styles'

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
    <Container>
      <Modal isVisible={show} >
        <Content>
        <Title>{`Deseja confirmar sua ${checkType ? 'entrada' : 'saída'}?`}</Title>
        {checkType === false &&
          <WapSaida>
            <MessageContain>
              <FontAwesome5 name="exclamation-circle" size={24} color="#0085FF" />
              <Description>Se você for produzir 6 horas ou menos{'\n'} no dia de hoje, não é necessário o {'\n'}descanso mínimo de 30 minutos.</Description>
            </MessageContain>
            <CheckContain>
              <Checkbox
                value={checkBoxValue}
                onValueChange={setCheckBoxValue}
                color={checkBoxValue ? '#009C3A' : '#0085FF' }
              />
              <TextCheck >Essa é minha pausa de 30 minutos.</TextCheck>
            </CheckContain>
          </WapSaida>
        }
          <Buttons>
            <ButtonCustomer onPress={close} title='Cancelar' type='null' />
            <ButtonCustomer onPress={() => handleWorkTime({type: checkType, checkBoxValue})} title='Confirmar' type='Entrada' />
          </Buttons>
        </Content>
      </Modal>
    </Container>
  )
}
