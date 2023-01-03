import React from "react";
import { List, Typography, IconButton, Button, Divider } from "@mui/material";
import CartItem from "./CartItem";
import { useSelector, useDispatch } from "react-redux";
import { ArrowBack } from "@mui/icons-material";
import { uiActions } from "../../store/ui/ui-slice";
import { cartActions } from "../../store/cart/cart-slice";
import CenteredBox from "../../Layouts/CenteredBox";
import { RootState } from "../../store/store";

const Cart = () => {
  const cartSelector = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  const backTapHandler = () => {
    return dispatch(uiActions.toggleCartDrawer());
  };

  const emptyCardHandler = () => {
    return dispatch(cartActions.emptyCard());
  };

  const isCartEmpty = cartSelector.items.length === 0;

  function showSuccessSnackbar() {
    return () => {
      dispatch(uiActions.toggleCartDrawer());
      dispatch(uiActions.showSuccessSnackbar());
    };
  }

  function showFailureSnackbar() {
    return () => {
      dispatch(uiActions.showFailureSnackbar());
    };
  }

  return (
    <>
      <IconButton onClick={backTapHandler} edge="end" aria-label="remove">
        <ArrowBack />
      </IconButton>
      <Typography variant="h3" sx={{ m: "2rem" }}>
        Your Cart
      </Typography>
      <List>
        {isCartEmpty && (
          <Typography variant="body1" sx={{ m: "2rem" }}>
            Your cart is empty
          </Typography>
        )}
        {cartSelector.items.map((item) => (
          <CartItem
            id={item.id}
            key={item.id}
            title={item.title}
            description={item.description}
            quantity={item.quantity}
            image={item.image}
            price={item.price}
            totalPrice={item.totalPrice}
          />
        ))}
      </List>
      {!isCartEmpty && (
        <CenteredBox>
          <Typography variant="h6">
            Total amount: {cartSelector.totalAmount.toFixed(2)}$
          </Typography>
        </CenteredBox>
      )}

      <CenteredBox>
        <Button onClick={showSuccessSnackbar()}>
          Proceed to payment - success
        </Button>
      </CenteredBox>
      <Divider />
      <CenteredBox>
        <Button onClick={showFailureSnackbar()}>
          Proceed to payment - failure
        </Button>
      </CenteredBox>
      <Divider />
      {!isCartEmpty && (
        <CenteredBox>
          <Button onClick={emptyCardHandler}>Empty Cart</Button>
        </CenteredBox>
      )}
    </>
  );
};

export default Cart;
