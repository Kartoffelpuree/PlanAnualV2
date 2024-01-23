import React from 'react';
import Chart from 'react-apexcharts';

import { Card, Stack, Grid } from '@mui/material';

import VuiBox from 'components/VuiBox';
import linearGradient from 'assets/theme/functions/linearGradient';
import LineChart from 'examples/Charts/LineCharts/LineChart';
import { lineChartDataProfile1, lineChartDataProfile2 } from 'variables/charts';
import { lineChartOptionsProfile2, lineChartOptionsProfile1 } from 'variables/charts';

import colors from 'assets/theme/base/colors';
import VuiTypography from 'components/VuiTypography';
// Vision UI Dashboard React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";
import Userphoto from "layouts/profile/components/Userphoto";


const RadarChart = () => {
    // Datos de ejemplo para la gráfica radar
    const { gradients, info } = colors;
    const { cardContent } = gradients;
    const data = {
        series: [
            {
                name: 'Autoevaluación/Self Evaluation',
                data: [4, 3, 4, 3, 5, 3, 4, 4, 5, 4, 4, 4],
            },
            {
                name: 'Jefe Inmediato/Immediate Boss',
                data: [5, 5, 4, 5, 5, 4, 5, 4, 5, 4, 5, 4],
            },
        ],
        options: {
            chart: {
                type: 'radar',
            },
            chart: {
                display: 'flex',
            },
            colors: ['#4CAF50'], // Color de la línea del radar
            markers: {
                size: 6,
                strokeWidth: 3,
                fillColors: ['#4CAF50'], // Color del punto
            },
            stroke: {
                show: true,
                width: 2,
                colors: ["#2d8cfc", "#0f4a91"],
                dashArray: 0,
            },
            legend: {
                show: false,
            },
            dataLabels: {
                enabled: false,
            },
            fill: {
                colors: ["#2d8cfc", "#0f4a91"],
                type: "solid",
            },
            tooltip: {
                enabled: true,
                theme: "dark",
            },
            yaxis: {
                show: false
            },
            xaxis: {
                categories: [
                    'Q1_Calidad/Quality',
                    'Q2_Productividad/Productivity',
                    'Q3_Conocimiento de su trabajo/Knowledge of their work',
                    'Q4_Confiabilidad/Reliability',
                    'Q5_Asistencia/Attendance',
                    'Q6_Independencia/Independence',
                    'Q7_Creatividad/Creativity',
                    'Q8_Iniciativa/Initiative',
                    'Q9_Respeto a las políticas/Respect for policies',
                    'Q10_Relaciones interpersonales/Interpersonal relationships',
                    'Q11_Juicio/Judgment',
                    'Q12_Capacitación/Training',
                ],
                labels: {
                    style: {
                        color: "#8F9BBA",
                    },
                },
            },
        },
    };

    return (
        <DashboardLayout>
            <DashboardNavbar />
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
                            title="profile information"
                            info={{
                                'nombre/name': "Hernandez Cruz Carlos Cesar",
                                'área/area': "Production",
                                'depto/depto': "Production",
                                'puesto/Job position': "Supervisor",
                            }}
                        />
                    </Grid>
                </Grid>
            </Card>
            <VuiBox mt={3} mb={3}>
                <Card
                    sx={({ breakpoints }) => ({
                        [breakpoints.up('xxl')]: {
                        },
                        display: 'block',

                    })}>
                    <VuiTypography
                        color='white'
                        variant='h4'
                        fontWeight='bold'
                        display='inline-block'
                        sx={({ breakpoints }) => ({
                            [breakpoints.only('xl')]: {
                                fontSize: '20px'
                            }
                        })}>
                        RADAR
                    </VuiTypography>
                    <Chart options={data.options} series={data.series} type="radar" />
                </Card>
            </VuiBox>
            <Footer />
        </DashboardLayout>
    );
};

export default RadarChart;
