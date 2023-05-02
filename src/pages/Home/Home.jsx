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
            lg={7}
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
            lg={5}
            sx={{
              [theme.breakpoints.only("sm")]: {
                scale: "0.7"
              },
              textAlign: "center",
            }}
          >
            <img src="./imgs/test.webp" className="logo" />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Home;
