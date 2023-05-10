import React, { useState } from "react";
import {
  Button,
  Stack,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import { useAuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import DrawerComponent from "./DrawerComponent";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const { logOut } = useAuthContext();

  const [openDrawer, setOpenDrawer] = useState<boolean>(false);

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const handleAuth = () => {
    logOut();
    navigate("/SignIn");
  };

  return (
    <>
      <AppBar position="static" sx={{ background: "black" }}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: "1",
              fontFamily: "Rubik",
              fontSize: { md: "24px", xs: "16px" },
            }}
          >
            {" "}
            Cooking Discovery
          </Typography>
          {matches ? (
            <DrawerComponent
              openDrawer={openDrawer}
              setOpenDrawer={setOpenDrawer}
              handleAuth={handleAuth}
            />
          ) : (
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="center"
              spacing={2}
              pb="24px"
              sx={{
                fontFamily: "Rubik",
              }}
            >
              <NavLink
                to="/"
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontSize: "24px",
                  lineHeight: "1.6",
                  textAlign: "center",
                  marginTop: "15px",
                }}
              >
                {" "}
                Home
              </NavLink>

              <NavLink
                to="/recipe"
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontSize: "24px",
                  marginTop: "15px",
                }}
              >
                Recipe
              </NavLink>
              <NavLink
                to="/payment"
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontSize: "24px",
                  marginTop: "15px",
                }}
              >
                {" "}
                Payment
              </NavLink>
              <NavLink
                to="/career"
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontSize: "24px",
                  marginTop: "15px",
                }}
              >
                Career
              </NavLink>
              <Button
                className="btn-hover"
                style={{
                  fontSize: "15px",
                  color: "#fff",
                  marginRight: "70px",
                  marginTop: "15px",

                  width: "180px",
                  borderRadius: "50px",
                  fontFamily: "Rubik",
                }}
                onClick={handleAuth}
              >
                Log out
              </Button>
            </Stack>
          )}
          {matches ? (
            <IconButton color="primary" onClick={() => setOpenDrawer(true)}>
              <MenuRoundedIcon />
            </IconButton>
          ) : (
            ""
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
