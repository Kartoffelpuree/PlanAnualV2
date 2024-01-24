import React from 'react';
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



const InfoEmployee = () => {
    // Datos de ejemplo para la gráfica radar
    const { gradients, info } = colors;
    const { cardContent } = gradients;
    const { columns, rows } = employeesTableData;

    return (
        <DashboardLayout>
            <DashboardNavbar />
            <VuiBox py={3}>
                <VuiBox mb={3}>
                    <Card>
                        <VuiBox display="flex" justifyContent="space-between" alignItems="center" mb="22px">
                            <VuiTypography variant="lg" color="white">
                                Empleados
                            </VuiTypography>
                            <VuiButton variant="contained" color="info">
                                ADD NEW EMPLOYEE
                            </VuiButton>
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
