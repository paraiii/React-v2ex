import axios from 'axios';

export const MemberData = (username:string) => {
    return axios({
        method: "GET",
        url: `http://localhost:4100/user/${username}`
    });
}
// export const MemberData = (id:string) => {
//     return axios({
//         method: "GET",
//         url: `http://localhost:4100/topic/${id}`
//         //$-->string interpolation
//     });
// }
