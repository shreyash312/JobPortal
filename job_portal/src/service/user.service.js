import axios from "axios";
import { BASE_API_URL } from "../common/constant";
import { AuthHeader } from "./auth.header";

const API_URL = BASE_API_URL + "/api/user"

class userService {

    applyJob(candidates) {
        return axios.post(API_URL + "/applyJob", candidates, { headers: AuthHeader() });
    }

    getAppliedJob() {
        return axios.get(API_URL + "/getAppliedJob", { headers: AuthHeader() });
    }

    getAllJobs() {
        return axios.get(API_URL + "/getAllJobs");
    }

    checkAppliedJob(uid, jid) {
        return axios.get(API_URL + "/checkAppliedJob/" + uid + "/" + jid);
    }

    search(ch) {
        return axios.get(API_URL + "/search?ch=" + ch);
    }

    getAllUser() {
        return axios.get(API_URL + "/getAllUser");
    }

    getAllRecruiter() {
        return axios.get(API_URL + "/getAllRecruiter");
    }
}

export default new userService();