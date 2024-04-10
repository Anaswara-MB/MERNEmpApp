import React, {useState} from 'react';
import Box from '@mui/material/Box';
import axios from 'axios';
import TextField from '@mui/material/TextField'; 
import { Button, Typography, Link } from '@mui/material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState();
  
    const inputHandler = (e) => {
      setUser({ ...user, [e.target.name]: e.target.value });
      console.log(user);
    };
  
    const addHandler = () => {
      console.log(user);
      axios.post("http://localhost:8000/admin/signup", user)
        .then((res) => {
            if(res.data.message==="login successful"){
                alert(res.data.message);
                console.log(res.data.token);
               sessionStorage.setItem('usertoken',res.data.token);
               navigate('/employee');
            }else{
                alert(res.data.message);
            }
         
        })
        .catch((err) => {
          console.log(err);
        });
    };
  return (
    <div
    style={{
      backgroundImage:
        "radial-gradient( circle farthest-corner at 10% 20%,  rgba(100,43,115,1) 0%, rgba(4,0,4,1) 90% )",
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": {
          m: 1,
          width: "35ch",
          borderRadius: "10px",
          "& input::placeholder": {
            color: "white",
          },
          border: "1px solid white",
          borderColor: "white",
        },
        bgcolor: "rgba(255, 255, 255, 0.2)",
        p: 4,
        borderRadius: "20px",
        textAlign: "center",
        height: "400px",
        width: "400px",
      }}
      noValidate
      autoComplete="off"
    >
      <Typography
        variant="h4"
        style={{ color: "white", marginBottom: "20px" }}
      >
        User Login
      </Typography>
      <div>
        <TextField
          id="outlined-required-email"
          label="Username"
          name="username"
          InputLabelProps={{ style: { color: "white" } }}
          inputProps={{ style: { color: "white" } }}
          onChange={inputHandler}
        />
      </div>
      <div>
        <TextField
          id="outlined-required-password"
          label="Password"
          name="password"
          type="password"
          InputLabelProps={{ style: { color: "white" } }}
          inputProps={{ style: { color: "white" } }}
          onChange={inputHandler}
        />
      </div>
      <Button variant="contained" color="secondary">
        Login
      </Button>
      <Typography
        variant="body2"
        style={{ marginTop: "20px", color: "white" }}
      >
        Don't have an account?{" "}
        <Link component={RouterLink} to="/signup" style={{ color: "white" }}>
          Signup
        </Link>
      </Typography>
    </Box>
  </div>
);
};


export default Login