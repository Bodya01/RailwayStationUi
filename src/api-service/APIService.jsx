import Axios from "./Axios";

const baseHeaders = {
    headers: {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest"
    }
};

const APIService = {
    get (url, params) {
        return Axios.get(url, Object.assign({}, baseHeaders, params));
    },

    post (url, data, params) {
        return Axios.post(url, data, Object.assign({}, baseHeaders, params));
    },

    put (url, data, params) {
        return Axios.put(url, data, Object.assign({}, baseHeaders, params));
    },

    delete (url, params) {
        return Axios.delete(url, Object.assign({}, baseHeaders, params));
    }
};

export default APIService;