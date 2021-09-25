import axios from 'axios';

export const TopicData = (id:string) => {
    return axios({
        method: "GET",
        url: `http://localhost:4100/topic/${id}`
        //$-->string interpolation
    });
}
