import axios from 'axios';
import { config } from '../config';

export const TopicData = (id:string) => {
    return axios({
        method: "GET",
        url: `${config["baseUrl"]}/topic/${id}`
    });
}
