import React, { useState } from "react";
import { Grid, TextField, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function SearchForm() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    console.log(searchTerm);
    // ここで API リクエストを行う
  };

  return (
    <Grid
      container
      spacing={1}
      alignItems="center"
      sx={{ backgroundColor: "white", padding: 1, borderRadius: 1 }}
    >
      <Grid item xs>
        <TextField
          fullWidth
          label="ツイッター名で検索"
          variant="outlined"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Grid>
      <Grid item>
        <IconButton
          color="primary"
          aria-label="search"
          component="span"
          onClick={handleSearch}
        >
          <SearchIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
}

export default SearchForm;
