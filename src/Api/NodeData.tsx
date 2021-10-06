import axios from 'axios';
import { config } from '../config';

export const NodeData = (name:string) => {
    return axios({
        method: "GET",
        url: `${config["baseUrl"]}/nodes`
    });
}
