import React, { createContext, useEffect, useState } from "react";
import {
  PAID_LEAVE_REFERENCE_PERIODS,
  PAID_LEAVE
} from '../constants/endpoints/paid_leave'
import api from '../services/api'

interface TimeLineItem {
  date: string
  days: number | null
}

interface TypeBalanceItem {
  approved: number
  obtained: number
  remaining: number
}

interface ReferencesPeriodsProps {
  start: string
  end: string
  key: string
}

interface PaidLeaveContextData {
  timeline: TimeLineItem[] | []
  annual_leaves: TypeBalanceItem[] | []
  days_off: TypeBalanceItem[] | []
  referencesPeriods: ReferencesPeriodsProps[]
  referencePeriodStart: string
  paidleaveLoading: boolean
  getPaidLeave: (reference_period: string) => Promise<void>
  getReferencesPeriods: () => Promise<void>
}

export const PaidLeaveContext = createContext({} as PaidLeaveContextData)

export const PaidLeaveContextProvider: React.FC = ({ children }) => {
  const [timeline, setTimeline] = useState<TimeLineItem[]>([])
  const [annual_leaves, setAnnual_leaves] = useState<TypeBalanceItem[]>([])
  const [days_off, setDays_off] = useState<TypeBalanceItem[]>([])
  const [referencePeriodStart, setReferencePeriodStart] = useState('')
  const [paidleaveLoading, setPaidleaveLoading] = useState(false)
  const [referencesPeriods, setReferencesPeriods] = useState<ReferencesPeriodsProps[]>([])

  const getPaidLeave = async ( reference_period: string ) => {
    try {
      setPaidleaveLoading(true)

      const { data } = await api.get(PAID_LEAVE, {
        params: { reference_period_start: reference_period },
      });

      setTimeline(data[0].timeline)
      setAnnual_leaves(data[0].balance.annual_leaves)
      setDays_off(data[0].balance.days_off)
      setReferencePeriodStart(data[0].reference_period_start)

      setPaidleaveLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  const getReferencesPeriods = async () => {
    try {
      const { data } = await api.get(PAID_LEAVE_REFERENCE_PERIODS);
      const formatted = data.map(([start, end, index]) => ({ start, end, key: index }));
      setReferencesPeriods(formatted)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getReferencesPeriods()
  }, [])


  return (
    <PaidLeaveContext.Provider value={{
      timeline,
      annual_leaves,
      days_off,
      referencePeriodStart,
      paidleaveLoading,
      referencesPeriods,
      getPaidLeave,
      getReferencesPeriods
    }}>
      {children}
    </PaidLeaveContext.Provider>
  )
}
