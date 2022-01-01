import React from 'react';
import { Box, makeStyles, Typography } from "@material-ui/core";
import Select from 'react-select';
import { typeOptions,  customStyles } from '../utils';

const useStyles = makeStyles((theme) => ({
  label: {
    marginBottom: 5,
    marginRight: 10,
    fontSize: 14,
  },
}));

const Selector = ({filter, inputSelectHandler}) => {
    const classes = useStyles();
  return (
    <Box display="flex" flexDirection="row" alignItems="center">
      <Typography className={classes.label} variant="subtitle1">
        {"Type"}
      </Typography>
      <Box zIndex={10} width={'100%'} >
        <Select
          onChange={(option) => inputSelectHandler(option)}
          isClearable={true}
          value={filter}
          options={typeOptions}
          styles={customStyles}
          placeholder={"select a type"}
        />
      </Box>
    </Box>
  );
};


export default Selector;