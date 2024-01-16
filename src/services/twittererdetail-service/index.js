import apiClient from "../../api/apiClient";

const getTwittererDetail = () => {
  return apiClient.get(`/detail/${id}`).then((response) => response.data);
};

export const homeService = Object.freeze({
  getData,
  getTwittererDetail,
});
