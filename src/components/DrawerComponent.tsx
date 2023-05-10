import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
type Props = {
  openDrawer: boolean;
  setOpenDrawer: React.Dispatch<React.SetStateAction<boolean>>;
  handleAuth: () => void;
};

const DrawerComponent = ({ openDrawer, setOpenDrawer, handleAuth }: Props) => {
  const handleClick = () => {
    handleAuth();
    setOpenDrawer(false);
  };

  return (
    <Drawer
      anchor="right"
      open={openDrawer}
      PaperProps={{
        sx: {
          width: { md: 240, sm: 200, xs: 180 },
          background: "hsl(0 0% 100% /0.1)",
          backdropFilter: "blur(1rem)",
        },
      }}
    >
      <IconButton color="primary" onClick={() => setOpenDrawer(false)}>
        <CloseRoundedIcon />
      </IconButton>
      <List>
        {" "}
        <ListItem
          onClick={() => setOpenDrawer(false)}
          sx={{ justifyContent: "center" }}
        >
          <ListItemIcon>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "white",
                fontFamily: "Rubik",
                fontSize: "20px",
                fontWeight: "500",
              }}
              className="link-active"
            >
              Home
            </Link>
          </ListItemIcon>
        </ListItem>
        <ListItem
          onClick={() => setOpenDrawer(false)}
          sx={{ justifyContent: "center" }}
        >
          <ListItemIcon>
            <Link
              to="/recipe"
              style={{
                textDecoration: "none",
                color: "white",
                fontFamily: "Rubik",
                fontSize: "20px",
                fontWeight: "500",
              }}
              className="link-active"
            >
              Recipe
            </Link>
          </ListItemIcon>
        </ListItem>
        <ListItem sx={{ justifyContent: "center" }}>
          <ListItemIcon>
            <Link
              to="/career"
              style={{
                textDecoration: "none",
                color: "white",
                fontFamily: "Rubik",
                fontSize: "20px",
                fontWeight: "500",
              }}
              className="link-active"
            >
              Career
            </Link>
          </ListItemIcon>
        </ListItem>
        <ListItem sx={{ justifyContent: "center" }}>
          <ListItemIcon>
            <Link
              to="/payment"
              style={{
                textDecoration: "none",
                color: "white",
                fontFamily: "Rubik",
                fontSize: "20px",
                fontWeight: "500",
              }}
              className="link-active"
            >
              Payment
            </Link>
          </ListItemIcon>
        </ListItem>
        <ListItem onClick={handleClick} sx={{ justifyContent: "center" }}>
          <ListItemIcon
            sx={{
              color: "white",
              fontFamily: "Rubik",
              fontSize: "20px",
              fontWeight: "500",
            }}
            className="link-active"
          >
            LogOut
          </ListItemIcon>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default DrawerComponent;
