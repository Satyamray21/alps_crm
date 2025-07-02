// --- modules/Clients/ClientList.js ---
import React, { useEffect, useState } from 'react';
import {
  Paper, Table, TableHead, TableRow, TableCell, TableBody,
  Button, Typography, Box, TextField, IconButton
} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';

const initialClients = [
  { id: 1, name: 'Acme Corp', email: 'acme@example.com', projects: [101, 102], tickets: [201, 202] },
  { id: 2, name: 'Globex Inc', email: 'globex@example.com', projects: [103], tickets: [203] },
];

const ClientList = () => {
  const navigate = useNavigate();
  const role = localStorage.getItem('role');
  const [search, setSearch] = useState('');
  const [filteredClients, setFilteredClients] = useState(initialClients);

  // useEffect(() => {
  //   if (!role || role !== 'admin') {
  //     alert('Unauthorized access. Admins only.');
  //     navigate('/');
  //   }
  // }, [role, navigate]);

  useEffect(() => {
    const filtered = initialClients.filter(client =>
      client.name.toLowerCase().includes(search.toLowerCase()) ||
      client.email.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredClients(filtered);
  }, [search]);

  const handleDelete = (id) => {
    const confirm = window.confirm('Are you sure you want to delete this client?');
    if (confirm) {
      console.log('Deleted client with ID:', id);
    }
  };

  return (
    <Paper elevation={6} sx={{ p: 4, mt: 4, borderRadius: 4, boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3} flexWrap="wrap">
        <Typography variant="h5" fontWeight="bold" color="primary.main">
          👥 Client List
        </Typography>

        <Box display="flex" alignItems="center" gap={1}>
          <TextField
            size="small"
            variant="outlined"
            placeholder="Search clients..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            InputProps={{
              endAdornment: (
                <IconButton>
                  <SearchIcon />
                </IconButton>
              )
            }}
          />
        </Box>
      </Box>

      <Box sx={{ overflowX: 'auto' }}>
        {filteredClients.length === 0 ? (
          <Typography variant="body1" align="center" sx={{ mt: 4, fontStyle: 'italic', color: 'gray' }}>
            No matching clients found.
          </Typography>
        ) : (
          <Table sx={{ minWidth: 650, borderCollapse: 'separate', borderSpacing: '0 8px' }}>
            <TableHead>
              <TableRow sx={{ backgroundColor: '#f1f1f1' }}>
                <TableCell sx={{ fontWeight: 'bold' }}>ID</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Name</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Email</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Projects</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Tickets</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }} align="center">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredClients.map(client => (
                <TableRow key={client.id} sx={{ backgroundColor: '#fff', transition: '0.2s', '&:hover': { backgroundColor: '#e3f2fd', transform: 'scale(1.01)', boxShadow: '0 2px 12px rgba(0,0,0,0.05)' } }}>
                  <TableCell>{client.id}</TableCell>
                  <TableCell>{client.name}</TableCell>
                  <TableCell>{client.email}</TableCell>
                  <TableCell>{client.projects.join(', ')}</TableCell>
                  <TableCell>{client.tickets.join(', ')}</TableCell>
                  <TableCell align="center">
                    <Box display="flex" justifyContent="center" gap={1}>
                      <Button
                        variant="contained"
                        size="small"
                        onClick={() => navigate(`/clients/${client.id}`)}
                        startIcon={<VisibilityIcon />}
                        sx={{ textTransform: 'none', background: 'linear-gradient(to right, #1976d2, #2196f3)', color: '#fff', '&:hover': { background: 'linear-gradient(to right, #1565c0, #1e88e5)' } }}
                      >
                        View
                      </Button>
                      <Button
                        variant="outlined"
                        size="small"
                        onClick={() => navigate(`/clients/edit/${client.id}`)}
                        startIcon={<EditIcon />}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="outlined"
                        color="error"
                        size="small"
                        onClick={() => handleDelete(client.id)}
                        startIcon={<DeleteIcon />}
                      >
                        Delete
                      </Button>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </Box>
    </Paper>
  );
};

export default ClientList;