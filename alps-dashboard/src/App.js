import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';
import Navbar from './components/Navbar';
import Dashboard from './modules/Dashboard';
import ClientList from './modules/Clients/ClientList';
import ClientProfile from './modules/Clients/ClientProfile';
import ProjectList from './modules/Projects/ProjectList';
import ProjectForm from './modules/Projects/ProjectForm';
import TicketList from './modules/Tickets/TicketList';
import TicketForm from './modules/Tickets/TicketForm';

function App() {
  return (
    <Router>
      <Navbar />
      <Container sx={{ mt: 4 }}>
        <Routes>
          <Route path="/" element={<Dashboard />} />

          {/* Clients */}
          <Route path="/clients" element={<ClientList />} />
          <Route path="/clients/:clientId" element={<ClientProfile />} />

          {/* Projects */}
          <Route path="/projects" element={<ProjectList />} />
          <Route path="/projects/new" element={<ProjectForm />} />
          <Route path="/projects/edit/:projectId" element={<ProjectForm />} />

          {/* Tickets */}
          <Route path="/tickets" element={<TicketList />} />
          <Route path="/tickets/new" element={<TicketForm />} />
          <Route path="/tickets/edit/:ticketId" element={<TicketForm />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;