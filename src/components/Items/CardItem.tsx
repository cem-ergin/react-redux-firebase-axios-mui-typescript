import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useDispatch } from "react-redux";
import { cartActions, Item } from "../../store/cart/cart-slice";
import { uiActions } from "../../store/ui/ui-slice";

export default function CardItem(props: any) {
  const { id, title, description, price, image } = props;

  const dispatch = useDispatch();

  const addToTheCartHandler = () => {
    const item: Item = {
      id,
      title,
      description,
      price,
      image,
      quantity: 0,
      totalPrice: 0,
    };

    dispatch(cartActions.addItem(item));
  };
  const buyNowHandler = () => {
    const item: Item = {
      id,
      title,
      description,
      price,
      image,
      quantity: 0,
      totalPrice: 0,
    };

    dispatch(cartActions.buyNowAction(item));
    dispatch(uiActions.toggleCartDrawer());
  };

  return (
    <Card sx={{ maxWidth: 345, m: 2, borderRadius: "16px" }}>
      <CardMedia
        component="img"
        height="194"
        sx={{ objectFit: "contain" }}
        src={image}
        alt={title}
      />
      <CardContent>
        <Typography variant="body1" color="text.primary">
          {title}
        </Typography>
      </CardContent>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <Typography
        sx={{
          color: "blue",
          ml: 2,
          fontSize: "1.3rem",
        }}
      >
        {price} $
      </Typography>
      <CardActions disableSpacing>
        <Stack spacing={2} direction="row">
          <Button variant="contained" onClick={buyNowHandler}>
            Buy now
          </Button>
          <Button variant="outlined" onClick={addToTheCartHandler}>
            Add to the cart
          </Button>
        </Stack>
      </CardActions>
    </Card>
  );
}
