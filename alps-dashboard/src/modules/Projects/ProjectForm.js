import React from 'react';
import { TextField, Button, Box } from '@mui/material';

const ProjectForm = () => {
  return (
    <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <TextField label="Title" required />
      <TextField label="Description" multiline rows={4} />
      <TextField label="Status" placeholder="active / on-hold / completed" required />
      <TextField label="Start Date" type="date" InputLabelProps={{ shrink: true }} />
      <TextField label="End Date" type="date" InputLabelProps={{ shrink: true }} />
      <Button type="submit" variant="contained">Save</Button>
    </Box>
  );
};

export default ProjectForm;