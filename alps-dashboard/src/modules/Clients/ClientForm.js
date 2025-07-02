// modules/Clients/ClientForm.js
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
    Paper, TextField, Typography, Button, Grid, Box
} from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const dummyClients = [
    { id: 1, name: 'Acme Corp', email: 'acme@example.com', contact: '9876543210' },
    { id: 2, name: 'Globex Inc', email: 'globex@example.com', contact: '9123456780' },
];

const ClientForm = () => {
    const { clientId } = useParams();
    const navigate = useNavigate();
    const client = dummyClients.find(c => c.id === parseInt(clientId));

    const formik = useFormik({
        initialValues: {
            name: client?.name || '',
            email: client?.email || '',
            contact: client?.contact || '',
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Required'),
            email: Yup.string().email('Invalid email').required('Required'),
            contact: Yup.string().required('Required'),
        }),
        onSubmit: (values) => {
            console.log('Updated Client:', values);
            navigate('/clients');
        },
        enableReinitialize: true,
    });

    if (!client) return <Typography>Client not found</Typography>;

    return (
        <Paper elevation={6} sx={{ p: 4, mt: 4, borderRadius: 3 }}>
            <Typography variant="h5" fontWeight="bold" color="primary">✏️ Edit Client</Typography>

            <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={3} mt={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Full Name"
                            name="name"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            error={formik.touched.name && Boolean(formik.errors.name)}
                            helperText={formik.touched.name && formik.errors.name}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Email"
                            name="email"
                            type="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Contact"
                            name="contact"
                            value={formik.values.contact}
                            onChange={formik.handleChange}
                            error={formik.touched.contact && Boolean(formik.errors.contact)}
                            helperText={formik.touched.contact && formik.errors.contact}
                        />
                    </Grid>
                </Grid>

                <Box mt={4}>
                    <Button variant="contained" type="submit" color="primary">Save Changes</Button>
                    <Button sx={{ ml: 2 }} onClick={() => navigate('/clients')}>Cancel</Button>
                </Box>
            </form>
        </Paper>
    );
};

export default ClientForm;
