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
import employeesTableData from '../data/employeesTableData';
import Table from "examples/Tables/Table";
import NewEmployee from 'layouts/Functions/newEmployee';


const InfoEmployee = () => {
    // Datos de ejemplo para la gráfica radar
    const { gradients, info } = colors;
    const { cardContent } = gradients;
    const { columns, rows } = employeesTableData;
    const [showNewEmployee, setShowNewEmployee] = useState(false);

    const handleNewEmployeeClick = () => {
        setShowNewEmployee(true);
      }
    
      const handleCloseNewModal = () => {
        setShowNewEmployee(false);
      }

    return (
        <DashboardLayout>
            <DashboardNavbar />
            <VuiBox py={3}>
                <Card
                    sx={({ breakpoints }) => ({
                        [breakpoints.up('xxl')]: {
                        },
                        display: 'block',
                    })}>
                    <Grid
                        container
                        sx={({ breakpoints }) => ({
                            spacing: '24px',
                            [breakpoints.only('sm')]: {
                                columnGap: '0px',
                                rowGap: '24px'
                            },
                            [breakpoints.up('md')]: {
                                gap: '24px',
                                ml: '50px !important'
                            },
                            [breakpoints.only('xl')]: {
                                gap: '12px',
                                mx: 'auto !important'
                            }
                        })}>
                        <Grid item spacing={3}>
                            <Userphoto />
                        </Grid>
                        <Grid item xs={12} md={5.5} xl={5.8} xxl={5.5}>
                            <ProfileInfoCard
                                title="Información empleado"
                                info={{
                                    'nombre/name': "Francisco Joel Aguila Delgado",
                                    'área/area': "Control de Producción",
                                    'depto/depto': "Control de Producción",
                                    'puesto/Job position': "Staff",
                                }}
                            />
                        </Grid>
                    </Grid>
                </Card>
            </VuiBox>
            <VuiBox py={3}>
                <VuiBox mb={3}>
                    <Card>
                        <VuiBox display="flex" justifyContent="space-between" alignItems="center" mb="22px">
                            <VuiTypography variant="lg" color="white">
                                Empleados
                            </VuiTypography>
                            <VuiButton variant="contained" color="info" onClick={handleNewEmployeeClick}>
                                NUEVO EMPLEADO
                            </VuiButton>
                            {showNewEmployee && <NewEmployee onClose={handleCloseNewModal} />}
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

export default InfoEmployee;
