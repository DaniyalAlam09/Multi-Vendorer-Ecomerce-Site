import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const useStyles = makeStyles({
  root: {
    '&$checked': {
      color: '#1da599',
    },
  },
  checked: {},
  wrap: {
    // width: '100%',
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'space-between',
    // alignItems: 'center',
    // marginLeft: 0,
  },
  label: {
    fontSize: '.8rem',
  },
});

const CheckboxProton = ({ changeChecked, brand }) => {
  const classes = useStyles();
  const { checked, label, id } = brand;
  return (
    <div>
       <br/>
       <br/>
      <FormControlLabel
        classes={{
          label: classes.label,
          // root: classes.wrap,
        }}
       
        control={
          
          <Checkbox
          
            classes={{
              checked: classes.checked,
              root: classes.root,
            }}
            size='small'
            checked={checked}
            onChange={() => changeChecked(id)}
            inputProps={{ 'aria-label': 'checkbox with small size' }}
          />
        }
      
        label={label}
        
      />
    </div>
  );
};

export default CheckboxProton;
