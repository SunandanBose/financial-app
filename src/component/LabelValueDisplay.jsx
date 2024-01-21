import React from 'react';
import Typography from '@mui/material/Typography';

const LabelValueDisplay = ({ label, value }) => {
  return (
    <div>
      <Typography variant="h6">
        {label} : {value}
      </Typography>
    </div>
  );
};

export default LabelValueDisplay;