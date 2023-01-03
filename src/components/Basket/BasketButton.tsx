import { Button, Drawer, Paper } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../../store/ui/ui-slice";
import Cart from "./Cart";
import { RootState } from "../../store/store";

export default function BasketButton() {
  const cartSelector = useSelector((state: RootState) => state.cart);
  const uiSelector = useSelector((state: RootState) => state.ui);
  const dispatch = useDispatch();

  function toggleCartDrawer() {
    return dispatch(uiActions.toggleCartDrawer());
  }

  return (
    <div>
      <Drawer
        open={uiSelector.showCartDrawer}
        anchor="right"
        onClose={toggleCartDrawer}
      >
        <Paper elevation={3} style={{ width: "350px" }}>
          <Cart />
        </Paper> c x
      </Drawer>
      <Button variant="contained" color="secondary" onClick={toggleCartDrawer}>
        <ShoppingCartIcon />
        <span>{cartSelector.items.length}</span>
      </Button>
    </div>
  );
}
