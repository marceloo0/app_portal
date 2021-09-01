import React, { useEffect } from 'react'
import { ActivityIndicator, View } from 'react-native'

import { Header, ProductionDay, Timeline } from '../../components'

import { Container } from './styles'

import { useWorkTime } from '../../hooks/useWorkTime'

export function Dashboard() {
  const { isLoading, getWorkTime } = useWorkTime()

  useEffect(() => {
    getWorkTime()
  }, [])

  return (
      <Container>
        <Header />
        {isLoading ?
          <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
            <ActivityIndicator size={100} color="#009C3A" />
          </View>
        : (
          <>
            <ProductionDay />
            <Timeline />
          </>
        )}
      </Container>
  )
}
