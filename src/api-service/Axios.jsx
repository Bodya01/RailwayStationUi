import axios from "axios";

const Axios = axios.create({ timeout: 20000 });

Axios.interceptors.request.use(
    async (req) => {
        return req;
    },

    async (error) => {

        return Promise.reject(error);
    }
)

Axios.interceptors.response.use(
    async (response) => {
        return response;
    },
);

export default Axios;