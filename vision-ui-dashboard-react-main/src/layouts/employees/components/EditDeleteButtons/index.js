import React, { useState } from 'react';
import VuiBox from 'components/VuiBox';
import VuiButton from 'components/VuiButton';
import DeleteEmployee from 'layouts/Functions/delete'; // Corregí el nombre del archivo

// @mui material components
import Icon from '@mui/material/Icon';

function EditDeleteButtons() {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const handleOpenDeleteModal = () => {
    setShowDeleteEmployee(true);
  };

  const handleCloseDeleteModal = () => {
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
        <VuiButton variant="text" color="error" onClick={handleOpenDeleteModal}>
        <DeleteEmployee open={openDeleteModal} onClose={handleCloseDeleteModal} />
          <Icon sx={{ mr: '4px' }}>delete</Icon>&nbsp;DELETE
        </VuiButton>
      </VuiBox>
      <VuiButton variant="text" color="text">
        <Icon sx={{ mr: '4px' }}>edit</Icon>&nbsp;EDIT
      </VuiButton>

    </VuiBox>
  );
}

export default EditDeleteButtons;
