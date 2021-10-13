import axios from 'axios';
import { config } from '../config';

export const NodeTopicsData = (node_id: string) => {
    return axios({
        method: "GET",
        url: `${config["baseUrl"]}/node-topics/${node_id}`

    });
}
