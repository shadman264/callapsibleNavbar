import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleMenuButtonClick = this.handleMenuButtonClick.bind(this);
    this.state = {
      expand: false,
      menuItems: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"]
    }
  }

  handleMenuButtonClick(e) {
    this.setState(prevState => {
      return {expand: !prevState.expand};
    });
  }

  render() {
    let expandedContainer = null;
    let hamburgerIcon = null;
    if (this.state.expand) {
      expandedContainer = this.state.menuItems.map((item, index) => {
        return(
          <Toolbar key={index}>{item}</Toolbar>
        )
      })
    }
    return (
      <div className="root">
        <div className='nav-top'>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="title" color="inherit" className="flex">
                Top
              </Typography>
              <Button color="inherit">Login</Button>
            </Toolbar>
            {expandedContainer}
          </AppBar>
        </div>
        <div className='nav-bottom'>
          <AppBar position="static">
            <Toolbar>
              <div className="menuButton">
                <IconButton color="inherit" aria-label="Menu">
                  <MenuIcon onClick={this.handleMenuButtonClick}/>
                </IconButton>
              </div>
              <Typography variant="title" color="inherit" className="flex">
                Bottom
              </Typography>
              <Button color="inherit">Login</Button>
            </Toolbar>
            {expandedContainer}
          </AppBar>
        </div>
      </div>
    );
  }
}
