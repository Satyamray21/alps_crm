import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../modules/Layout/Layout';
import Dashboard from '../modules/Dashboard';
import ClientList from '../modules/Clients/ClientList';
import ClientProfile from '../modules/Clients/ClientProfile';
import ProjectList from '../modules/Projects/ProjectList';
import ProjectForm from '../modules/Projects/ProjectForm';
import TicketList from '../modules/Tickets/TicketList';
import TicketForm from '../modules/Tickets/TicketForm';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import ProtectedRoute from '../Route/ProtectedRoute';
import ClientForm from '../modules/Clients/ClientForm';
import ProjectProfile from '../modules/Projects/ProjectProfile';
import EditProjectForm from '../modules/Projects/EditProjectForm ';
import TicketProfile from '../modules/Tickets/TicketProfile';
import EditTicketForm from '../modules/Tickets/EditTicketForm';
import ChangePassword from '../Pages/ChangePassword';

const MainRoute = () => {
    return (
        <Routes>
            {/* Public Route */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Protected Routes */}
            <Route element={<ProtectedRoute />}>
                <Route element={<Layout />}>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/clients" element={<ClientList />} />
                    <Route path="/clients/:user_id" element={<ClientProfile />} />
                    <Route path="/clients/edit/:user_id" element={<ClientForm />} />
                    <Route path="/projects" element={<ProjectList />} />
                    <Route path="/projects/new" element={<ProjectForm />} />
                    <Route path="/projects/edit/:projectId" element={<EditProjectForm />} />
                    <Route path="/projects/:projectId" element={<ProjectProfile />} />
                    <Route path="/tickets" element={<TicketList />} />
                    <Route path="/tickets/new" element={<TicketForm />} />
                    <Route path="/tickets/edit/:ticket_id" element={<EditTicketForm />} />
                    <Route path="/tickets/:ticketId" element={<TicketProfile />} />
                    <Route path="/change-password" element={<ChangePassword />} />
                </Route>
            </Route>
        </Routes>
    );
};

export default MainRoute;
