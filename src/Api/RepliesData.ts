import axios from 'axios';
import { config } from '../config';

export const RepliesData = (topic_id:string) => {
    return axios({
        method: "GET",
        url: `${config["baseUrl"]}/replies/${topic_id}`
    });
}
