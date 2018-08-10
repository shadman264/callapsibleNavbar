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
    console.log('enter');
    console.log(e);
    this.setState(prevState => {
      return {expand: !prevState.expand};
    });
  }

  render() {
    let expandedContainer = null;
    if (this.state.expand) {
      expandedContainer = this.state.menuItems.map((item, index) => {
        return(
          <Toolbar key={index}>{item}</Toolbar>
        )
      })
    }
    return (
      <div className="root">
        <AppBar position="static">
          <Toolbar>
            <IconButton className="menuButton" color="inherit" aria-label="Menu">
              <MenuIcon onClick={this.handleMenuButtonClick}/>
            </IconButton>
            <Typography variant="title" color="inherit" className="flex">
              News
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
          {expandedContainer}
        </AppBar>
      </div>
    );
  }
}
