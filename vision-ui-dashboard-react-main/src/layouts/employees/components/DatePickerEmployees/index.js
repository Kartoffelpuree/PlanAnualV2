import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/material/AdapterDateFns';
import LocalizationProvider from '@mui/material/LocalizationProvider';
import MobileDateRangePicker from '@mui/lab/MobileDateRangePicker';

const DatePickerRange = () => {
  const [dateRange, setDateRange] = useState([null, null]);

  const handleDateChange = (newDateRange) => {
    setDateRange(newDateRange);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <MobileDateRangePicker
        startText="Fecha de Inicio"
        endText="Fecha de Fin"
        value={dateRange}
        onChange={handleDateChange}
        renderInput={(startProps, endProps) => (
          <>
            <TextField {...startProps} variant="standard" margin="normal" helperText="" />
            <TextField {...endProps} variant="standard" margin="normal" helperText="" />
          </>
        )}
      />
    </LocalizationProvider>
  );
};

export default DatePickerRange;
