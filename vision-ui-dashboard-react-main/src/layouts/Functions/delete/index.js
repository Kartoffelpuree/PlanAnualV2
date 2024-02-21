import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import VuiAlert from 'components/VuiAlert';
import Icon from '@mui/material/Icon';

const DeleteEmployee = ({open, onClose}) => {

  const handleClose = () => {
    onClose(false);
  };

  return (
      <Modal
        open={open}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'transparent',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        }}>
          <VuiAlert color="dark">
            <Icon fontSize="small">thumb_up</Icon>&nbsp;
            This is an alert with icon!
          </VuiAlert>
          <Button onClick={handleClose} color="inherit">
            <Icon fontSize="small">close</Icon>
          </Button>
        </div>
      </Modal>
  );
};

export default DeleteEmployee;
