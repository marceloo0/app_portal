import React from 'react'
import { Fontisto, Ionicons } from '@expo/vector-icons'
import { Container, Icon } from './styles'

import Logo from '../../assets/logo.svg'

interface HeaderProps {
  paidleave?: boolean
  profile?: boolean
  onPress?: () => void
}

export const Header: React.FC<HeaderProps> = ({ paidleave = false, profile = false, onPress }) => {
  return (
    <Container>
      <Logo height={35} />
      {paidleave &&
        <Icon onPress={onPress}>
          <Fontisto name="history" size={21} color='#FFFFFF' />
        </Icon>
      }

      {profile &&
        <Icon onPress={onPress}>
          <Ionicons name="settings-sharp" size={21} color='#FFFFFF' />
        </Icon>
      }

    </Container>
  )
}
