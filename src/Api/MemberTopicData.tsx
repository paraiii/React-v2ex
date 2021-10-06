import axios from 'axios';
import { config } from '../config';

export const MemberTopicData = (username:string) => {
    return axios({
        method: "GET",
        url: `${config["baseUrl"]}/member-topics/${username}`
    });
}
