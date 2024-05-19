// import { useState } from 'react';
// // import { loginFields } from "../../constants/formFields";
// // import FormAction from "./FormAction";
// // import FormExtra from "./FormExtra";
// // import Input from "./Input";

// // const fields=loginFields;
// // let fieldsState = {};
// // fields.forEach(field=>fieldsState[field.id]='');


// import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import {useNavigate} from "react-router-dom"
// import axios from 'axios';
// const defaultTheme = createTheme();

// export default function Login(){
//     // const [loginState,setLoginState]=useState(fieldsState);
//     const[email,setEmail] = useState("")
//     const[password,setPassword] = useState("")
//     const[isDoctor,setIsDoctor] = useState(false)
//     const[loading,setLoading] = useState(false)
    
    
//     const navigate = useNavigate();
//     const handleLogin = async (e)=>{
//         e.preventDefault();
//         console.log(email,password,isDoctor)
       


//     setLoading(true)
//     if( !email || !password )
//     {
//       toast({
//         title:'All fields are required',
//         status:'warning',
//         duration:5000,
//         isClosable:true,
//         position:'top'
//       })
//       return
//     }

//     try {
//       const config = {
//         headers: {
//           "Content-type": "application/json",
//         },
//       };
  
//       if(isDoctor)
//         {
//    const {data} = await axios.post("http://localhost:8080/api/doctor/signin",
//             {email,password},
//             config
//             )
//             console.log(data)
//              localStorage.setItem("userdata",JSON.stringify(data))
//             setLoading(false)
//              navigate("/doctorspage")
//         }
//         else{ 
//             const {data} = await axios.post("http://localhost:8080/api/patient/signin",
//             {email,password},
//             config
//             )
//             console.log(data)
//              localStorage.setItem("userdata",JSON.stringify(data))
//             setLoading(false)
//              navigate("/")
//         }
       
//     } catch (error) {
//       console.log(error)
//     }


   
//   }
//     //Handle Login API Integration here
//     const authenticateUser = () =>{

//     }

//     // return(
//     //     <form className="mt-8 space-y-6" onSubmit={handleLogin}>
//     //     <div className="-space-y-px">
//     //         <div>

//     //         <label>Email address</label>
//     //         <Input
          
//     //       type="email"
//     //       placeholder="Enter Your Email Address"
//     //       onChange={(e) => setEmail(e.target.value)}
//     //       />
//     //         </div>
//     //         <div>

//     //         <label>Password </label>
//     //         <Input
         
//     //       type="password"
//     //       placeholder="Enter Your password"
//     //       onChange={(e) => setPassword(e.target.value)}
//     //       />
//     //         </div>
        
//     //     </div>
       
//     //     <FormExtra/>
//     //     <FormAction handleSubmit={handleLogin} text="Login"/>

//     //   </form>
//     // )
    
//     return (
//         <ThemeProvider theme={defaultTheme}>
//           <Container component="main" maxWidth="xs">
//             <CssBaseline />
//             <Box
//               sx={{
//                 marginTop: 8,
//                 display: 'flex',
//                 flexDirection: 'column',
//                 alignItems: 'center',
//               }}
//             >
//               <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//                 <LockOutlinedIcon />
//               </Avatar>
//               <Typography component="h1" variant="h5">
//                 Sign in
//               </Typography>
//               <Box component="form" onSubmit={handleLogin   } noValidate sx={{ mt: 1 }}>
//                 <TextField
//                   margin="normal"
//                   required
//                   fullWidth
//                   id="email"
//                   label="Email Address"
//                   name="email"
//                   autoComplete="email"
//                   autoFocus
//                   onChange={(e)=>{setEmail(e.target.value)}}
//                 />
//                 <TextField
//                   margin="normal"
//                   required
//                   fullWidth
//                   name="password"
//                   label="Password"
//                   type="password"
//                   id="password"
//                   autoComplete="current-password"
//                   onChange={(e)=>{setPassword(e.target.value)}}
//                 />
//                 <FormControlLabel
//                   control=
//                   {
//                   <Checkbox
//                   checked={isDoctor}
//                   onChange={(e)=>{setIsDoctor(e.target.checked)}}
//                   value="remember" color="primary" />}
//                   label="Are you a doctor?"
//                 />
//                 <Button
//                   type="submit"
//                   fullWidth
//                   variant="contained"
//                   sx={{ mt: 3, mb: 2 }}
//                 >
//                   Sign In
//                 </Button>
//                 <Grid container>
//                   <Grid item xs>
//                     <Link href="#" variant="body2">
//                       Forgot password?
//                     </Link>
//                   </Grid>
//                   <Grid item>
//                     <Link href="#" variant="body2">
//                       {"Don't have an account? Sign Up"}
//                     </Link>
//                   </Grid>
//                 </Grid>
//               </Box>
//             </Box>
//             {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
//           </Container>
//         </ThemeProvider>
//       );
// }
// /*//Handle Login API Integration here
//     const authenticateUser = () =>{
        
       
//         const endpoint=`https://api.loginradius.com/identity/v2/auth/login?apikey=${apiKey}`;
//          fetch(endpoint,
//              {
//              method:'POST',
//              headers: {
//              'Content-Type': 'application/json'
//              },
//              body:JSON.stringify(loginFields)
//              }).then(response=>response.json())
//              .then(data=>{
//                 //API Success from LoginRadius Login API
//              })
//              .catch(error=>console.log(error))
         
//     } */


import { useState } from 'react';
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { toast } from 'react-toastify'; // Add this if you're using react-toastify
import { UserState } from '@/context/UserProvider';

const defaultTheme = createTheme();

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isDoctor, setIsDoctor] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const navigate = useNavigate();
  const {setUser} = UserState();
  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(email, password, isDoctor);

    setLoading(true);

    if (!email || !password) {
      toast({
        title: 'All fields are required',
        status: 'warning',
        duration: 5000,
        isClosable: true,
        position: 'top'
      });
      setLoading(false);
      return;
    }

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      let response;
      if (isDoctor) {
        response = await axios.post("http://localhost:8080/api/doctor/signin",
          { email, password },
          config
        );
      } else {
        response = await axios.post("http://localhost:8080/api/patient/signin",
          { email, password },
          config
        );
      }
      
      const data = response.data;
      console.log(data);
      localStorage.setItem("userdata", JSON.stringify(data));
      setUser(data)
      setLoading(false);
      if (isDoctor) {
        navigate("/doctorspage");
      } else {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast({
        title: 'Login failed',
        description: error.response.data.message || 'Something went wrong',
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'top'
      });
    }
  };

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
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleLogin} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e) => { setEmail(e.target.value); }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => { setPassword(e.target.value); }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={isDoctor}
                  onChange={(e) => { setIsDoctor(e.target.checked); }}
                  value="remember"
                  color="primary"
                />
              }
              label="Are you a doctor?"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              {loading ? 'Signing In...' : 'Sign In'}
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="http://localhost:5173/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
