import { useContext } from 'react';
import { PaidLeaveContext } from '../contexts/PaidLeaveContext'

export function usePaidLeave() {
  const value = useContext(PaidLeaveContext)

  return value;
}
