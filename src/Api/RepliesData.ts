import axios from 'axios';

export const RepliesData = (topic_id:string) => {
    return axios({
        method: "GET",
        url: `http://localhost:4100/replies/${topic_id}`
    });
}
