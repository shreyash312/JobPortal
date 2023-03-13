import axios from "axios";
import { BASE_API_URL } from "../common/constant";
import { AuthHeader } from "./auth.header";

const API_URL = BASE_API_URL + "/api/recruiter";

class RecruiterService {

    saveJobs(jobs) {
        return axios.post(API_URL + "/saveJobs", jobs, { headers: AuthHeader() });
    }

    getAllJobs() {
        return axios.get(API_URL + "/getAllJobs", { headers: AuthHeader() });
    }

    getAllJob() {
        return axios.get(API_URL + "/getAllJobsForAdmin");
    }

    getJobById(id) {
        return axios.get(API_URL + "/getJobById/" + id);
    }

    deleteJob(id) {
        return axios.delete(API_URL + "/deleteJob/" + id);
    }

    updateJob(job) {
        return axios.put(API_URL + "/updateJob/" + job.id, job)
    }

    getAllCandidate() {
        return axios.get(API_URL + "/getAllCandidates", { headers: AuthHeader() });
    }

    getCandidatesByJobId(id) {
        return axios.get(API_URL + "/getCandidateByJobId/" + id, { headers: AuthHeader() });
    }

    getCandidateById(id) {
        return axios.get(API_URL + "/getCandidateById/" + id);
    }

    updateSchedule(id, date) {
        return axios.get(API_URL + "/updateInStatus?id=" + id + "&&date=" + date);
    }
    updateProfile(user) {
        return axios.post(API_URL + "/updateProfile", user);
    }

}

export default new RecruiterService();