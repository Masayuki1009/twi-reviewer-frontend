import React from "react";
import { Container, Box } from "@mui/material";
import SearchForm from "../../components/SearchForm";
import RankingList from "../../components/RankingList";
import CategoryList from "../../components/CategoryList";
// 他のコンポーネントのインポートもここで行う

export const Home = () => {
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
        <SearchForm />
        <RankingList />
        <CategoryList />
        {/* 他のコンポーネントや要素があれば、ここに追加します */}
      </Container>
    </Box>
  );
};
