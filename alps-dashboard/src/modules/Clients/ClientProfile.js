// modules/Clients/ClientProfile.js
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
    Paper,
    Typography,
    Box,
    Button,
    Grid,
    Divider,
    Avatar,
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

const dummyClients = [
    { id: 1, name: 'Acme Corp', email: 'acme@example.com', contact: '9876543210', projects: [101], tickets: [201] },
    { id: 2, name: 'Globex Inc', email: 'globex@example.com', contact: '9123456780', projects: [103], tickets: [203] },
];

const ClientProfile = () => {
    const { clientId } = useParams();
    const navigate = useNavigate();
    const client = dummyClients.find((c) => c.id === parseInt(clientId));

    if (!client) {
        return (
            <Typography variant="h6" align="center" mt={5} color="error">
                Client not found
            </Typography>
        );
    }

    return (
        <Paper
            elevation={6}
            sx={{
                p: 4,
                mt: 4,
                borderRadius: 4,
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                maxWidth: 700,
                mx: 'auto',
            }}
        >
            {/* Header with Avatar and Title */}
            <Box display="flex" alignItems="center" gap={2} mb={3}>
                <Avatar sx={{ bgcolor: 'primary.main', width: 56, height: 56 }}>
                    <PersonIcon fontSize="large" />
                </Avatar>
                <Box>
                    <Typography variant="h5" fontWeight="bold" color="primary.main">
                        Client Profile
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        View client details below
                    </Typography>
                </Box>
            </Box>

            <Divider sx={{ mb: 3 }} />

            {/* Details */}
            <Grid container spacing={2}>
                <Grid size={{ xs: 12, md: 6 }}>
                    <Typography variant="subtitle2" color="text.secondary">Full Name</Typography>
                    <Typography variant="body1" fontWeight="500">{client.name}</Typography>
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                    <Typography variant="subtitle2" color="text.secondary">Email Address</Typography>
                    <Typography variant="body1" fontWeight="500">{client.email}</Typography>
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                    <Typography variant="subtitle2" color="text.secondary">Contact Number</Typography>
                    <Typography variant="body1" fontWeight="500">{client.contact}</Typography>
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                    <Typography variant="subtitle2" color="text.secondary">Project</Typography>
                    <Typography variant="body1" fontWeight="500">{client.projects}</Typography>
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                    <Typography variant="subtitle2" color="text.secondary">Tickets</Typography>
                    <Typography variant="body1" fontWeight="500">{client.tickets}</Typography>
                </Grid>
            </Grid>

            {/* Edit Button */}
            <Box mt={4}>
                <Button
                    variant="contained"
                    size="medium"
                    sx={{
                        background: 'linear-gradient(to right, #1976d2, #42a5f5)',
                        textTransform: 'none',
                        px: 3,
                        '&:hover': {
                            background: 'linear-gradient(to right, #1565c0, #2196f3)',
                            transform: 'translateY(-1px)',
                        },
                    }}
                    onClick={() => navigate(`/clients`)}
                >
                    Back
                </Button>
            </Box>
        </Paper>
    );
};

export default ClientProfile;
