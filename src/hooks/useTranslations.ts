import { LocalizationContext } from '../LocalizationContextProvider';
import { useContext } from 'react';


export const useTranslations = () => {

    const state = useContext(LocalizationContext)

    return state.cn
}