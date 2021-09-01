import React from 'react'
import * as Yup from 'yup'

import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { useNavigation } from '@react-navigation/native'

import { useAuth } from '../../hooks/useAuth'
import { InputCustomer, ButtonCustomer } from '../../components'

import Logo from '../../assets/logo.svg'

import {
  Container,
  Title,
  Box,
  Description
} from './styles'

interface FormData {
  username: string;
  password: string;
}

const schema = Yup.object().shape({
  username: Yup.string().required('Nome de usuário obrigatório'),
  password: Yup.string()
    .required('Senha obrigatória.')
    .min(6, 'Senha não pode ser menor que 6 caracteres.'),
})

export function SignIn() {
  const navigation = useNavigation()
  const { signIn } = useAuth()

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema)})

  function handleSignIn(form: FormData) {
    signIn(form)
  }

  function handleForgot() {
    reset();
    navigation.navigate('ForgotPassword')
  }

  return(
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
              <Title>Faça seu login</Title>
              <InputCustomer
                name="username"
                control={control}
                iconName='user'
                autoCapitalize="none"
                defaultValue=''
                autoCorrect={false}
                placeholder="Seu usuário de cooperado"
                error={errors.username && errors.username.message}
              />
              <InputCustomer
                name="password"
                control={control}
                iconName='lock'
                defaultValue=''
                secureTextEntry={true}
                placeholder="Sua senha de cooperado"
                error={errors.password && errors.password.message}
              />
            </Box>
            <Box>
              <ButtonCustomer
                title='Entrar'
                type='Entrada'
                onPress={handleSubmit(handleSignIn)}
              />
            </Box>
          </Box>
          <BorderlessButton
            onPress={handleForgot}
          >
            <Description>Esqueceu sua senha?</Description>
          </BorderlessButton>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}
