import React from 'react';
import Chart from 'react-apexcharts';

import { Card, Stack, Grid } from '@mui/material';

//VuiComponentes used
import VuiBox from 'components/VuiBox';
import VuiAlert from 'components/VuiAlert';
import colors from 'assets/theme/base/colors';
import VuiTypography from 'components/VuiTypography';

//MuiComponents
import Modal from '@mui/material/Modal';
import Icon from '@mui/material/Icon';
import Button from '@mui/material/Button';

// Vision UI Dashboard React example components
import capacitacionTableData from '../data/capacitacionTableData';
import Table from "examples/Tables/Table";

const CapacitaiconesAlert = ({onClose}) => {
    // Datos de ejemplo para la gráfica radar
    const { gradients, info } = colors;
    const { cardContent } = gradients;
    const { columns, rows } = capacitacionTableData;

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
                padding: '0px',
                marginBottom: '0px',
                borderRadius: '20px',
                boxShadow: '0px 4px 0px rgba(0, 0, 0, 0.1)',
            }}>
                <VuiBox>
                    <VuiBox>
                        <Card>
                            <VuiBox display="flex" justifyContent="space-between" alignItems="center">
                                <VuiTypography variant="lg" color="white">
                                    Capacitaciones
                                </VuiTypography>
                                    <Button onClick={handleClose} color="inherit">
                                        <Icon fontSize="small">close</Icon>
                                    </Button>
                            </VuiBox>
                            <VuiBox
                                sx={{
                                    "& th": {
                                        borderBottom: ({ borders: { borderWidth }, palette: { grey } }) =>
                                            `${borderWidth[1]} solid ${grey[700]}`,
                                    },
                                    "& .MuiTableRow-root:not(:last-child)": {
                                        "& td": {
                                            borderBottom: ({ borders: { borderWidth }, palette: { grey } }) =>
                                                `${borderWidth[1]} solid ${grey[700]}`,
                                        },
                                    },
                                }}
                            >
                                <Table columns={columns} rows={rows} />
                            </VuiBox>
                        </Card>
                    </VuiBox>
                </VuiBox>
            </div>
        </Modal >
    );
};

export default CapacitaiconesAlert;
