import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';

const StatCard = ({ label, value }) => (
  <Paper elevation={3} sx={{ p: 3 }}>
    <Typography variant="h6">{label}</Typography>
    <Typography variant="h4">{value}</Typography>
  </Paper>
);

const Dashboard = () => {
  return (
    <Grid container spacing={3}>
      <Grid size={{xs:12 , md:4}}><StatCard label="# Clients" value={12} /></Grid>
      <Grid size={{xs:12 , md:4}}><StatCard label="# Active Projects" value={8} /></Grid>
      <Grid size={{xs:12 , md:4}}><StatCard label="# Pending Tickets" value={5} /></Grid>
    </Grid>
  );
};

export default Dashboard;