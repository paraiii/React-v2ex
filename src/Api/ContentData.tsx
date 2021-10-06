import axios from 'axios';
import { config } from '../config';


export const GetContentData = () => {
    return axios({
        method: "GET",
        url: `${config["baseUrl"]}/latest`
    });
}
