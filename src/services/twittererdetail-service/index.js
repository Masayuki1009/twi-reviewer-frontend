import apiClient from "../../api/apiClient";

//詳細情報取得
const getTwittererDetail = (id) => {
  return apiClient.get(`/detail/${id}`).then((response) => response.data);
};
//コメント取得
const getTwittererComment = (id) => {
  return apiClient
    .get(`/detail/comment/${id}`)
    .then((response) => response.data);
};

export const twittererDetailService = Object.freeze({
  getTwittererDetail,
  getTwittererComment,
});
