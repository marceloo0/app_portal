import React from 'react'
import { TextInputProps } from 'react-native'
import { Container, InputText, Icon } from './styles'
import { useTheme } from 'styled-components'

interface InputCustomerprops extends TextInputProps {
  iconName: string;
}

export function InputCustomer({ iconName, ...rest}: InputCustomerprops) {
  const theme = useTheme()
  return (
    <Container>
      <Icon 
        name={iconName}
        size={20}
      />
      <InputText 
        placeholderTextColor={theme.colors.text_detail}
        {...rest}
      />
    </Container>
  )
}