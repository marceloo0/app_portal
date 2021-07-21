import React from 'react'
import { TouchableOpacityProps } from 'react-native'
import { Container, Title } from './styles'

interface ButtonCustomerProps extends TouchableOpacityProps {
  title: string;
}

export function ButtonCustomer({ title, ...rest }: ButtonCustomerProps) {
  return(
    <Container {...rest}>
      <Title>{title}</Title>
    </Container>
  )
}