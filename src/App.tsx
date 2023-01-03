import { Box, useTheme } from "@mui/material";
import { Routes, Route, Outlet, Link, useParams } from "react-router-dom";
import ItemsGrid from "./components/Items/ItemsGrid";
import Snackbars from "./components/Snackbars/Snackbars";
import MyAppBar from "./Layouts/MyAppBar";

export default function App() {
  const theme = useTheme();

  return (
    <div>
      <MyAppBar />

      <Box
        sx={{
          mt: `${((theme.mixins?.toolbar?.minHeight as number) || 56) + 16}px`,
        }}
      >
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="categories/:id" element={<Category />} />
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </Box>

      <Snackbars />
    </div>
  );
}

function Layout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

function Home() {
  return <ItemsGrid category={null} />;
}

function Category() {
  const { id } = useParams();
  return <ItemsGrid category={id} />;
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
