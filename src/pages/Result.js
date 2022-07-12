import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from "@mui/material/Grid";
import * as React from 'react';

export default function Result({open, result, time, reset}) {
  return (
    <Container maxWidth="xl">
        <Grid container my={10} spacing={2} direction="column" alignItems="center" justifyContent="center">
          <Grid item xs={12}>
            {result.status === "success" && <h1>Success! Congratulations on Finding Falcone. King Shan is mighty pleased.</h1>}
            {result.status !== "success" && <h1>Failed! Falcone was not found. King Shan is disappointed.</h1>}
          </Grid>
          <Grid item xs={12}>
           {result.status === "success" && <h1>TimeTaken : {time}</h1>}
          </Grid>
          <Grid item xs={12}>
           {result.status === "success" && <h1>Planet found : {result.planet_name}</h1>}
          </Grid>
          <Grid item xs={12}>
          <Button
            variant='contained'
            size="small"
            onClick={reset}
            sx={{mt:2}}
          >Start Again</Button>
          </Grid>
        </Grid>
    </Container>
  );
}
