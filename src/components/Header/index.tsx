import React from 'react'
import { Fontisto, Ionicons } from '@expo/vector-icons'
import * as S from './styles'

import Logo from '../../assets/logo.svg'

interface HeaderProps {
  paidleave?: boolean
  profile?: boolean
  onPress?: () => void
}

export const Header: React.FC<HeaderProps> = ({ paidleave = false, profile = false, onPress }) => {
  return (
    <S.Container>
      <Logo height={35} />
      {paidleave &&
        <S.Icon onPress={onPress}>
          <Fontisto name="history" size={21} color='#FFFFFF' />
        </S.Icon>
      }

      {profile &&
        <S.Icon onPress={onPress}>
          <Ionicons name="settings-sharp" size={21} color='#FFFFFF' />
        </S.Icon>
      }

    </S.Container>
  )
}
