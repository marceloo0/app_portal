import React, { createContext, useEffect, useState } from "react";
import { MY_PRODUCTION } from '../constants/endpoints/my_production_history'

import api from '../services/api'

interface TimelineProps {
  id: string
  check_in: string
  position: number
  worktime_clock: string
}

interface ItemDataProps {
  production: string
  paid_leave: string
  date: string
  balance: string
  timeline: TimelineProps[]
}

interface ProductionContextData {
  data: ItemDataProps[]
  loading: boolean
  getProducton:(year: string, month: string) => void
}

export const ProductionContext = createContext({} as ProductionContextData )

export const ProductionContextProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<ItemDataProps[]>([])
  const [loading, setLoading] = useState(false)

  const getProducton = async (year: string, month: string) => {
    try {
      const { data } = await api.get(MY_PRODUCTION, {
        params: { year, month },
      })

      const formatedData = Object.values(data).map((item: any) => {
          return {
            production: item.production,
            paid_leave: item.paid_leave,
            date: item.date,
            balance: item.balance,
            timeline: item.timeline,
          }
      })
      setData(formatedData)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <ProductionContext.Provider value={{ getProducton, data, loading }}>
      {children}
    </ProductionContext.Provider>
  )
}
