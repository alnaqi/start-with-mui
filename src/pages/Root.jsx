import { useState, useMemo } from "react";
import { Outlet } from "react-router-dom";

// MUI
import {
  createTheme,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import { Box } from "@mui/material";

import getDesignTokens from "styles/MyTheme";
import Header from "components/Header/Header";

const drawerWidth = 240;

const Root = () => {
  // dark mode
  const [mode, setMode] = useState(localStorage.getItem("theme"));
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header {...{ drawerWidth, setMode }} />

      {/* <Container fixed> */}
        <Box
          component="main"
          sx={{
            [theme.breakpoints.up("md")]: {
              width: `calc(100% - ${drawerWidth}px)`,
              height: `calc(100vh - ${64}px)`,
              ml: `${drawerWidth}px`,
            },
            pt: "60px",
            px: "60px"
          }}
        >
          <Outlet />
        </Box>
      {/* </Container> */}
    </ThemeProvider>
  );
};

export default Root;
