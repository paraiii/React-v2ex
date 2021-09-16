import { useContext} from 'react';
import { V2exContext } from '../V2exContextProvider';

export const useHotList= () => {

    const state = useContext(V2exContext)

    return state.hotList;
}