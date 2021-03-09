import axios from "axios";

let mainUrl;
switch (process.env.NODE_ENV) {
    case "development":
        mainUrl = "";
        break;
    case "production" :
        mainUrl = "";

        break;
}

axios.defaults.headers.Authorization = "Bearer ";
axios.defaults.withCredentials = false;

export function apiGetLead(lead) {
    return axios.get(mainUrl + "manual/request/" + lead);
}

export function apiGetDepartmens() {
    return axios.get(mainUrl + "manual/loan-center/get-items");
}
