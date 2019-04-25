import React from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/styles';
import IconButton from '@material-ui/core/IconButton';
import AppBar from '@material-ui/core/AppBar';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import CustomButton from '../reusableComponent/headerButton'
import logo from '../../images/react.png'
import { withRouter } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";


const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      position: 'fixed',
      top:'0px',
    },
    appBarStyle:{
      display: 'flex',
      justifyContent: 'center',
      height:'65px',
      paddingLeft: '10%',
      paddingRight: '10%'
    },
    grow: {
      flexGrow: 1,
    },
    buttonMargin:{
      marginRight: '3rem'
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    menuItem:{
      '&:focus':{
        outline: 'none'
      }
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
    popUp:{
      top: '50px !important',
    },
    liFocus:{
     
      '&:focus':{
        backgroundColor: 'white'
      }
    }
  }));
  
  function PrimaryAppbar(props) {
      const classes = useStyles();
      const [anchorEl, setAnchorEl] = React.useState(null);
      const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
      const isMenuOpen = Boolean(anchorEl)
      const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
      const [showProfile, setProfile] = React.useState(false)
    
      function handleShowProfile() {
        setProfile(true)
      }

      function handleProfileMenuOpen(event) {
        setAnchorEl(event.currentTarget);
      }
    
      function handleMobileMenuClose() {
        setMobileMoreAnchorEl(null);
      }
    
      function handleMenuClose() {
        setAnchorEl(null);
        handleMobileMenuClose();
      }
    
      function handleMobileMenuOpen(event) {
        setMobileMoreAnchorEl(event.currentTarget);
      }

    const renderMenu = (
        <Menu 
            anchorEl={anchorEl}
            anchorOrigin={{vertical: 'top', horizontal: 'right'}}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            className={classes.popUp}
            onClose={handleMenuClose}>
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>Logout</MenuItem>    
            </Menu>
    )
    const renderMobileMenu = (
        <Menu
          anchorEl={mobileMoreAnchorEl}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          open={isMobileMenuOpen}
          onClose={handleMobileMenuClose}
          disableAutoFocusItem={true}>
        <MenuItem>
        <span>ANGULAR JS</span>
        </MenuItem>
        <MenuItem className={classes.liFocus}>
        <span>REACT JS</span>
        </MenuItem>
        <MenuItem>
        <span>VUE JS</span>
        </MenuItem>
        <MenuItem>
        <span>LOGIN</span>
        </MenuItem>
        </Menu>
    )
        return(
            <div className={classes.root}>
            <AppBar className={classes.appBarStyle} color='inherit'>
            <Toolbar color='inherit'>
            <div onClick={() => props.history.push('/')}><img src={logo} width='115'></img></div>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
            <div className={`${classes.buttonMargin} d-flex`}><CustomButton name='ANGULAR JS'  /></div>
            <div className={`${classes.buttonMargin} d-flex`}><CustomButton name='REACT JS' /></div>
            <div className={`${classes.buttonMargin} d-flex`}><CustomButton name='VUE JS' /></div>
            <div className={`${classes.buttonMargin} d-flex`}><CustomButton name='LOGIN' /></div>            
          </div>
          <div className={classes.sectionMobile}>
            <IconButton aria-haspopup="true" className={classes.menuItem} onClick={handleMobileMenuOpen} color="inherit">
              <MenuIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMenu}
      {renderMobileMenu}
            </div>
        )
  }
  export default withRouter(PrimaryAppbar);