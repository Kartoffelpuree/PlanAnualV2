import React from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

//Vui imports
import VuiInput from "components/VuiInput";
import VuiAlert from 'components/VuiAlert';
import Icon from '@mui/material/Icon';
import VuiButton from 'components/VuiButton';
import VuiBox from 'components/VuiBox';

const newCapacitacion = ({ onClose }) => { // Modificamos la prop para recibir la función onClose
    const handleClose = () => {
        onClose(); // Llama a la función onClose para cerrar el modal
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
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
                <VuiAlert color="dark">
                    <VuiBox>
                        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                            <div style={{ margin: '8px', width: '30%', color: 'white' }}>
                                <Icon fontSize="small">delete</Icon>&nbsp;
                                Nueva Capacitación
                            </div>
                            <div style={{ margin: '0px', width: '55%', textAlign: 'right' }}>
                                <VuiButton variant="outlined" color="success" style={{ margin: '8px' }}>
                                    Añadir
                                </VuiButton>
                            </div>
                            <div style={{ position: 'absolute', top: '-5px', right: '-15px' }}>
                                <Button onClick={handleClose} color="inherit">
                                    <Icon fontSize="small">close</Icon>
                                </Button>
                            </div>
                            <div style={{ margin: '8px', width: '45%' }}>
                                <VuiInput
                                    placeholder="Codigo..."
                                    icon={{
                                        component: "favorite",
                                        direction: "left",
                                    }}
                                />
                            </div>
                            <div style={{ margin: '8px', width: '45%' }}>
                                <VuiInput
                                    placeholder="Curso..."
                                    icon={{
                                        component: "favorite",
                                        direction: "left",
                                    }}
                                />
                            </div>
                            <div style={{ margin: '8px', width: '30%' }}>
                                <VuiInput
                                    placeholder="Codigó STPS..."
                                    icon={{
                                        component: "favorite",
                                        direction: "left",
                                    }}
                                />
                            </div>
                            <div style={{ margin: '8px', width: '30%' }}>
                                <VuiInput
                                    placeholder="Vigencia..."
                                    icon={{
                                        component: "favorite",
                                        direction: "left",
                                    }}
                                />
                            </div>
                            <div style={{ margin: '8px', width: '30%' }}>
                                <VuiInput type="month" placeholder="Month" value="2018-11" />
                            </div>
                        </div>
                    </VuiBox>
                </VuiAlert>
            </div>
        </Modal>
    );
};

export default newCapacitacion;
