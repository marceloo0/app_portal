import { useContext } from 'react';
import { WorkTimeContext } from '../contexts/WorkTimeContext'

export function useWorkTime() {
  const value = useContext(WorkTimeContext)

  return value;
}
