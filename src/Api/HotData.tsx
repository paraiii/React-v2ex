import axios from 'axios';
import { config } from '../config';

export const GetHotData = () => {
    return axios({
        method: "GET",
        url: `${config["baseUrl"]}/hot`
    });
}
