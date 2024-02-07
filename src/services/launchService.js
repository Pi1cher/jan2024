import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const launchService = {
    getAll: () => axiosService(urls.launches.base),
}

export {
    launchService
}