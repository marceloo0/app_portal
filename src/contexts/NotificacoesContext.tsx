import React, { createContext, useState } from "react";
import * as Notifications from 'expo-notifications';

interface NotificationProps {
  hour: Date
  type: 'entrada' | 'saída'
}

export const NotificacoesContext = createContext({} )

export const NotificacoesContextProvider: React.FC = ({ children }) => {

  return (
    <NotificacoesContext.Provider value={{}}>
      {children}
    </NotificacoesContext.Provider>
  )
}
