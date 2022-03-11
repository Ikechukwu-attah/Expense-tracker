import axios from "axios"
const access_token = localStorage.getItem("userToken")
axios.defaults.headers.common.Authorization = "Bearer " + access_token;
export default axios