import React from 'react';
import imagentest1 from 'images/test1aguila.png'
import { Grid } from '@mui/material';
import colors from 'assets/theme/base/colors';

const { gradients, info } = colors;

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";

function Userphoto() {
    return (
        <Grid item xs={12} xl={3} height="100%">
            <VuiBox
                display='flex'
                justifyContent='center'
                alignItems='center'
                sx={{
                    background: info.main,
                    borderRadius: '12px',
                    width: '276px',
                    height: '272.50px'
                }}>
                <VuiBox display='flex'
                    height='271.50px'
                    width='275px'
                    borderRadius='12px'
                    justifyContent='center'
                    alignItems='center' component='img' src={imagentest1} />
            </VuiBox>
        </Grid>
    );
}

export default Userphoto;
