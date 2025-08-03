import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000/api", // Replace with your backend base URL if different
  withCredentials: true, // If you're using HTTP-only cookies for auth
});

export default instance;
