import * as React from "react";
import { IconButton, Typography, Toolbar, AppBar, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useDispatch } from "react-redux";
import { uiActions } from "../store/ui/ui-slice";
import MenuDrawer from "../components/MenuDrawer/MenuDrawer";
import BasketButton from "../components/Basket/BasketButton";

export default function MyAppBar() {
  const dispatch = useDispatch();
  const drawerClickHandler = () => {
    dispatch(uiActions.toggleMenuDrawer());
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={drawerClickHandler}
          >
            <MenuDrawer />
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            All Items
          </Typography>
          <BasketButton />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
