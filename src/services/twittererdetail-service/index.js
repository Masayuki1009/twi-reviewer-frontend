import apiClient from "../../api/apiClient";

const getTwittererDetail = (id) => {
  return apiClient.get(`/detail/${id}`).then((response) => response.data);
};

export const twittererDetailService = Object.freeze({
  getTwittererDetail,
});
