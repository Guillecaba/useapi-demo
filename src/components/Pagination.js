import React from 'react';
import { Box, Button  } from "@material-ui/core";


const Pagination = ({ loadMore, paginationAvailable }) => {
    return (
      <>
        {paginationAvailable && (
          <Box display="flex" justifyContent="center" pb={10}>
            <Button variant="contained" color="primary" onClick={loadMore}>
              Ver mas
            </Button>
          </Box>
        )}
      </>
    );
}

export default Pagination;