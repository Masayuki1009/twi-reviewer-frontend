import axios from "axios";
// APIクライアントクラス

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || "http://localhost:8080",
});

export default apiClient;
