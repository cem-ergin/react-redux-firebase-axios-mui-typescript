import React from "react";
import {
  Avatar,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  Typography,
} from "@mui/material";
import { Add as AddIcon, Remove as RemoveIcon } from "@mui/icons-material";
import { cartActions } from "../../store/cart/cart-slice";
import { useDispatch } from "react-redux";

const CartItem = (props: any) => {
  const { id, image, title, description, quantity, price, totalPrice } = props;
  const dispatch = useDispatch();

  const addButtonHandler = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        price,
        image,
        description,
        quantity,
        totalPrice,
      })
    );
  };

  const removeButtonHandler = () => {
    dispatch(cartActions.removeItem(id));
  };

  return (
    <>
      <ListItem>
        <ListItemAvatar>
          <Avatar src={image} />
        </ListItemAvatar>
        <ListItemText primary={title} />
        <ListItemSecondaryAction>
          <IconButton onClick={addButtonHandler} edge="end" aria-label="add">
            <AddIcon />
          </IconButton>
          <IconButton
            onClick={removeButtonHandler}
            edge="end"
            aria-label="remove"
          >
            <RemoveIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          marginLeft: "1rem",
          marginRight: "1rem",
        }}
      >
        <Typography variant="caption">Quantity: {quantity}</Typography>
        <Typography variant="caption">
          Total Price: {totalPrice.toFixed(2)}$
        </Typography>
      </div>
    </>
  );
};

export default CartItem;
