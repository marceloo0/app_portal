import React from 'react'
import { addDays, format } from 'date-fns'
import { AntDesign } from '@expo/vector-icons'
import { Calendar as CalendarCustom, DateCallbackHandler, LocaleConfig } from 'react-native-calendars'
import { ptBr } from './locales'
import { useTheme } from 'styled-components'

LocaleConfig.locales['pt-br'] = ptBr
LocaleConfig.defaultLocale = 'pt-br'

export interface DayProps {
  dateString: string
  day: number
  month: number
  year: number
  timestamp: number
}

interface MarkedDateProps {
  [date: string]: {
    color?: string
    textColor?: string
    disabled?: boolean
    selected?: boolean
    marked?: boolean
    dotColor: string
  }
}

interface DataProps {
  date: string
  paidLeave: string
  color: string
}

interface CalendarProps {
  data: DataProps[]
  onDayPress: DateCallbackHandler
  onMonthChange: DateCallbackHandler
}



export const Calendar: React.FC<CalendarProps> = ({ onDayPress, data, onMonthChange }) => {
  const theme = useTheme()
  const baseDate = new Date()

  const formatDate = (date = new Date()) => format(addDays(date, 1), 'yyyy-MM-dd')

  const getMarkedDates = (baseDate: Date) => {
    const markedDates: MarkedDateProps = {}

    // markedDates[formatDate(new Date(baseDate))] = { dotColor: 'green', marked: true }

    data.forEach((appointment) => {
      const formattedDate = formatDate(new Date(appointment.date))
      markedDates[formattedDate] = {
        ...markedDates[formattedDate],
        dotColor: appointment.color,
        marked: true,
      }
    })

    return markedDates
  }

  return (
    <CalendarCustom
      style={{
        width: 350,
        marginTop: 24,
        borderWidth: 0.5,
        borderColor: theme.colors.text_detail,
        borderRadius: 8,
        paddingVertical: 12,
      }}
      current={formatDate(baseDate)}
      renderArrow={(direction) => (
        <AntDesign name={direction === 'left' ? 'arrowleft' : 'arrowright'} size={24} color={theme.colors.main} />
      )}
      hideExtraDays={true}
      headerStyle={{
        borderBottomWidth: 0.5,
        borderBottomColor: theme.colors.text_detail,
        paddingBottom: 10,
      }}
      onDayPress={onDayPress}
      onMonthChange={onMonthChange}
      markedDates={getMarkedDates(baseDate)}
      theme={{
        backgroundColor: theme.colors.background_primary,
        calendarBackground: theme.colors.background_primary,
        selectedDayTextColor: theme.colors.main,
        textSectionTitleColor: '#b6c1cd',
        selectedDayBackgroundColor: 'green',
        todayTextColor: theme.colors.main,
        dayTextColor: theme.colors.text,
        textDisabledColor: '#d9e1e8',
        monthTextColor: theme.colors.main,
        textMonthFontWeight: 'bold',
        textDayHeaderFontWeight: '300',
        textMonthFontSize: 18,
      }}
    />
  )
}
