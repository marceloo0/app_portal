import React from 'react'
import { TouchableOpacityProps } from 'react-native'
import * as S from './styles'

interface ButtonCustomerProps extends TouchableOpacityProps {
  title: string;
  type: 'Entrada' | 'Saida' | 'null'
  onPress: () => void
}

export function ButtonCustomer({ title, type, onPress, ...rest }: ButtonCustomerProps) {
  return(
    <S.Container type={type} onPress={onPress} {...rest}>
      <S.Title>{title}</S.Title>
    </S.Container>
  )
}
