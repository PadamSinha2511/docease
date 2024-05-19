import { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function Signup(){
  const defaultTheme = createTheme();
  const [activeSection, setActiveSection] = useState('patient');
  const [patientSignupState, setPatientSignupState] = useState({
    name: '',
    email: '',
    password: '',
    phoneNumber: '',
    dateOfBirth: '',
    medicalHistory: ''
  });

  const [doctorSignupState, setDoctorSignupState] = useState({
    name: '',
    email: '',
    password: '',
    phoneNumber: '',
    speciality: '',
    experience: ''
  });

  const handlePatientChange = (e) => {
    const { name, value } = e.target;
    setPatientSignupState(prevState => ({ ...prevState, [name]: value }));
  }

  const handleDoctorChange = (e) => {
    const { name, value } = e.target;
    setDoctorSignupState(prevState => ({ ...prevState, [name]: value }));
  }

  const handlePatientSubmit = (e) => {
    e.preventDefault();
    console.log(patientSignupState);
    createAccount(patientSignupState);
  }

  const handleDoctorSubmit = (e) => {
    e.preventDefault();
    console.log(doctorSignupState);
    createAccount(doctorSignupState);
  }

  const createAccount = (signupState) => {
    // API Integration here
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <ToggleButtonGroup
            value={activeSection}
            exclusive
            onChange={(e, newSection) => setActiveSection(newSection)}
            sx={{ mt: 3 }}
          >
            <ToggleButton value="patient">Patient</ToggleButton>
            <ToggleButton value="doctor">Doctor</ToggleButton>
          </ToggleButtonGroup>
          {activeSection === 'patient' && (
            <Box component="form" onSubmit={handlePatientSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="patientName"
                label="Name"
                name="name"
                autoComplete="name"
                autoFocus
                onChange={handlePatientChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="patientEmail"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={handlePatientChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="patientPassword"
                autoComplete="current-password"
                onChange={handlePatientChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="patientPhoneNumber"
                label="Phone Number"
                name="phoneNumber"
                autoComplete="phoneNumber"
                onChange={handlePatientChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="dateOfBirth"
                label="Date of Birth"
                name="dateOfBirth"
                autoComplete="dateOfBirth"
                onChange={handlePatientChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="medicalHistory"
                label="Medical History"
                name="medicalHistory"
                autoComplete="medicalHistory"
                onChange={handlePatientChange}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
            </Box>
          )}
          {activeSection === 'doctor' && (
            <Box component="form" onSubmit={handleDoctorSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="doctorName"
                label="Name"
                name="name"
                autoComplete="name"
                autoFocus
                onChange={handleDoctorChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="doctorEmail"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={handleDoctorChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="doctorPassword"
                autoComplete="current-password"
                onChange={handleDoctorChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="doctorPhoneNumber"
                label="Phone Number"
                name="phoneNumber"
                autoComplete="phoneNumber"
                onChange={handleDoctorChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="speciality"
                label="Speciality"
                name="speciality"
                autoComplete="speciality"
                onChange={handleDoctorChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="experience"
                label="Experience"
                name="experience"
                autoComplete="experience"
                onChange={handleDoctorChange}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
            </Box>
          )}
          <Grid container>
            <Grid item>
              <Link href="http://localhost:5173/login" variant="body2">
                {"Have an account? Login"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
