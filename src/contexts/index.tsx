import React from 'react'

import { AuthContextProvider } from './AutContext'
import { WorkTimeContextprovider } from './WorkTimeContext'
import { NotificacoesContextProvider } from './NotificacoesContext'
import { PaidLeaveContextProvider } from './PaidLeaveContext'
import { ProfileContextProvider } from './ProfileContext'
import { ProductionContextProvider } from './ProductionContext'

const AppProvider: React.FC = ({ children }) => (
  <AuthContextProvider>
    <WorkTimeContextprovider>
      <NotificacoesContextProvider>
        <PaidLeaveContextProvider>
          <ProfileContextProvider>
            <ProductionContextProvider>
              {children}
            </ProductionContextProvider>
          </ProfileContextProvider>
        </PaidLeaveContextProvider>
      </NotificacoesContextProvider>
    </WorkTimeContextprovider>
  </AuthContextProvider>
)

export default AppProvider
