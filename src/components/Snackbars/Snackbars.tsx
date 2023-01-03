import React from "react";
import { Snackbar, Alert } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../../store/ui/ui-slice";
import { RootState } from "../../store/store";

const Snackbars = () => {
  const uiSelector = useSelector((state: RootState) => state.ui);

  const dispatch = useDispatch();

  function hideSuccessSnackbar() {
    return () => {
      dispatch(uiActions.hideSuccessSnackbar());
    };
  }
  function hideFailureSnackbar() {
    return () => {
      dispatch(uiActions.hideFailureSnackbar());
    };
  }
  return (
    <>
      <Snackbar
        open={uiSelector.showSuccessSnackbar}
        autoHideDuration={3000}
        onClose={hideSuccessSnackbar()}
      >
        <Alert
          onClose={hideSuccessSnackbar()}
          severity="success"
          sx={{ width: "100%" }}
        >
          Your order is placed.
        </Alert>
      </Snackbar>

      <Snackbar
        open={uiSelector.showFailureSnackbar}
        autoHideDuration={3000}
        onClose={hideFailureSnackbar()}
      >
        <Alert onClose={hideFailureSnackbar()} severity="error">
          There is an error happened with your order.
        </Alert>
      </Snackbar>
    </>
  );
};

export default Snackbars;
