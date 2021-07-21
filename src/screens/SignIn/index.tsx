import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { InputCustomer } from '../../components/Input'
import { ButtonCustomer } from '../../components/Button'
import {
  Container,
  Image,
  InputContainer,
  ButtonContainer,
  TextButton,
  ForgotPasswordContainer,
  TextForgotPassword
} from './styles'

export function SignIn() {
  const navigation = useNavigation()

  return(
    <Container>
      <Image source={require('../../assets/logo-vertical.png')} />
      <InputContainer>
        <InputCustomer 
          iconName='user'
          placeholder="Seu usuário de cooperado"
        />
        <InputCustomer 
          iconName='lock'
          placeholder="Sua senha de cooperado"
        />
      </InputContainer>
      <ButtonContainer>
        <ButtonCustomer 
          title='Entrar'
          onPress={() => {}}
        />
      </ButtonContainer>
      <ForgotPasswordContainer
        onPress={() => {navigation.navigate('ForgotPassword')}}
      >
        <TextForgotPassword>Esqueceu sua senha?</TextForgotPassword>
      </ForgotPasswordContainer>
    </Container>
  )
}