import React, { createContext, useCallback, useEffect, useState } from "react";
import { WORKTIME_CLOCK } from '../constants/endpoints/daily_worktime_clock'
import moment from 'moment'
import api from '../services/api'
import { Alert } from "react-native";
import { parseISO } from 'date-fns'

interface TimeProps {
  check_in: boolean,
  check_in_display: string,
  id: number,
  latitude?: string,
  longitude?: string,
  minimum_break: boolean,
  position: number,
  rectification?: string,
  worktime_clock: string,
}

interface WorkTimeProps {
  had_minimum_break: string
  worked:	string
  working: string
  timeline:	TimeProps[]
}

interface WorkTimeContextData {
  timeLine: TimeProps[] | []
  isWorking: boolean
  isLoading: boolean
  // timer: Date
  timer: Date
  hadMinimumBreak: boolean
  saveWorkTime: (type: boolean, checkBoxValue: boolean) => void
  rectificationModalVisible: boolean
  getWorkTime: () => void
}

export const WorkTimeContext = createContext({} as WorkTimeContextData)

export const WorkTimeContextprovider: React.FC = ({ children }) => {
  const [data, setData] = useState<WorkTimeProps>()
  const [timeLine, setTimeLine] = useState<TimeProps[]>([])
  const [isWorking, setIsWorking] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [initialTimer, setInitialTimer] = useState('');
  const [hadMinimumBreak, setHadMinimumBreak] = useState(false);
  const [rectificationModalVisible, setRectificationModalVisible] = useState(false);
  const [timer, setTimer] = useState(new Date(parseISO(initialTimer)))
  const [time, setTime] = useState(0)

  const getWorkTime = useCallback( async() => {

    try {
      setIsLoading(true)

      const { data } = await api.get(WORKTIME_CLOCK)
      setData(data)
      setTimeLine(data?.timeline)
      setIsWorking(data?.working)
      setInitialTimer(data?.worked)
      setHadMinimumBreak(data?.had_minimum_break)

      setIsLoading(false)
    } catch (error) {
      console.log(error)
    }
  }, [])

  useEffect(() => {
    getWorkTime()
  }, [])

  useEffect(() => {
    setTimer(new Date(parseISO(initialTimer)))
  }, [initialTimer])

  useEffect(() => {
    let interval: NodeJS.Timer

    if (isWorking) {
      interval = setTimeout(() => {
        if (timer && typeof timer.getSeconds === 'function') {
          setTime(timer.setSeconds(timer.getSeconds() + 1))
        } else {
          clearInterval(interval);
        }
      }, 1000)
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isWorking, time])

  const saveWorkTime = useCallback( async (type, checkBoxValue) => {
    try {
      let requestBody;

      if (type === false && hadMinimumBreak === false) {
        requestBody = {
          check_in: type,
          minimum_break: checkBoxValue,
        };
      } else {
        requestBody = {
          check_in: type,
        };
      }

      await api.post(WORKTIME_CLOCK, requestBody);
      getWorkTime()
      setRectificationModalVisible(false)
    } catch (error: any) {
      if(error.response.data.error_code &&
        error.response.data.error_code ===
        'DAILY_WORKTIME_CLOCK_INVALID_NEW_CHECK_IN')
      {
        setRectificationModalVisible(true)
      }else {
        Alert.alert('Ocorreu um erro ao registrar ponto')
      }
    }
  }, [])

  return (
    <WorkTimeContext.Provider value={{
      timeLine,
      isWorking,
      timer,
      hadMinimumBreak,
      saveWorkTime,
      rectificationModalVisible,
      isLoading,
      getWorkTime
    }}>
      {children}
    </WorkTimeContext.Provider>
  )
}
