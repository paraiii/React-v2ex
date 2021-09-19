import axios from 'axios';

export const GetHotData = () => {
    return axios({
        method: "GET",
        url: "http://localhost:4100/hot"
    });
}
