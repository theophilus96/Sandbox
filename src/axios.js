import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-sandbox-d017b.cloudfunctions.net/api", //API (cloud function) URL
});

export default instance;
//https://us-central1-sandbox-d017b.cloudfunctions.net/api
//http://localhost:5001/sandbox-d017b/us-central1/api