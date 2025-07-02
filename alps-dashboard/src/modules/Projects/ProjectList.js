import React from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody, Button, Paper } from '@mui/material';

const projects = [
  { id: 1, title: 'Website Redesign', status: 'active' },
  { id: 2, title: 'CRM Integration', status: 'on-hold' }
];

const ProjectList = () => (
  <Paper sx={{ p: 2 }}>
    <Button variant="contained" href="/projects/new" sx={{ mb: 2 }}>Add Project</Button>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell>Title</TableCell>
          <TableCell>Status</TableCell>
          <TableCell>Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {projects.map(project => (
          <TableRow key={project.id}>
            <TableCell>{project.id}</TableCell>
            <TableCell>{project.title}</TableCell>
            <TableCell>{project.status}</TableCell>
            <TableCell>
              <Button href={`/projects/edit/${project.id}`} variant="outlined">Edit</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
);

export default ProjectList;