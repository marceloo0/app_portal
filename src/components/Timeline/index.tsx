import React, { useMemo } from 'react'
import { FlatList } from 'react-native'
import { Timers } from './Timers'
import { useWorkTime } from '../../hooks/useWorkTime'
import { format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR';

import {Container, Title1, Box } from './styles'

import Calendar from '../../assets/calendar.svg'

export function Timeline() {
  const { timeLine } = useWorkTime()

  const selectedDateAsText = useMemo(() => {
    return format(new Date(), "'Dia' dd 'de' MMMM 'de' yyyy", {
      locale: ptBR,
    });
  }, []);

  return (
    <Container>
      <Title1>{selectedDateAsText}</Title1>
      {timeLine.length === 0 ? (
        <Box>
          <Title1>Você ainda não registrou sua{'\n'} produção  hoje. </Title1>
          <Calendar style={{ marginTop: 24}} />
        </Box>
      ) : (
        <>
          <FlatList
            style={{ paddingBottom: 42 }}
            data={timeLine}
            keyExtractor={item => String(item.id)}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <Timers
                worktime={item.worktime_clock}
                type={item.check_in_display === 'Entrada' ? 'entrada' : 'saida'}
                position={item.position.toString()}
              />
            )}
          />
        </>
      )}
    </Container>
  )
}
