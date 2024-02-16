import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
  Divider,
  Paper,
  Box,
  Container,
  Rating,
  Pagination, // Pagination コンポーネントをインポート
} from "@mui/material";
import { format, parseISO } from "date-fns";

function Comment({ comments }) {
  //ページ番号管理
  const [currentPage, setCurrentPage] = useState(1);
  // 1ページあたりのコメント数[修正候補]柔軟に変えられるようにしても良い
  const commentsPerPage = 20;

  // 現在のページに表示するコメントの計算
  const indexOfLastComment = currentPage * commentsPerPage;
  const indexOfFirstComment = indexOfLastComment - commentsPerPage;
  //indexOfFirstComment(例:0)からindexOfLastComment(例：20-1=19)番目のindexの範囲で配列を返す(LastCommentのindex自体は含まない)
  //->現在画面に表示すべきコメント一覧の配列を生成->これをmapで表示する
  const currentComments = comments.slice(
    indexOfFirstComment,
    indexOfLastComment
  );

  // 全ページ数の計算(Math.ceil : 小数点切り上げ)
  const pageCount = Math.ceil(comments.length / commentsPerPage);

  // コメントが空の場合に表示するメッセージ
  const noCommentsMessage = (
    <Typography sx={{ textAlign: "center", my: 2, backgroundColor: "#f5f5f5" }}>
      コメントはまだありません。ぜひレビューをお願いします!
    </Typography>
  );

  return (
    <Box sx={{ marginTop: 3 }}>
      <Container maxWidth="sm">
        <Paper elevation={0}>
          {/* コメントが
           ある : Listで表示
           ない : 専用のコメント表示
           comments && comments.lengthという形式に関しては詳しくはJavaScriptの短絡評価（short-circuit evaluation）を参照 */}
          {comments && comments.length > 0 ? (
            <List>
              <Typography
                sx={{
                  "&:last-child": {
                    borderBottom: "none",
                  },
                  fontSize: "1rem", // フォントサイズを大きく
                  fontWeight: "bold", // フォントを太く
                }}
              >
                コメント一覧
              </Typography>
              {currentComments.map((comment, index) => (
                <React.Fragment key={comment.id}>
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar alt={comment.postedName} />
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        <>
                          {comment.postedName}
                          <Rating
                            name="read-only"
                            value={comment.totalScore}
                            readOnly
                            sx={{
                              fontSize: "1rem",
                              paddingRight: "0.5rem",
                            }}
                          />
                        </>
                      }
                      secondary={
                        <>
                          <Typography
                            component="span"
                            variant="body2"
                            color="textPrimary"
                          >
                            {comment.comment}
                          </Typography>
                          <Typography
                            component="span"
                            variant="caption"
                            display="block"
                            color="textSecondary"
                          >
                            {comment.postTime &&
                              format(
                                parseISO(comment.postTime),
                                "HH:mm yyyy/MM/dd"
                              )}
                            {/* 日時を "HH:mm yyyy/MM/dd"形式で表示*/}
                          </Typography>
                        </>
                      }
                    />
                  </ListItem>
                  {index < currentComments.length - 1 && (
                    <Divider variant="inset" component="li" />
                  )}
                  {/* 区切り線がリストアイテムの内側に挿入される */}
                </React.Fragment>
              ))}
            </List>
          ) : (
            // コメントが空の場合に専用のメッセージを表示
            noCommentsMessage
          )}
        </Paper>
        {pageCount > 1 && (
          <Pagination
            count={pageCount} //総ページ数
            page={currentPage} //現在のページ番号
            onChange={(event, page) => setCurrentPage(page)} //ページ変更時、新しいページ番号をcurrentPageに設定
            sx={{ marginTop: 2 }}
          />
        )}
      </Container>
    </Box>
  );
}

export default Comment;
