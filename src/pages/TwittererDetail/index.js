import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Box } from "@mui/material";

import TotalSummary from "../../components/TotalSummary";
import Comment from "../../components/Comment";

import { twittererDetailService } from "../../services/twittererdetail-service";
// 他のコンポーネントのインポートもここで行う

export const TwitterDetail = () => {
  let { id } = useParams(); //urlのid取得
  const [detailData, setDetailData] = useState(null);
  const [comments, setComments] = useState([]);

  //ローディング管理
  const [detailLoading, setDetailLoading] = useState(true);
  const [commentsLoading, setCommentsLoading] = useState(true);

  //エラー管理
  const [error, setError] = useState(null);

  useEffect(() => {
    // ツイッタラーの詳細情報を取得
    twittererDetailService
      .getTwittererDetail(id)
      .then((fetchedData) => {
        setDetailData(fetchedData); // ステートを設定
      })
      .catch((err) => {
        setError("詳細データの取得に失敗しました。");
        console.error("[summary data]Detail fetch error:", err);
      })
      .finally(() => {
        setDetailLoading(false);
      });

    // コメントデータを取得
    twittererDetailService
      .getTwittererComment(id)
      .then((fetchedData) => {
        setComments(fetchedData);
      })
      .catch((err) => {
        setError("コメントデータの取得に失敗しました。");
        console.error("[comment data]Comments fetch error:", err);
      })
      .finally(() => {
        setCommentsLoading(false);
      });
  }, [id]);

  if (error) {
    return <div>エラー: {error}</div>;
  }

  if (detailLoading || commentsLoading) {
    return <div>ローディング中...</div>;
  }

  return (
    // Boxコンポーネントで全体をラップし、背景色をグレーに設定
    <Box
      sx={{
        backgroundColor: "#f5f5f5",
        justifyContent: "center", // ここで中央揃えを設定
        py: 2, // py=padding-top & padding-bottom
      }}
    >
      {/* Containerのスタイルをここで調整する */}
      <Container maxWidth="sm">
        <TotalSummary detailData={detailData} />
        {/* detailData : useStateの部分のdetailData */}
        <Comment comments={comments} />
        {/* comments : useStateの部分のcomments */}
        {/* 他のコンポーネントや要素があれば、ここに追加します */}
      </Container>
    </Box>
  );
};
