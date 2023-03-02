import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((count) => count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount((count) => count - 1);
    }
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <Box
      sx={{
        marginBottom: "10px",
        border: "1px solid black",
      }}
    >
      <Typography
        variant="h5"
        component="h2"
        gutterBottom
        sx={{
          textAlign: "center",
        }}
      >
        Counter: {count}
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-evenly",
        }}
      >
        <Button
          variant="contained"
          color="warning"
          sx={{ margin: "10px" }}
          startIcon={<RemoveCircleOutlineIcon />}
          onClick={handleDecrement}
        >
          Decrement
        </Button>
        <Button
          variant="contained"
          color="error"
          sx={{ margin: "10px" }}
          onClick={handleReset}
        >
          Reset
        </Button>
        <Button
          variant="contained"
          color="success"
          sx={{ margin: "10px" }}
          startIcon={<AddCircleOutlineIcon />}
          onClick={handleIncrement}
        >
          Increment
        </Button>
      </Box>
    </Box>
  );
};
