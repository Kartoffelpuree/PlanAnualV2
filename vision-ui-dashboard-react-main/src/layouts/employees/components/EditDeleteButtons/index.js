import React, { useState } from 'react';
import VuiBox from 'components/VuiBox';
import VuiButton from 'components/VuiButton';
import DeleteEmployee from 'layouts/Functions/delete'; // Corregí el nombre del archivo

// @mui material components
import Icon from '@mui/material/Icon';
import EditEmployee from 'layouts/Functions/editEmployee';

function EditDeleteButtons() {
  const [showDeleteEmployee, setShowDeleteEmployee] = useState(false);
  const [showEditEmployee, setShowEditEmployee] = useState(false);
  
  const handleEditEmployeeClick = () => {
    setShowEditEmployee(true);
  }

  const handleCloseEditModal = () => {
    setShowEditEmployee(false);
  }

  const handleDeleteEmployeeClick = () => {
    setShowDeleteEmployee(true);
  };

  const handleCloseModal = () => {
    setShowDeleteEmployee(false); // Actualizamos el estado aquí para que se pueda abrir nuevamente el modal
  };

  return (
    <VuiBox
      display="flex"
      alignItems="center"
      mt={{ xs: 2, sm: 0 }}
      ml={{ xs: -1.5, sm: 0 }}
      sx={({ breakpoints }) => ({
        [breakpoints.only('sm')]: {
          flexDirection: 'column',
        },
      })}
    >
      <VuiBox mr={1}>
        <VuiButton variant="text" color="error" onClick={handleDeleteEmployeeClick}>
          <Icon sx={{ mr: '4px' }}>delete</Icon>&nbsp;BORRAR
        </VuiButton>
      </VuiBox>
      <VuiButton variant="text" color="text" onClick={handleEditEmployeeClick}>
        <Icon sx={{ mr: '4px' }}>edit</Icon>&nbsp;EDITAR
      </VuiButton>
      {showEditEmployee && <EditEmployee onClose={handleCloseEditModal} />}
      {showDeleteEmployee && <DeleteEmployee onClose={handleCloseModal} />}
    </VuiBox>
  );
}

export default EditDeleteButtons;
