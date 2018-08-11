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
        <div style={{fontSize: 30, padding: '3%'}}>
          <h3> dummy header </h3>
          <p>
          Cow is a very useful pet animal. It is a successful domestic animal kept by people at home for many purposes. It is a four footed female animal having a large body, two horns, two eyes, two ears, one nose, one mouth, one head, a big back and stomach. She eats large amount of food in one time. She gives us milk to make us healthy and strong. It keeps us away from the diseases and infections by increasing our immunity power. She is a sacred animal and worshipped in India like a Goddess. She has been given a status of Mother in the Hindu society and called as “Gau Mata”.

It is a very famous milk giving animal useful for many purposes. In Hindu religion, it is considered as Gau Dan is the biggest Dan in the world. Cow is a sacred animal to Hindus. Cow gives us lots of benefit all through her life and even after her death. She gives us milk, calf (either female cow or male cow ox), co-dung, gau-mutra while living and lots of leather and strong bones after death. So, we can say that her whole body is useful to us. We can get lots of products from the milk given by her like ghee, cream, butter, curd, dahi, whey, condensed milk, variety of sweets, etc. Her co-dung and urine is highly useful to the farmers for making natural fertilizer for plants, trees, crops, etc.

She eats green grasses, foods, grains, hay and other eatable things. She uses her one pair of strong and tight horns to attack on the people as a defence organ to save her child. She also uses her tail sometime to attack. She has long hairs on the tip of her tail. She also has small hair on her body and uses them frighten away the flies. She has highly helped in the human lives for years in many ways. She has been reason of our healthy lives from more than thousands of years. The origin of cow on the earth for nourishing the human lives has a great history behind. We all should know her importance and necessity in our lives and respect her forever. We should never hurt cows and give them proper food and water timely. Cow differs in its colour, size and shape from region to region. Some cows are small, big, white, black and some are of mixed colour.


          </p>
        </div>
      </div>
    );
  }
}
