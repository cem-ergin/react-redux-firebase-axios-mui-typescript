import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../store/categories/category-actions";
import {
  Divider,
  Typography,
  List,
  ListItem,
  ListItemText,
  CircularProgress,
  Paper,
  Drawer,
} from "@mui/material";
import { RootState } from "../../store/store";
import { Link } from "react-router-dom";

const MenuDrawer = () => {
  const dispatch = useDispatch<any>();
  const showMenuDrawer = useSelector(
    (state: RootState) => state.ui.showMenuDrawer
  );

  const categories = useSelector(
    (state: RootState) => state.categories.categories
  );

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <Drawer open={showMenuDrawer}>
      <Paper elevation={3} style={{ width: "250px" }}>
        <Typography variant="h5" align="center">
          Categories
        </Typography>
        <Divider></Divider>
        {categories && (
          <List>
            <ListItem key="all">
              <Link to="/">
                <ListItemText primary="All" />
              </Link>
            </ListItem>
            {categories.map((category) => (
              <ListItem key={category}>
                <Link to={`/categories/${category}`}>
                  <ListItemText primary={category} />
                </Link>
              </ListItem>
            ))}
          </List>
        )}
        {!categories && <CircularProgress sx={{ margin: "3rem" }} />}
      </Paper>
    </Drawer>
  );
};

export default MenuDrawer;
