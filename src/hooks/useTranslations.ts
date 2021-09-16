import { DefaultTranslation, LocalizationContext } from '../LocalizationContextProvider';
import { useContext } from 'react';


export const useTranslations = () => {

    const state = useContext(LocalizationContext)

    return state ?? DefaultTranslation;
    //属性方法的get set，返回state的值，如果没有就返回DefaultTranslation
};