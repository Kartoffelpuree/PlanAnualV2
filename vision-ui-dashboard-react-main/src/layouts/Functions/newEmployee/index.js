import React from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { makeStyles } from '@mui/styles';
import OutlinedInput from '@mui/material/OutlinedInput';


// Vui imports
import VuiAlert from 'components/VuiAlert';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import Icon from '@mui/material/Icon';
import VuiButton from 'components/VuiButton';
import VuiBox from 'components/VuiBox';
import VuiInput from 'components/VuiInput';

const options = [
    { value: 'activo', label: 'Activo' },
    { value: 'inactivo', label: 'Inactivo' }
];

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        backgroundColor: 'transparent !important',
        borderRadius: '10px',
        border: '1px solid #56577A',
        '&:focus-within': {
            borderColor: '#ffffff00',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
    inputLabel: {
        color: '#56577A',
        textAlign: 'center',
        bottom: '10px',
        top: '-12px',
        borderColor: '#ffffff00',
        backgroundColor: '#ffffff00'
    },
    select: {
        borderColor: '#ffffff00'
    }
}));

const NewEmployee = ({ onClose }) => {
    const [selectedOption, setSelectedOption] = React.useState('');
    const classes = useStyles();

    const handleClose = () => {
        onClose();
    };

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
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
                                <GroupAddIcon fontSize="small" className={classes.icon}>GroupAdd</GroupAddIcon>
                                Añadir Nuevo Empleado
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
                                    placeholder="Nombre..."
                                    icon={{
                                        component: "favorite",
                                        direction: "left",
                                    }}
                                />
                            </div>
                            <div style={{ margin: '8px', width: '45%' }}>
                                <VuiInput
                                    placeholder="Correo..."
                                    icon={{
                                        component: "favorite",
                                        direction: "left",
                                    }}
                                />
                            </div>
                            <div style={{ margin: '8px', width: '45%' }}>
                                <VuiInput
                                    placeholder="Posición..."
                                    icon={{
                                        component: "favorite",
                                        direction: "left",
                                    }}
                                />
                            </div>
                            <div style={{ margin: '8px', width: '45%' }}>
                                <VuiInput
                                    placeholder="Departamento..."
                                    icon={{
                                        component: "favorite",
                                        direction: "left",
                                    }}
                                />
                            </div>
                            <div style={{ margin: '8px', width: '100%', textAlign: 'center' }}>
                                <FormControl className={classes.formControl}>
                                    <InputLabel id="select-label" className={classes.inputLabel}>Estado</InputLabel>
                                    <Select
                                        labelId="select-label"
                                        value={selectedOption}
                                        onChange={handleChange}
                                        label="Estado"
                                        className={classes.select}
                                    >
                                        {options.map((option) => (
                                            <MenuItem
                                                key={option.value}
                                                value={option.value}
                                                style={{ borderColor: 'transparent !important' }}
                                            >
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </div>
                        </div>
                    </VuiBox>
                </VuiAlert>
            </div>
        </Modal>
    );
};

export default NewEmployee;
``
