import React, { useEffect } from 'react'
import { View, ActivityIndicator } from 'react-native'

import { useAuth, useProfile } from '../../hooks'
import { Header, ButtonCustomer } from '../../components'

import { Container, Title, WapperTop, WapperText, Label, Avatar } from './styles'

export function Profile() {
  const { signOut } = useAuth()
  const { getPerson, loading, data } = useProfile()

  useEffect(() => {
    getPerson()
  }, [])

  return (
    <Container>
      <Header profile={true} onPress={() => {}} />
      {loading
      ? <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
          <ActivityIndicator size={100} color="#009C3A" />
        </View>
      :
        <WapperTop>
          <Avatar source={{ uri: 'https://avatars.githubusercontent.com/u/62026017?v=4' }} />
          <WapperText>
            <Label>Ola,</Label>
            <Title>{data?.name}</Title>
          </WapperText>
          <WapperText>
            <Title>{data?.positionDisplay}</Title>
          </WapperText>
          <ButtonCustomer title='Sair' type='Saida' onPress={signOut} />
        </WapperTop>
      }
    </Container>
  )
}
