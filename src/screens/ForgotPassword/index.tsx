import React from 'react'
import * as Yup from 'yup'

import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

import { ButtonCustomer, InputCustomer } from '../../components'

import { Box, Container, Description, Title } from './styles'

import Logo from '../../assets/logo.svg'

interface FormData {
  email: string;
}

const schema = Yup.object().shape({
  email: Yup.string()
    .required('E-mail obrigatório')
    .email('Digite um e-mail válido'),
})

export function ForgotPassword() {
  const navigation = useNavigation()
  const { control, handleSubmit, reset, formState: { errors } } = useForm({ resolver: yupResolver(schema)})

  function handleForgotPassword(form: FormData) {
    console.log(form)
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: '#121214' }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled
    >
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flex: 1 }}
      >
        <Container>
          <Logo />
          <Box>
            <Box>
              <Title>Recuperar senha</Title>
              <Description>Coloque seu e-mail para receber instruções {'\n'}para alterar sua senha.</Description>
              <InputCustomer
                name="email"
                control={control}
                iconName='mail'
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Seu e-mail de cooperado"
                error={errors.email && errors.email.message}
              />
            </Box>
            <Box>
              <ButtonCustomer
                title='Enviar'
                type='Entrada'
                onPress={handleSubmit(handleForgotPassword)}
              />
            </Box>
          </Box>
          <BorderlessButton
            onPress={() => {navigation.navigate('SignIn')}}
          >
            <Description >Voltar ao login</Description>
          </BorderlessButton>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}
