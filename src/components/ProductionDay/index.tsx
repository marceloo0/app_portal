import React, { useState } from 'react'
import { ButtonCustomer } from '../Button'
import { Container, ButtonContainer, WorkTimer } from './styles'
import { useWorkTime } from '../../hooks/useWorkTime'
import { Count } from '../Count'
import { Confirmar } from '../Modal'

export function ProductionDay() {
  const { rectificationModalVisible } = useWorkTime()
  const [isModalVisible, setModalVisible] = useState(false);
  const [isCheckBoxValue, setCheckBoxValue] = useState(false);
  const [checkType, setcheckType] = useState(false);

  const toggleModal = (type: boolean) => {
    setModalVisible(prevState => !prevState);
    setcheckType(type)
  };

  const handleCheckBox = () => {
    setCheckBoxValue(prevState => !prevState)
  }

  return(
    <Container>
      <Count />
      <WorkTimer>Tempo trabalhado</WorkTimer>
      <ButtonContainer>
        <ButtonCustomer onPress={() => toggleModal(true)} title='Entrada' type='Entrada' />
        <ButtonCustomer onPress={() => toggleModal(false)} title='Saída' type='Saida' />
      </ButtonContainer>

      {isModalVisible &&
        <Confirmar
          show={isModalVisible}
          close={() => setModalVisible(prevState => !prevState)}
          setCheckBoxValue={handleCheckBox}
          checkBoxValue={isCheckBoxValue}
          checkType={checkType}
        />
      }

      {rectificationModalVisible &&
        <Confirmar
          checkType={checkType}
          show={isModalVisible}
          close={() => setModalVisible(prevState => !prevState)}
          checkBoxValue={isCheckBoxValue}
        />
      }
    </Container>
  )
}
