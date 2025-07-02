import React from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody, Paper, Button } from '@mui/material';

const clients = [
  { id: 1, name: 'Acme Corp', email: 'acme@example.com' },
  { id: 2, name: 'Globex Inc', email: 'globex@example.com' }
];

const ClientList = () => (
  <Paper sx={{ p: 2 }}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {clients.map(client => (
          <TableRow key={client.id}>
            <TableCell>{client.id}</TableCell>
            <TableCell>{client.name}</TableCell>
            <TableCell>{client.email}</TableCell>
            <TableCell>
              <Button variant="outlined" href={`/clients/${client.id}`}>View</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
);

export default ClientList;