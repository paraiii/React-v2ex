import axios from 'axios';

export const MemberData = (username:string) => {
    return axios({
        method: "GET",
        url: `http://localhost:4100/members/${username}`
    });
}
