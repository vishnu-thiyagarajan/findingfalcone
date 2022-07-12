import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Container from '@mui/material/Container';
import Grid from "@mui/material/Grid";
import * as React from 'react';
import Search from "../components/Search";
import TimeTaken from "../components/TimeTaken";

export default function Home({planets, vehicles, time, setTime, findFalcone, loading}){
    return (
    <Container maxWidth="xl">
        <Grid container my={5} spacing={2}>
        <Grid item xs={12} md={8}>
            {(!planets || !vehicles) && <Box sx={{ display: 'flex' }} alignItems="center" justifyContent="center">
                <CircularProgress />
            </Box> }
            {planets && vehicles && 
            <Search 
                planets={planets} 
                vehicles={vehicles} 
                setTime={setTime}
                findFalcone={findFalcone}
                loading={loading}
            />}
        </Grid>
        <Grid item xs={12} md={4}>
            <TimeTaken time={time}/>
        </Grid>
        </Grid>
    </Container>
    )
}