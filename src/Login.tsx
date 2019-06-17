import React from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { emphasize } from '@material-ui/core/styles/colorManipulator';

import { authenticationService } from './authentication.service';
import logo from './logo.png';

const styles = (theme: Theme) => createStyles({
  main: {
    width: 350,
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    [theme.breakpoints.up(330 + theme.spacing(5))]: {
      width: 330,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paperMain: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(3)}px`,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    marginTop: theme.spacing(3),
  },
  root: {
    flexGrow: 1,
    height: 250,
  },
  input: {
    display: 'flex',
    padding: 0,
  },
  valueContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flex: 1,
    alignItems: 'center',
    overflow: 'hidden',
  },
  chip: {
    margin: `${theme.spacing(1) / 2}px ${theme.spacing(1) / 4}px`,
  },
  chipFocused: {
    backgroundColor: emphasize(
      theme.palette.type === 'light' ? theme.palette.grey[300] : theme.palette.grey[700],
      0.08,
    ),
  },
  noOptionsMessage: {
    padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
  },
  singleValue: {
    fontSize: 16,
  },
  placeholder: {
    position: 'absolute',
    left: 2,
    fontSize: 16,
  },
  paper: {
    position: 'absolute',
    zIndex: 1,
    marginTop: theme.spacing(1),
    left: 0,
    right: 0,
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
    textAlign: 'right'
  },
});

type State = {
  error: any;
  formInvalid: boolean;
  submitting: boolean;
  user: string;
  password: string;
};
  
class Login extends React.Component<WithStyles<typeof styles> | any, State> {
  state = {
    error: null,
    formInvalid: true,
    submitting: false,
    user: '',
    password: '',
  };

  componentDidMount = () => {
    this.setState({ formInvalid: !this.isValidSignIn() });
  }
  
  isValidSignIn = (): boolean => { return (this.state.user.length > 0 && this.state.password.length > 0) };

  handleSignIn = () => {
    if (!this.isValidSignIn()) return;
    this.setState({ submitting: true, error: null });
    
    let result = authenticationService.login(this.state.user, this.state.password);
    if (result) {
      this.setState({ submitting: false, formInvalid: false });
      this.props.history.push('/');
    } else {
      this.setState({ submitting: false, formInvalid: true, error: 'Помилка авторизації' });
    }
  };
  
  render() {
    const { classes } = this.props;
    const { error, formInvalid, submitting, user, password } = this.state;
    return (
      <main className={classes.main}>
        <CssBaseline />
        <Paper className={classes.paperMain}>
          <img src={logo} alt="logo"/>
          <form className={classes.form}>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="user">Користувач</InputLabel>
              <Input id="user" name="user" autoComplete="user" autoFocus value={user} 
                disabled={submitting} onChange={(event) => 
                  this.setState({ user: event.target.value }, this.componentDidMount)
                }/>
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Пароль</InputLabel>
              <Input name="password" type="password" id="password" 
                autoComplete="current-password" value={password} 
                disabled={submitting} onChange={(event) =>
                  this.setState({ password: event.target.value }, this.componentDidMount)
                }/>
            </FormControl>
            <div className={classes.actionsContainer}>
              {error && <div className="alert alert-danger mt-4">{error}</div>}
              <Button disabled={formInvalid || submitting} variant="contained" color="primary"
                onClick={this.handleSignIn} className={classes.button}>Увійти</Button>
            </div>
          </form>
          <Typography color="primary" variant="caption">
              * Користувач: <span style={{color: 'red'}}>admin</span>, 
                Пароль: <span style={{color: 'red'}}>admin</span>
          </Typography>
        </Paper>
      </main>
    );
  };
}

export const LoginPage = withStyles(styles)(Login);