import axios from 'axios';

export default function HotListData() {
    return axios({
        method: "GET",
        url: "https://www.v2ex.com/api/topics/latest.json"
    });
}
