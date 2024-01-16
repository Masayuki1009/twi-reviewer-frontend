import React, { useEffect, useState } from "react";
import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
  Paper,
  Box,
  Container,
  Rating,
} from "@mui/material";
import { homeService } from "../../services/home-service";
import { Link } from "react-router-dom";

function RankingList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    homeService.getData().then((fetchedData) => {
      setData(fetchedData);
    });
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "white",
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={0}
          sx={{ width: "100%", bgcolor: "background.paper" }}
        >
          <List>
            <Typography
              sx={{
                borderBottom: "1px solid #e0e0e0",
                "&:last-child": {
                  borderBottom: "none",
                },
                fontSize: "1rem", // フォントサイズを大きく
                fontWeight: "bold", // フォントを太く
                fontFamily: "'Comic Neue', cursive", // Google Fontsなどからインポートしたポップなフォントを指定
                borderBottom: "1px solid #e0e0e0", // 下線を引く
              }}
            >
              人気ツイッタラー一覧
            </Typography>
            {data.map((data, index) => (
              <ListItem
                key={index}
                alignItems="flex-start"
                sx={{
                  borderBottom: "1px solid #e0e0e0",
                  "&:last-child": {
                    borderBottom: "none",
                  },
                }}
                component={Link} // ListItemをLinkコンポーネントとして使う
                to={`/detail/${data.id}`} // 遷移先のURLを指定
              >
                <ListItemAvatar>
                  <Avatar
                    alt={data.name}
                    src={data.image}
                    sx={{ borderRadius: 0 }} // Square avatars
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Link
                      to={`/detail/${data.id}`}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      {data.name}
                    </Link>
                  }
                  secondary={
                    <>
                      <Rating
                        name="read-only"
                        value={data.averageTotalValue}
                        readOnly
                        sx={{
                          fontSize: "1rem",
                          paddingRight: "0.5rem",
                          // top: ,
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
                        {data.averageTotalValue.toFixed(2)}
                        {/* toFixed(2) : 小数第二位まで表示 */}
                      </Typography>
                    </>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Paper>
      </Container>
    </Box>
  );
}

export default RankingList;
