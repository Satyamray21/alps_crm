import React from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody, Button, Paper } from '@mui/material';

const tickets = [
  { id: 1, subject: 'Bug in login', status: 'open' },
  { id: 2, subject: 'Feature request', status: 'pending' }
];

const TicketList = () => (
  <Paper sx={{ p: 2 }}>
    <Button variant="contained" href="/tickets/new" sx={{ mb: 2 }}>New Ticket</Button>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell>Subject</TableCell>
          <TableCell>Status</TableCell>
          <TableCell>Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {tickets.map(ticket => (
          <TableRow key={ticket.id}>
            <TableCell>{ticket.id}</TableCell>
            <TableCell>{ticket.subject}</TableCell>
            <TableCell>{ticket.status}</TableCell>
            <TableCell>
              <Button href={`/tickets/edit/${ticket.id}`} variant="outlined">Edit</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
);

export default TicketList;