import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import * as React from 'react';
import AutoComplete from './AutoComplete';
import RadioSet from './RadioSet';

export default function Search({loading, planets, vehicles, setTime, findFalcone}) {
    const [plan, setPlan] = React.useState(planets);
    const [selected, setSelected] = React.useState([null,null,null,null]);
    const [vagan, setVagan] = React.useState([null,null,null,null]);

    const find = ()=>findFalcone(selected.map((item)=>item.name), vagan.map((id)=>vehicles[id-1].name))
    const handleVagan = (index,value) => {
        vagan[index] = value ? Number(value) : value
        setVagan([...vagan])
    }
    const selectPlanet = (choosed,index)=>{
        selected[index] = choosed
        if(!choosed) handleVagan(index, null)
        setSelected([...selected])
        const filtered = planets.filter(ar => !selected.find(rm => (rm && rm.name === ar.name) ))
        setPlan(filtered)
    }
    React.useEffect(()=>{
        const selectedVagan = vagan.map((id)=>id ? vehicles[id-1] : null)
        setTime(selectedVagan.reduce((acc, vagan, index)=>{
            if(vagan!==null && selected[index]!==null){ 
                acc += selected[index].distance/vagan.speed
            }
            return acc
        },0))

    },[selected, setTime, vagan, vehicles])
  
  return (
    <Card sx={{ p: 3, height: "100%" }}>
      <CardContent>
        <Box 
          display="flex" 
          alignItems="center"
          justifyContent="center"
        >
          <h1>Select planets you want to search in:</h1>
        </Box>
        <Grid container spacing={2}>
            {selected.map((_, index)=><Grid key={index} item xs={12} md={6} xl={3}>
                <AutoComplete 
                plan={plan} 
                label={"Planet "+(index+1)} 
                index={index} 
                selectPlanet={selectPlanet}/>
                </Grid>
            )}
        </Grid>
        <Grid container>
            {selected.map((_, index)=><Grid key={index} item xs={12} md={6} xl={3} sx={{mt:2}}>
                {selected[index] && <RadioSet planet={selected[index]} index={index} vagan={vagan} vehicles={vehicles} handleVagan={handleVagan}/>}
                </Grid>
            )}
        </Grid>
        <Box 
          display="flex" 
          alignItems="center"
          justifyContent="center"
        >
          <Button
            variant='contained'
            size="small"
            disabled={loading || !vagan.every(element => element !== null)}
            onClick={find}
            sx={{mt:2}}
          >Find Falcone</Button>
        </Box>
      </CardContent>
    </Card>
  );
}
