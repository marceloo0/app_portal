import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { ButtonCustomer } from '../../components/Button'
import { InputCustomer } from '../../components/Input'

import { Container, Image, InputContainer, ButtonContainer, SignInContainer, TextSignIn } from './styles'

export function ForgotPassword() {
  const navigation = useNavigation()
  return (
    <Container>
      <Image source={require('../../assets/logo-vertical.png')} />
      <InputContainer>
        <InputCustomer 
          iconName='mail'
          placeholder="Seu e-mail de cooperado"
        />
      </InputContainer>
      <ButtonContainer>
        <ButtonCustomer 
          title='Enviar'
          onPress={() => {}}
        />
      </ButtonContainer>
      <SignInContainer
        onPress={() => {navigation.navigate('SignIn')}}
      >
        <TextSignIn>Voltar ao login</TextSignIn>
      </SignInContainer>
    </Container>
  )
}