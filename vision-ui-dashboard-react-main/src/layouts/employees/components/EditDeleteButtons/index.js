
import VuiBox from "components/VuiBox";
import VuiButton from "components/VuiButton";

// @mui material components
import Icon from "@mui/material/Icon";

function EditDeleteButtons() {
    return (
        <VuiBox
          display="flex"
          alignItems="center"
          mt={{ xs: 2, sm: 0 }}
          ml={{ xs: -1.5, sm: 0 }}
          sx={({ breakpoints }) => ({
            [breakpoints.only("sm")]: {
              flexDirection: "column",
            },
          })}
        >
          <VuiBox mr={1}>
            <VuiButton variant="text" color="error">
              <Icon sx={{ mr: "4px" }}>delete</Icon>&nbsp;DELETE
            </VuiButton>
          </VuiBox>
          <VuiButton variant="text" color="text">
            <Icon sx={{ mr: "4px" }}>edit</Icon>&nbsp;EDIT
          </VuiButton>
        </VuiBox>
    )
}

export default EditDeleteButtons;