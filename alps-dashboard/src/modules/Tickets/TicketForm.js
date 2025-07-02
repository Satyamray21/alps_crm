import React from 'react';
import { TextField, Button, Box } from '@mui/material';

const TicketForm = () => {
  return (
    <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <TextField label="Subject" required />
      <TextField label="Details" multiline rows={4} />
      <TextField label="Priority" placeholder="low / medium / high" required />
      <TextField label="Status" placeholder="open / pending / resolved" required />
      <TextField label="Assigned To" />
      <Button type="submit" variant="contained">Submit</Button>
    </Box>
  );
};

export default TicketForm;