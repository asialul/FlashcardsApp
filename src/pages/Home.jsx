import Chart from "../components/Chart";
import Dictionary from "../components/Dictionary";
import { Box, Grid } from "@mui/joy";
import TextBox from "../components/TextBox";

const Home = () => {
  return (
    <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid xs={4} className="box2">
        <Dictionary />
     </Grid>
      <Grid xs={6} className="box3">
        <TextBox/>
      </Grid>
      <Grid xs={4} className="box4">
        <Chart/>
      </Grid>
      </Grid>
    
  );
};
export default Home;
