import axios from 'axios';

export const NodeData = (name:string) => {
    return axios({
        method: "GET",
        url: `http://localhost:4100/nodes/${name}`
        //$-->string interpolation
    });
}
