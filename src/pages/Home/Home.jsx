import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material";

function Home() {
  const theme = useTheme();
  return (
    <>
      <Box component="section" pb="80px" sx={{ flexGrow: 1 }}>
        <Grid container spacing={4} columns={12}>
          <Grid
            xs={12}
            sm={7}
            md={10}
            lg={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
              gap: "26px",
            }}
          >
            <Box
              component="div"
              sx={{
                [theme.breakpoints.up("lg")]: {
                  width: "80%",
                },
              }}
            >
              <Typography variant="h3">
                Build your professional CV in minutes
              </Typography>
              <Typography variant="body1">
                Start using the easiest and fastest resume builder with the
                advice of professionals.
              </Typography>
            </Box>
            <Button variant="contained" color="secondary">
              Create My CV
            </Button>
          </Grid>
          <Grid
            xs={12}
            sm={5}
            md={12}
            lg={6}
          >
            <Box component="div" sx={{
              m: "40px auto 0",
              [theme.breakpoints.only("xs")]: {
                width: "250px",
                height: "350px"
              },
              [theme.breakpoints.only("sm")]: {
                width: "220px",
                height: "320px"
              },
              [theme.breakpoints.up("md")]: {
                width: "350px",
                height: "450px",
              },
              }} >
              <img src="./imgs/test.webp" style={{ width: "inherit", height: "inherit", objectFit: "cover" }} />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Home;
