import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Theme, createStyles } from '@material-ui/core';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import { Person } from '@material-ui/icons';

import { authenticationService } from './authentication.service';

import logo from './logo.png';

const styles = (theme: Theme) => createStyles({
  root: {
    flexGrow: 1,
  },
  toolbar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

class HeaderComponent extends React.Component<WithStyles<typeof styles> | any, any> {
  state = {
  };

  logout = () => {
    authenticationService.logout();
    return <Redirect to="/login"/>
  }
  
  render() {
    const { classes } = this.props;
    
    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Toolbar className={classes.toolbar}>
            <Link to="/"><img src={logo} alt="logo"/></Link>
            <Link to="/events">Заходи</Link>
            <Link to="/places">Споруди</Link>
            <Link to="/impresarios">Імпресаріо</Link>
            <Link to="/actors">Актори</Link>
            <Button onClick={this.logout}> <Person /> ВИХІД </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  };
}

export const Header = withStyles(styles)(HeaderComponent);