import React from 'react';
import { Box, Button  } from "@material-ui/core";
import { useTranslation } from "react-i18next";


const Pagination = ({ loadMore, paginationAvailable }) => {
    const { t } = useTranslation();
    return (
      <>
        {paginationAvailable && (
          <Box display="flex" justifyContent="center" pb={10}>
            <Button variant="contained" color="primary" onClick={loadMore}>
              {t('general.more')}
            </Button>
          </Box>
        )}
      </>
    );
}

export default Pagination;