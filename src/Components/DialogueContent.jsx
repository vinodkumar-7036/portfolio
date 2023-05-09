import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import EditIcon from "@mui/icons-material/Edit";

function DialogueContent({ dialogData, setDialogData }) {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setDialogData({ isOpen: false, data: {} });
  };

  return (
    <div>
      <Dialog
        open={dialogData?.isOpen}
        onClose={() => {
          handleClose();
        }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Table Data
          <EditIcon style={{ marginLeft: "10px" }} />
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <div>Api:{dialogData?.data?.API}</div>
            <div>description:{dialogData?.data?.Description}</div>
            <div>Auth:{dialogData?.data?.Auth}</div>
            <div>cors:{dialogData?.data?.Cors}</div>
          </DialogContentText>
          <button>Update</button>
        </DialogContent>
        {/* <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions> */}
      </Dialog>
    </div>
  );
}

export default DialogueContent;
