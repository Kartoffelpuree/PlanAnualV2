import React from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Icon from '@mui/material/Icon';

//Vui elements
import VuiBox from 'components/VuiBox';
import VuiAlert from 'components/VuiAlert';
import VuiButton from 'components/VuiButton';

const DeleteEmployee = ({ onClose }) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <Modal
      open={true}
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
          <VuiBox>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
              <div style={{ margin: '0px', width: '100%', color: 'white', textAlign: 'center' }}>
                <Icon fontSize="small">delete</Icon>&nbsp;
                Eliminar empleado?
              </div>
              <div style={{ position: 'absolute', top: '-5px', right: '-15px' }}>
                <Button onClick={handleClose} color="inherit">
                  <Icon fontSize="small">close</Icon>
                </Button>
              </div>
              <div style={{ margin: '0px', width: '100%', textAlign: 'center' }}>
                <VuiButton variant="outlined" color="error" style={{ margin: '8px' }}>
                  Eliminar
                </VuiButton>
              </div>
            </div>
          </VuiBox>
        </VuiAlert>
      </div>
    </Modal>
  );
};

export default DeleteEmployee;
