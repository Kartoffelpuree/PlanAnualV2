import React, { useState } from 'react';
import VuiBox from 'components/VuiBox';
import VuiButton from 'components/VuiButton';
import DeleteCapacitacion from 'layouts/Functions/delete'; // Corregí el nombre del archivo

// @mui material components
import Icon from '@mui/material/Icon';
import EditCapacitacion from 'layouts/Functions/editCapacitacion';

function EditDeleteButtons() {
  const [showDeleteCapacitacion, setshowDeleteCapacitacion] = useState(false);
  const [showEditCapcitacion, setShowEditCapacitacion] = useState(false);
  
  const handleEditCapacitacionClick = () => {
    setShowEditCapacitacion(true);
  }

  const handleCloseEditModal = () => {
    setShowEditCapacitacion(false);
  }

  const handleDeleteCapacitacionClick = () => {
    setshowDeleteCapacitacion(true);
  };

  const handleCloseModal = () => {
    setshowDeleteCapacitacion(false); // Actualizamos el estado aquí para que se pueda abrir nuevamente el modal
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
        <VuiButton variant="text" color="error" onClick={handleDeleteCapacitacionClick}>
          <Icon sx={{ mr: '4px' }}>delete</Icon>&nbsp;BORRAR
        </VuiButton>
      </VuiBox>
      <VuiButton variant="text" color="text" onClick={handleEditCapacitacionClick}>
        <Icon sx={{ mr: '4px' }}>edit</Icon>&nbsp;EDITAR
      </VuiButton>
      {showEditCapcitacion && <EditCapacitacion onClose={handleCloseEditModal} />}
      {showDeleteCapacitacion && <DeleteCapacitacion onClose={handleCloseModal} />}
    </VuiBox>
  );
}

export default EditDeleteButtons;
