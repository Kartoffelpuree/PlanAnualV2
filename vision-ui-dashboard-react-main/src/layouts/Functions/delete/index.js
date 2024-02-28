import React from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import VuiAlert from 'components/VuiAlert';
import Icon from '@mui/material/Icon';
import VuiButton from 'components/VuiButton';

const DeleteEmployee = ({ onClose }) => { // Modificamos la prop para recibir la función onClose
  const handleClose = () => {
    onClose(); // Llama a la función onClose para cerrar el modal
  };

  return (
    <Modal
      open={true} // Utiliza una prop para determinar si el modal está abierto
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
        <Button onClick={handleClose} color="inherit">
          <Icon fontSize="small">close</Icon>
        </Button>
        <VuiAlert color="dark">
          <Icon fontSize="small">delete</Icon>&nbsp;
          Eliminar empleado? 
          <VuiButton variant="outlined" color="error" style={{margin: '8px'}}>
            Eliminar
          </VuiButton>
        </VuiAlert>
      </div>
    </Modal>
  );
};

export default DeleteEmployee;
