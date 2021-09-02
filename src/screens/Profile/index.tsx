import React, { useEffect } from 'react'
import { View, ActivityIndicator } from 'react-native'

import { useAuth, useProfile } from '../../hooks'
import { Header, ButtonCustomer } from '../../components'

import * as S from './styles'

export function Profile() {
  const { signOut } = useAuth()
  const { getPerson, loading, data } = useProfile()

  useEffect(() => {
    getPerson()
  }, [])

  return (
    <S.Container>
      <Header profile={true} onPress={() => {}} />
      {loading
      ? <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
          <ActivityIndicator size={100} color="#009C3A" />
        </View>
      :
        <S.WapperTop>
          <S.Avatar source={{ uri: 'https://avatars.githubusercontent.com/u/62026017?v=4' }} />
          <S.WapperText>
            <S.Label>Ola,</S.Label>
            <S.Title>{data?.name}</S.Title>
          </S.WapperText>
          <S.WapperText>
            <S.Title>{data?.positionDisplay}</S.Title>
          </S.WapperText>
          <ButtonCustomer title='Sair' type='Saida' onPress={signOut} />
        </S.WapperTop>
      }
    </S.Container>
  )
}
