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
import axios from 'axios';
import { UserState } from '@/context/UserProvider';
import { useNavigate } from 'react-router-dom';
import {CONFIG} from "../../constants/constant"
// import { Input } from '@mui/material';
// import { Photo } from '@mui/icons-material';
export default function Signup(){
  const defaultTheme = createTheme();

  const navigate = useNavigate();
  const [loading,setLoading] = useState(false);
  const [activeSection, setActiveSection] = useState('patient');
  const [patientSignupState, setPatientSignupState] = useState({
    name: '',
    email: '',
    password: '',
    phoneNumber: '',
    age: '',
    medicalHistory: '',
    
  });

  const [doctorSignupState, setDoctorSignupState] = useState({
    name: '',
    email: '',
    password: '',
    phoneNumber: '',
    specialty: '',
    experience: '',
    
  });

  const handlePatientChange = (e) => {
    const { name, value } = e.target;
    setPatientSignupState(prevState => ({ ...prevState, [name]: value }));
  }

  const handleDoctorChange = (e) => {
    const { name, value } = e.target;
    setDoctorSignupState(prevState => ({ ...prevState, [name]: value }));
  }

  const handlePatientSubmit = async(e) => {
    e.preventDefault();
    console.log(patientSignupState);
    await createAccount(patientSignupState,"patient");
  }

  const handleDoctorSubmit =async (e) => {
    e.preventDefault();
    console.log(doctorSignupState);
    await createAccount(doctorSignupState,"doctor");
  }

  const createAccount = async(signupState,role) => {
    
    setLoading(true)

    
    try {

      
    
      if(role ==='patient')
        {
           const {data} = await axios.post(`${CONFIG.apiurl}/api/patient/signup`,{
            name:signupState.name,
            email:signupState.email,
            password:signupState.password,
            phoneNumber: signupState.phoneNumber,
            age:signupState.age,
            medicalHistory: signupState.medicalHistory,
            photo:signupState.pic

           })

          
        
        }
        else{
          const {data} = await axios.post(`${CONFIG.apiurl}/api/doctor/signup`,{
            name:signupState.name,
            email:signupState.email,
            password:signupState.password,
            phoneNumber: signupState.phoneNumber,
            specialty:signupState.specialty,
            experience: signupState.experience,
            photo:signupState.pic
           })
        }


      setLoading(false);
      navigate("/")
    } catch (error) {
      console.log(error)
    }
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
                id="age"
                label="age"
                name="age"
                autoComplete="age"
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
                id="specialty"
                label="specialty"
                name="specialty"
                autoComplete="specialty"
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
              <Link href="/login" variant="body2">
                {"Have an account? Login"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
