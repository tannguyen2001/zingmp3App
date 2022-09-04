import axios from "axios";

const httpClient = axios.create({
  baseURL: "https://api.thanhlam.gq/api/",
  headers: {
    "Content-Type": "application/json",
    // anything you want to add to the headers
  },
});
export default httpClient;
