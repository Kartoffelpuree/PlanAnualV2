/*!

=========================================================
* Vision UI Free React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vision-ui-free-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com/)
* Licensed under MIT (https://github.com/creativetimofficial/vision-ui-free-react/blob/master LICENSE.md)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

/* eslint-disable react/prop-types */
// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiAvatar from "components/VuiAvatar";
import VuiBadge from "components/VuiBadge";

//Components of employees
import EditDeleteButtons from "../EditDeleteButtons";
import Userphoto from "layouts/profile/components/Userphoto";


// Images
import avatar1 from "assets/images/avatar1.png";
import avatar2 from "assets/images/avatar2.png";
import avatar3 from "assets/images/avatar3.png";
import avatar4 from "assets/images/avatar4.png";
import avatar5 from "assets/images/avatar5.png";
import avatar6 from "assets/images/avatar6.png";

function Employee({ image, name, email }) {
    return (

        <VuiBox display="flex" alignItems="center" px={1} py={0.5}>
            <VuiBox display="flex" flexDirection="column">
                <VuiTypography variant="button" color="white" fontWeight="medium">
                    {name}
                </VuiTypography>
                <VuiTypography variant="caption" color="text">
                    {email}
                </VuiTypography>
            </VuiBox>
        </VuiBox>
    );
}

function Function({ job, org }) {
    return (
        <VuiBox display="flex" flexDirection="column">
            <VuiTypography variant="caption" fontWeight="medium" color="white">
                {job}
            </VuiTypography>
            <VuiTypography variant="caption" color="text">
                {org}
            </VuiTypography>
        </VuiBox>
    );
}

export default {
    columns: [
        { name: "Capacitación", align: "left" },
        { name: "STPS", align: "left" },
        { name: "VIGENCIA", align: "center" },
        { name: "fecha", align: "center" },
        { name: "acción", align: "center" },
    ],

    rows: [
        {
            Capacitación: <Employee image={avatar4} name="ASCC-7510-18" email="FLUJO DE TAGS" />,
            STPS: <Function job="CELE290.01" org="" />,
            VIGENCIA: (
                <VuiTypography variant="caption" color="white" fontWeight="medium">
                    ANUAL
                </VuiTypography>
            ),
            fecha: (
                <VuiTypography variant="caption" color="white" fontWeight="medium">
                    23/04/18
                </VuiTypography>
            ),
            acción: (
                <EditDeleteButtons />
            ),
        },
        {
            Capacitación: <Employee image={avatar2} name="ASCC-8240-00" email="INSPECCION Y MEDICION" />,
            STPS: <Function job="CCON0398.01" org="" />,
            VIGENCIA: (
                <VuiTypography variant="caption" color="white" fontWeight="medium">
                    ANUAL
                </VuiTypography>
            ),
            fecha: (
                <VuiTypography variant="caption" color="white" fontWeight="medium">
                    11/01/19
                </VuiTypography>
            ),
            acción: (
                <EditDeleteButtons />
            ),
        },
        {
            Capacitación: <Employee image={avatar3} name="ASCC-6320-04" email="FALLA DE TROQUEL" />,
            STPS: <Function job="CELE0290.01" org="" />,
            VIGENCIA: (
                <VuiTypography variant="caption" color="white" fontWeight="medium">
                    ANUAL
                </VuiTypography>
            ),
            fecha: (
                <VuiTypography variant="caption" color="white" fontWeight="medium">
                    19/09/17
                </VuiTypography>
            ),
            acción: (
                <EditDeleteButtons />
            ),
        },
        {
            Capacitación: <Employee image={avatar1} name="ASCC-8300-07" email="FLUJO DE MERMA-DEFECTIVO-SCRAP" />,
            STPS: <Function job="CELE0290.01" org="" />,
            VIGENCIA: (
                <VuiTypography variant="caption" color="white" fontWeight="medium">
                    ANUAL
                </VuiTypography>
            ),
            fecha: (
                <VuiTypography variant="caption" color="white" fontWeight="medium">
                    24/12/08
                </VuiTypography>
            ),
            acción: (
                <EditDeleteButtons />
            ),
        },
        {
            Capacitación: <Employee image={avatar5} name="ASCC-DGP" email="DESCRIPCION DE PUESTOS" />,
            STPS: <Function job="CELE0290.01" org="" />,
            VIGENCIA: (
                <VuiTypography variant="caption" color="white" fontWeight="medium">
                    ANUAL
                </VuiTypography>
            ),
            fecha: (
                <VuiTypography variant="caption" color="white" fontWeight="medium">
                    04/10/21
                </VuiTypography>
            ),
            acción: (
                <EditDeleteButtons />
            ),
        },
        {
            Capacitación: <Employee image={avatar6} name="ASCC-6420-01" email="5S" />,
            STPS: <Function job="CSEG0443.01" org="" />,
            VIGENCIA: (
                <VuiTypography variant="caption" color="white" fontWeight="medium">
                    ANUAL
                </VuiTypography>
            ),
            fecha: (
                <VuiTypography variant="caption" color="white" fontWeight="medium">
                    14/09/20
                </VuiTypography>
            ),
            acción: (
                <EditDeleteButtons />
            ),
        },
    ],
};
