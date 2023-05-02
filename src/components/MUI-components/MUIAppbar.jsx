import { Menu } from "@mui/icons-material";
import {
  Toolbar,
  AppBar,
  Avatar,
  Typography,
  useTheme,
  IconButton,
} from "@mui/material";
import zIndex from "@mui/material/styles/zIndex";
import { Link } from "react-router-dom"

const MUIAppbar = ({ drawerWidth, showDrawer }) => {
  const theme = useTheme();

  return (
    // width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`
    <AppBar
      sx={{
        [theme.breakpoints.up("md")]: {
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
        },
        position: "fixed",
        zIndex: "10"
      }}
      position="static"
    >
      <Toolbar>
        <IconButton
          onClick={showDrawer}
          sx={{
            [theme.breakpoints.up("md")]: {
              display: "none",
            },
            mr: "9px",
          }}
          color="inherit"
        >
          <Menu />
        </IconButton>
        <Link
          style={{
            textDecoration: "none",
          }}
          to="/"
        >
          <Avatar alt="Turki Alnaqi" src="./imgs/logo.png" />
        </Link>
        <Link
          style={{
            textDecoration: "none",
            color: "inherit",
            flexGrow: 1
          }}
          to="/"
        >
          <Typography mr={2} variant="body1" color="inherit">
            Guts
          </Typography>
        </Link>

        <Typography mr={2} variant="body1" color="inherit">
          Turki Alnaqi
        </Typography>

        <Avatar alt="Turki Alnaqi" src="./imges/me.jpg" />
      </Toolbar>
    </AppBar>
  );
};

export default MUIAppbar;
