import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const Banner = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#264653",
        padding: "20px",
        textAlign: "center",
        color: "#ffffff",
        marginBottom: "10px",
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        React Counter
      </Typography>

      <Typography variant="subtitle1" component="h2" gutterBottom>
        Please use the buttons to interact with your counter
      </Typography>
    </Box>
  );
};
