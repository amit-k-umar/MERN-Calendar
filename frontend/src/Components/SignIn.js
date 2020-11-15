import React, { ReactElement, Fragment, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import MuiAlert from "@material-ui/lab/Alert";

import { useHistory } from "react-router-dom";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const history = useHistory();

  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [login, setlogin] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastName, setLastName] = useState("");
  const [message_of_sucess, setMessage_of_sucess] = useState(
    "Signed in Sucessfully"
  );
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");

  //functions

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const toggleLogIn = (e) => {
    // e.PreventDefault;
    setEmailErrorMessage("");
    setEmailError(false);
    setPasswordErrorMessage("");
    setPasswordError(false);

    return setlogin((previousState) => !previousState);
  };

  const signUpHandeler = async (e) => {
    const $signInError = document.getElementById("signUpError");
    e.preventDefault();
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (firstName.length < 1) {
      setFirstNameError(true);
      $signInError.innerHTML = "First Name is required field";
      return;
    }
    setFirstNameError(false);

    if (reg.test(email) == false) {
      setEmailError(true);
      $signInError.innerHTML = "you have not enterred a valid email";
      return;
    }
    setEmailError(false);
    if (password.length < 6) {
      setPasswordError(true);
      $signInError.innerHTML = "Password must be greater then 6 char";
      return;
    }


    setPasswordError(false);


    await fetch("/signup", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: firstName,
        password,
        email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setEmailErrorMessage(data.error.email);
          setEmailError(true);
          setPasswordErrorMessage(data.error.password);
          setPasswordError(true);
          return;
        }
        setMessage_of_sucess("SignUp sucessed");
        setOpen(true);
        localStorage.setItem("user", JSON.stringify(data));
        Notification.requestPermission(function (result) {
          if (result === "granted") {
            navigator.serviceWorker.ready.then(function (registration) {
              registration.showNotification("welcome!!!", {
                body: "Thank you for joining us",
                tag: "jfld",
                icon: "../images/touch/chrome-touch-icon-192x192.png",
                vibrate: [200, 100, 200, 100, 200, 100, 200],
                tag: "vibration-sample",
                // showTrigger: new TimestampTrigger(timestamp + 30 * 1000)
              });
            });
          }
        });
        history.push("/");
      });
  };

  const signInHandeler = async (e) => {
    const $signInError = document.getElementById("signInError");
    const $pass = document.getElementById("password");
    e.preventDefault();
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (reg.test(email) == false) {
      setEmailError(true);
      $signInError.innerHTML = "you have not enterred a valid email";
      return;
    }
    setEmailError(false);
    if (password.length < 6) {
      $pass.setAttribute("helperText", "democlass");
      setPasswordError(true);

      $signInError.innerHTML = "Password must be greater then 6 char";
      return;
    }
    setPasswordError(false);


    
    await fetch('http://localhost:5000/signin',
    {
      method:"post",
      headers:{
          credentials: 'include',
          "Content-Type":"application/json"

      },
      body: JSON.stringify({
        password,
        email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setEmailErrorMessage(data.error.email);
          setEmailError(true);
          setPasswordErrorMessage(data.error.password);
          setPasswordError(true);
          return;
        }
        setMessage_of_sucess("SignIn sucessed");
        setOpen(true);
        localStorage.setItem("user", JSON.stringify(data));
        Notification.requestPermission(function (result) {
          if (result === "granted") {
            navigator.serviceWorker.ready.then(function (registration) {
              registration.showNotification("welcome!!!", {
                body: "Welcome back",
                tag: "jfld",
                icon: "../images/touch/chrome-touch-icon-192x192.png",
                vibrate: [200, 100, 200, 100, 200, 100, 200],
                tag: "vibration-sample",
                // showTrigger: new TimestampTrigger(timestamp + 30 * 1000)
              });
            });
          }
        });
        history.push("/");
      });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>{/* <LockOutlinedIcon /> */}</Avatar>

        <Fragment>
          <div className="welcomdiv">
            <h2 id="weltxt">Welcome to Add Event Calendar</h2>
          </div>
          {login ? (
            <div>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <form className={classes.form} noValidate>
                <TextField
                  error={emailError}
                  value={email}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  helperText={emailErrorMessage}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                  error={passwordError}
                  value={password}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  helperText={passwordErrorMessage}
                  onChange={(e) => {
                    e.target.helperText = "Incorrect entry.";
                    return setPassword(e.target.value);
                  }}
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  onClick={signInHandeler}
                  type="button"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                </Grid>
              </form>
              <p id="signInError" style={{ color: "red" }}></p>
            </div>
          ) : (
            <div>
              <h3 id="strtxt">Let's Start By Making a Account</h3>
              <Typography component="h1" variant="h5">
                Sign up
              </Typography>
              <form className={classes.form} noValidate>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      error={firstNameError}
                      value={firstName}
                      autoComplete="fname"
                      name="firstName"
                      variant="outlined"
                      required
                      fullWidth
                      id="firstName"
                      label="First Name"
                      autoFocus
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      value={lastName}
                      variant="outlined"
                      fullWidth
                      id="lastName"
                      label="Last Name"
                      name="lastName"
                      autoComplete="lname"
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      error={emailError}
                      value={email}
                      variant="outlined"
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      helperText={emailErrorMessage}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      error={passwordError}
                      value={password}
                      variant="outlined"
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                      helperText={passwordErrorMessage}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={
                        <Checkbox value="allowExtraEmails" color="primary" />
                      }
                      label="I want to receive inspiration, marketing promotions and updates via email."
                    />
                  </Grid>
                </Grid>
                <Button
                  type="button"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  onClick={signUpHandeler}
                >
                  Sign Up
                </Button>
              </form>
              <p id="signUpError" style={{ color: "red" }}></p>
            </div>
          )}

          <a onClick={toggleLogIn} style={{ color: "#222", cursor: "pointer" }}>
            {!login
              ? "Already have an account? Login directly"
              : "Don't have account? Please Sing Up first."}
          </a>
        </Fragment>
      </div>
      <Box mt={8}>{/* <Copyright /> */}</Box>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          {message_of_sucess}
        </Alert>
      </Snackbar>
    </Container>
  );
}
