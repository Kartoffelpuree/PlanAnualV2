import React, { useState } from 'react';

import Chart from 'react-apexcharts';

import { Card, Stack, Grid } from '@mui/material';

//VuiComponentes used
import VuiButton from "components/VuiButton";
import VuiBox from 'components/VuiBox';

import colors from 'assets/theme/base/colors';
import VuiTypography from 'components/VuiTypography';
// Vision UI Dashboard React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";
import Userphoto from "layouts/profile/components/Userphoto";
import capacitacionTableData from '../data/capacitacionTableData';
import Table from "examples/Tables/Table";
import NewCapacitacion from 'layouts/Functions/newCapacitacion';

const InfoCapacitaciones = () => {

    const [showNewCapacitacion, setShowNewCapacitacion] = useState(false);

    const handleNewCapacitacion = () => {
        setShowNewCapacitacion(true);
      }
    
      const handleCloseNewCapacitacion = () => {
        setShowNewCapacitacion(false);
      }

    const { gradients, info } = colors;
    const { cardContent } = gradients;
    const { columns, rows } = capacitacionTableData;

    return (
        <DashboardLayout>
            <DashboardNavbar />
            <VuiBox py={3}>
                <VuiBox mb={3}>
                    <Card>
                        <VuiBox display="flex" justifyContent="space-between" alignItems="center" mb="22px">
                            <VuiTypography variant="lg" color="white">
                                Capacitaciones
                            </VuiTypography>
                            <VuiButton variant="contained" color="info" onClick={handleNewCapacitacion}>
                                NUEVA CAPACITACIÓN
                            </VuiButton>
                            {showNewCapacitacion && <NewCapacitacion onClose={handleCloseNewCapacitacion} />}
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
            <Footer />
        </DashboardLayout>
    );
};

export default InfoCapacitaciones;
