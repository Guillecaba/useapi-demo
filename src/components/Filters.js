

import React from 'react';
import { Grid } from '@material-ui/core';
import Search from './Search';
import Selector from './Selector';

const Filters = ({ inputSelectHandler, inputNameHandler, filter}) => {
    return (
      <>
        <Grid item xs={12} md={4} sm={4} lg={4}>
          <Search inputNameHandler={inputNameHandler} />
        </Grid>
        <Grid item xs={12} md={4} sm={4} lg={4}>
          <Selector filter={filter} inputSelectHandler={inputSelectHandler} />
        </Grid>
      </>
    );
}

export default Filters;