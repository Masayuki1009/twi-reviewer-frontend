// components/CategoryList.js
import React from "react";
import { Box, Grid, Typography, Paper, Container } from "@mui/material";

const categories = [
  "カテゴリー1",
  "カテゴリー2",
  "カテゴリー3",
  "カテゴリー4",
  "カテゴリー5",
  "カテゴリー6",
  "カテゴリー7",
  "カテゴリー8",
  "カテゴリー9",
  "カテゴリー10",
];

function CategoryList() {
  return (
    <Box
      sx={{
        backgroundColor: "white",
      }}
    >
      <Paper
        elevation={0}
        sx={{ width: "100%", backgroundColor: "background.paper" }}
      >
        <Grid container spacing={2}>
          {categories.map((category, index) => (
            <Grid item xs={6} sm={4} md={3} key={index}>
              <Box
                sx={{
                  textAlign: "center",
                  padding: 1,
                  backgroundColor: "white",
                }}
              >
                <Typography variant="subtitle1">{category}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Box>
  );
}

export default CategoryList;
