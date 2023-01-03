import CardItem from "./CardItem";
import Grid from "@mui/material/Grid";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems } from "../../store/items/items-actions";
import CircularProgress from "@mui/material/CircularProgress";
import { RootState } from "../../store/store";
import { Typography } from "@mui/material";
import { Items } from "../../store/items/items-slice";

const ItemsGrid = (props: any) => {
  const dispatch = useDispatch<any>();
  const { items, isLoading } = useSelector((state: RootState) => state.items);
  const category = props.category;

  let myItems: Items = { key: "", items: [] };
  if (category === null) {
    const findedItem = items.find((item) => item.key === "all");
    if (findedItem !== undefined) {
      myItems = findedItem;
    }
  } else {
    const findedItem = items.find((item) => item.key === category);
    if (findedItem !== undefined) {
      myItems = findedItem;
    }
  }

  useEffect(() => {
    dispatch(fetchItems(items, category));
  }, [dispatch, category]);

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      spacing={2}
      sx={{ m: "0.5rem" }}
    >
      {isLoading && <CircularProgress sx={{ margin: "3rem" }} />}
      {!isLoading && myItems === undefined && items.length === 0 && (
        <Typography variant="h2">No item found</Typography>
      )}

      {!isLoading &&
        myItems !== undefined &&
        (myItems as Items)!.items.map((item) => (
          <CardItem
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            price={item.price}
            image={item.image}
          >
            xs=4
          </CardItem>
        ))}
    </Grid>
  );
};

export default ItemsGrid;
