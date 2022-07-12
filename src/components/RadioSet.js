import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

export default function RadioSet({planet, vehicles, vagan, index, handleVagan}){
    const handleChange = (e)=>handleVagan(index,e.target.value)
    return(
        <RadioGroup value={vagan[index]} onChange={handleChange}>
            {vehicles.map((vehicle, key)=><FormControlLabel 
                key={key} 
                value={vehicle.id} 
                control={<Radio />} 
                disabled={planet.distance > vehicle.max_distance} 
                label={vehicle.name + " (" + vehicle.total_no + ")"} 
                />
            )}
        </RadioGroup>
    )
}