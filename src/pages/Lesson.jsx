import { Box, Card } from "@mui/joy";
import FlipFlashcard from "../components/FlipFlashcard";

const Lesson = () => {
  return (
    <div className="boxLayout">
      <Grid className="box1">
        <Card>
          <FlipFlashcard />
        </Card>
      </Grid>
      <Grid xs={6} className="box1">
      </Grid>
      <Grid className="box3">    
      </Grid>

    </div>
  );
};
export default Lesson;
