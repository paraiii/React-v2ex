import axios from 'axios';
import { config } from '../config';

export const NodeData = (id: string) => {
    return axios({
        method: "GET",
        // url: `${config["baseUrl"]}/nodes/${id}`
        url: `${config["baseUrl"]}/nodes`

    });
}
