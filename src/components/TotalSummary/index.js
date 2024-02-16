import React from "react";
import {
  Box,
  Container,
  Typography,
  Paper,
  Avatar,
  Rating,
} from "@mui/material";
import { Radar } from "react-chartjs-2"; // レーダーチャートのコンポーネントをインポート
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js"; // ChartJSのコア機能をインポート

// Chart.jsの登録
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export const TotalSummary = ({ detailData }) => {
  // レーダーチャートのデータとオプションを設定
  const radarData = {
    labels: detailData.reviewCategoryNameList.map((c) => c.categoryName), // カテゴリ名
    datasets: [
      {
        data: detailData.reviewCategoryAverageScoreList.map(
          (s) => s.averageScore
        ), // スコア
        backgroundColor: "rgba(29, 161, 242, 0.2)",
        borderColor: "rgba(29, 161, 242, 0.8)",
        borderWidth: 3,
      },
    ],
  };

  const radarOptions = {
    maintainAspectRatio: true,
    aspectRatio: 1.75, // これを高くするとチャートがよりコンパクトになります
    scales: {
      r: {
        suggestedMin: 0,
        suggestedMax: 5,
        pointLabels: {
          font: {
            size: 11, // フォントサイズを14に変更
          },
          color: "#333", // フォントの色をダークグレーに変更
        },
        ticks: {
          stepSize: 1, // 1点刻みに変更
          //レーダー内のフォント調整
          font: {
            size: 11, // フォントサイズ
            weight: "bold", // フォントウェイト
          },
        },
      },
    },

    plugins: {
      legend: {
        display: false, //上記の項目の欄を削除
      },
    },
    // その他のグローバルオプション
  };

  return (
    <Container maxWidth="md">
      <Paper sx={{ padding: 3, marginTop: 5 }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ marginRight: 2 }}>
            <Avatar alt={detailData.name} src={detailData.image} />
          </Box>
          <Box>
            <Typography>{detailData.name}</Typography>
            <Rating
              name="read-only"
              value={detailData.averageTotalValue}
              readOnly
              sx={{
                fontSize: "1rem",
                paddingRight: "0.5rem",
              }}
            />
            <Typography
              component="span"
              variant="body2"
              sx={{
                fontWeight: "bold", // 太字にする
                fontSize: "1rem", // フォントサイズを大きくする
                position: "relative", // 相対位置
                top: "-0.1rem", // ほんの少しだけ上に移動
              }}
              color="textPrimary"
            >
              {detailData.averageTotalValue.toFixed(2)}
            </Typography>
          </Box>
        </Box>
      </Paper>
      {/* レーダーチャートを表示 */}
      <Box sx={{ marginTop: 3, backgroundColor: "white" }}>
        <Radar data={radarData} options={radarOptions} />
      </Box>
    </Container>
  );
};

export default TotalSummary;
