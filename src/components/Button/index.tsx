import React from 'react'
import { TouchableOpacityProps } from 'react-native'
import { Container, Title } from './styles'

interface ButtonCustomerProps extends TouchableOpacityProps {
  title: string;
  type: 'Entrada' | 'Saida' | 'null'
  onPress: () => void
}

export function ButtonCustomer({ title, type, onPress, ...rest }: ButtonCustomerProps) {
  return(
    <Container type={type} onPress={onPress} {...rest}>
      <Title>{title}</Title>
    </Container>
  )
}
