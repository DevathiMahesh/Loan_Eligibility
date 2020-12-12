import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1
    },
    title: {
      flexGrow: 1,
      fontFamily:"Cursive"
    },
   navstyles:{
     backgroundColor:"brown"
   },
    logo: {
      marginRight: theme.spacing(2),
      alignContent:"center",
      justifyContent:"center"
    },
    toolbarButtons: {
      marginLeft: "auto",
      marginRight: 25,
      color:"white",
      fontsize:"36px"
    },
  }));
  
export default function Navbarcomp()
{
  const classes = useStyles();
  return(
      <div className={classes.root}>
           <AppBar position="fixed">
                <Toolbar className={classes.navstyles}>
                
                    <Typography variant="h6"   className={classes.title}>
                       Pothani Infotech Solutions
                    </Typography>
                    <span className={classes.toolbarButtons}>
                        <a href="#home" className={classes.toolbarButtons}>
                          Home </a>
                        <a href="#services" className={classes.toolbarButtons}> Services </a>
                        <a href="#about" className={classes.toolbarButtons}> Contact</a>
                        <a href="#about" className={classes.toolbarButtons}> About</a>
                 
                    </span>
             </Toolbar>
         </AppBar>
      </div>
  )
}