import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function AutoComplete({plan, label, index, selectPlanet}){
    const returnTrue = () => true
    const handleChange = (_, newValue) => selectPlanet(newValue, index)
    return(
        <Autocomplete
            disablePortal
            options={plan}
            sx={{ width: 150 }}
            renderInput={(params) => <TextField {...params} label={label} />}
            getOptionLabel={(option) => option.name}
            onChange={handleChange}
            isOptionEqualToValue={returnTrue}
        />
    )
}