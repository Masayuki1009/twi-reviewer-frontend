import React from "react";
import { Container, Box } from "@mui/material";
import SearchForm from "../SearchForm";
// 他のコンポーネントのインポートもここで行う

export const Home = () => {
  return (
    // Boxコンポーネントで全体をラップし、背景色をグレーに設定
    <Box sx={{ backgroundColor: "#f5f5f5" }}>
      {/* Containerのスタイルをここで調整する */}
      <Container maxWidth="sm" sx={{ my: 4, py: 2 }}>
        <SearchForm />
        {/* 他のコンポーネントや要素があれば、ここに追加します */}
      </Container>
    </Box>
  );
};
