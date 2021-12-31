import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogContent  from '@material-ui/core/DialogContent';


const useStyles = makeStyles(()=>({
    imagePreview: {
        width: '100%'
    },
    previewContent: {
        overflowY: 'hidden'
    }
}))

const ImagePreview = ({ open, imageUrl, togglePreview }) => {
  const classes = useStyles();

  return (
    <Dialog open={open} onClose={() => togglePreview(false)}>
      <DialogContent className={classes.previewContent}>
        <img
          src={imageUrl}
          className={classes.imagePreview}
          alt={"Preview of the card"}
        />
      </DialogContent>
    </Dialog>
  );
};

export default ImagePreview;