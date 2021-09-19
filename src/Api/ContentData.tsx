import axios from 'axios';

export const GetContentData = () => {
    return axios({
        method: "GET",
        url: "http://localhost:4100/latest"
    });
}
