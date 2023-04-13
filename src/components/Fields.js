import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

const Fields = ({task, timing, index}) => {
  return (
    <div className="data_val">
          <h4>{task}</h4>
          <h4>{timing}</h4>
          <Stack>
          <Button variant="contained" color="error">
                <DeleteIcon />
        </Button>
        </Stack>
    </div>
  )
}

export default Fields
