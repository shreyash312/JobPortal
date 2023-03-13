import axios from "axios";
import { BASE_API_URL } from "../common/constant";
import { AuthHeader } from "./auth.header";

const API_URL = BASE_API_URL + "/api/auth"

class homeService {
    register(user) {
        return axios.post(API_URL + "/register", user);
    }

    login(user) {
        return axios.post(API_URL + "/login", user);
    }

    checkEmailAndMob(email, mob) {
        return axios.get(API_URL + "/forgotPassword/" + email + "/" + mob);
    }
    resetPassword(user) {
        return axios.post(API_URL + "/updatePassword/", user);
    }

    applyJob(candidates) {
        return axios.post(API_URL + "/applyJob", candidates, { headers: AuthHeader() });
    }

    getAppliedJob() {
        return axios.get(API_URL + "/getAppliedJob", { headers: AuthHeader() });
    }


}

export default new homeService();