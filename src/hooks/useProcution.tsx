import { useContext } from 'react';
import { ProductionContext } from '../contexts/ProductionContext'

export function useProduction() {
  const value = useContext(ProductionContext)

  return value;
}
