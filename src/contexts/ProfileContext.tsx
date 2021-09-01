import React, { createContext, useEffect, useState } from "react";
import { CURRENT_PERSON } from '../constants/endpoints/person'
import api from '../services/api'

interface ProfileProps {
  id: string
  name: string
  avatar: string
  positionDisplay: string
  afiliationDate: string
}


interface ProfileContextData {
  getPerson: () => void
  loading: boolean
  data: ProfileProps | undefined
}

export const ProfileContext = createContext({} as ProfileContextData)

export const ProfileContextProvider: React.FC = ({ children }) => {
  const [loading, setLoadind] = useState(false)
  const [data, setData] = useState<ProfileProps>()

  const getPerson = async () => {
    try {
      setLoadind(true)
      const { data } = await api.get(CURRENT_PERSON)
      setData({
        id: data.id,
        name: data.name_display,
        avatar: data.avatar,
        positionDisplay: data.position_display.position_display,
        afiliationDate: data.affiliation_date
      })
      setLoadind(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getPerson()
  }, [])

  return (
    <ProfileContext.Provider value={{ loading, getPerson, data }}>
      {children}
    </ProfileContext.Provider>
  )
}
