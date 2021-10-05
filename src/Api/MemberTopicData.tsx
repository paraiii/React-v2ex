import axios from 'axios';

export const MemberTopicData = (username:string) => {
    return axios({
        method: "GET",
        url: `http://localhost:4100/member-topics/${username}`
        //$-->string interpolation
    });
}
