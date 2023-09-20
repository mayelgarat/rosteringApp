import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { Select as MaterialSelect } from '@mui/material';

const Select = ({ options = [], value = '', onChange, label = '' }) => (
  <FormControl fullWidth>
    <InputLabel id="simple-select-label">{label}</InputLabel>
    <MaterialSelect
      labelId="simple-select-label"
      id="simple-select"
      value={value}
      onChange={onChange}
    >
      {options.length &&
        options.map((option, index) => (
          <MenuItem key={index} value={option.key}>
            {option.value}
          </MenuItem>
        ))}
    </MaterialSelect>
  </FormControl>
);

export default Select;
