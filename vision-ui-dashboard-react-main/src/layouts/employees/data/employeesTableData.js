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
import EditDeleteButtons from "../components/EditDeleteButtons";

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
      <VuiBox mr={2}>
        <VuiAvatar src={image} alt={name} size="sm" variant="rounded" />
      </VuiBox>
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
    { name: "empleado", align: "left" },
    { name: "puesto", align: "left" },
    { name: "status", align: "center" },
    { name: "fecha", align: "center" },
    { name: "acción", align: "center" },
  ],

  rows: [
    {
      empleado: <Employee image={avatar4} name="Esthera Jackson" email="esthera@simmmple.com" />,
      puesto: <Function job="Manager" org="Organization" />,
      status: (
        <VuiBadge
          variant="standard"
          badgeContent="Activo"
          color="success"
          size="xs"
          container
          sx={({ palette: { white, success }, borders: { borderRadius, borderWidth } }) => ({
            background: success.main,
            border: `${borderWidth[1]} solid ${success.main}`,
            borderRadius: borderRadius.md,
            color: white.main,
          })}
        />
      ),
      fecha: (
        <VuiTypography variant="caption" color="white" fontWeight="medium">
          23/04/18
        </VuiTypography>
      ),
      acción: (
        <EditDeleteButtons/>
      ),
    },
    {
      empleado: <Employee image={avatar2} name="Alexa Liras" email="alexa@simmmple.com" />,
      puesto: <Function job="Programator" org="Developer" />,
      status: (
        <VuiBadge
          variant="standard"
          badgeContent="Baja"
          size="xs"
          container
          sx={({ palette: { white }, borders: { borderRadius, borderWidth } }) => ({
            background: "red",
            border: `${borderWidth[1]} solid ${white.main}`,
            borderRadius: borderRadius.md,
            color: white.main,
          })}
        />
      ),
      fecha: (
        <VuiTypography variant="caption" color="white" fontWeight="medium">
          11/01/19
        </VuiTypography>
      ),
      acción: (
        <EditDeleteButtons/>
      ),
    },
    {
      empleado: <Employee image={avatar3} name="Laurent Michael" email="laurent@simmmple.com" />,
      puesto: <Function job="Executive" org="Projects" />,
      status: (
        <VuiBadge
          variant="standard"
          badgeContent="Activo"
          color="success"
          size="xs"
          container
          sx={({ palette: { white, success }, borders: { borderRadius, borderWidth } }) => ({
            background: success.main,
            border: `${borderWidth[1]} solid ${success.main}`,
            borderRadius: borderRadius.md,
            color: white.main,
          })}
        />
      ),
      fecha: (
        <VuiTypography variant="caption" color="white" fontWeight="medium">
          19/09/17
        </VuiTypography>
      ),
      acción: (
        <EditDeleteButtons/>
      ),
    },
    {
      empleado: <Employee image={avatar1} name="Freduardo Hill" email="freduardo@simmmple.com" />,
      puesto: <Function job="Programator" org="Developer" />,
      status: (
        <VuiBadge
          variant="standard"
          badgeContent="Activo"
          color="success"
          size="xs"
          container
          sx={({ palette: { white, success }, borders: { borderRadius, borderWidth } }) => ({
            background: success.main,
            border: `${borderWidth[1]} solid ${success.main}`,
            borderRadius: borderRadius.md,
            color: white.main,
          })}
        />
      ),
      fecha: (
        <VuiTypography variant="caption" color="white" fontWeight="medium">
          24/12/08
        </VuiTypography>
      ),
      acción: (
        <EditDeleteButtons/>
      ),
    },
    {
      empleado: <Employee image={avatar5} name="Daniel Thomas" email="daniel@simmmple.com" />,
      puesto: <Function job="Manager" org="Executive" />,
      status: (
        <VuiBadge
          variant="standard"
          badgeContent="Baja"
          size="xs"
          container
          sx={({ palette: { white }, borders: { borderRadius, borderWidth } }) => ({
            background: "red",
            border: `${borderWidth[1]} solid ${white.main}`,
            borderRadius: borderRadius.md,
            color: white.main,
          })}
        />
      ),
      fecha: (
        <VuiTypography variant="caption" color="white" fontWeight="medium">
          04/10/21
        </VuiTypography>
      ),
      acción: (
        <EditDeleteButtons/>
      ),
    },
    {
      empleado: <Employee image={avatar6} name="José Pedroza" email="jpedroza@ascc.com.mx" />,
      puesto: <Function job="Ingeniero" org="Seguridad e Higiene" />,
      status: (
        <VuiBadge
          variant="standard"
          badgeContent="Baja"
          size="xs"
          container
          sx={({ palette: { white }, borders: { borderRadius, borderWidth } }) => ({
            background: "red",
            border: `${borderWidth[1]} solid ${white.main}`,
            borderRadius: borderRadius.md,
            color: white.main,
          })}
        />
      ),
      fecha: (
        <VuiTypography variant="caption" color="white" fontWeight="medium">
          14/09/20
        </VuiTypography>
      ),
      acción: (
        <EditDeleteButtons/>
      ),
    },
  ],
};
