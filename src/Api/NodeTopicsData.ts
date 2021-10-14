import axios from 'axios';
import { config } from '../config';

export const NodeTopicsData = (id: string) => {
    return axios({
        method: "GET",
        url: `${config["baseUrl"]}/node-topics/${id}`

    });
}
