import { useSelector } from 'react-redux'
import type { RootState } from '../../../../providers/store/store'
export const useAppSelector = useSelector.withTypes<RootState>()