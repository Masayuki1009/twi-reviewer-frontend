import React from "react";
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
} from "@mui/material";

// Dummy data for the list items
const dummyData = [
  {
    name: "ツイッタラー1",
    image: "/path/to/avatar1.jpg",
    details: "詳細情報1",
  },
  {
    name: "ツイッタラー2",
    image: "/path/to/avatar2.jpg",
    details: "詳細情報2",
  },
  {
    name: "ツイッタラー3",
    image: "/path/to/avatar3.jpg",
    details: "詳細情報3",
  },
  // ...other YouTubers' data
];

function RankingList() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "white",
        marginBottom: "3rem",
      }}
    >
      <Container maxWidth="sm">
        <Paper elevation={0} sx={{ width: "100%" }}>
          <List>
            {dummyData.map((data, index) => (
              <ListItem
                key={index}
                alignItems="flex-start"
                sx={{
                  borderBottom: "1px solid #e0e0e0",
                  "&:last-child": {
                    borderBottom: "none",
                  },
                }}
              >
                <ListItemAvatar>
                  <Avatar
                    alt={data.name}
                    src={data.image}
                    sx={{ borderRadius: 0 }} // Square avatars
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={data.name}
                  secondary={
                    <Typography
                      component="span"
                      variant="body2"
                      sx={{ display: "inline" }}
                      color="textPrimary"
                    >
                      {data.details}
                    </Typography>
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
