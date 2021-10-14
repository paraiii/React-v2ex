import axios from 'axios';
import { config } from '../config';

export const MemberData = (username:string) => {
    return axios({
        method: "GET",
        url: `${config["baseUrl"]}/user/${username}`
    });
}
