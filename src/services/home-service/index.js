// src/api/apiService.js
import apiClient from "../../api/apiClient";

const getData = () => {
  return apiClient.get("/home").then((response) => response.data);
};

export const homeService = Object.freeze({
  getData,
});
