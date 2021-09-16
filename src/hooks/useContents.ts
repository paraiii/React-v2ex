
import { V2exContext } from '../V2exContextProvider';
import { useContext } from 'react';


export const useContents = () => {

    const state = useContext(V2exContext)

    return state.contents;

}