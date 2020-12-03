import React, { Component } from 'react';
import Navbarcomp from './Navbarcomp';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import {FormControl,InputLabel,Input,FormHelperText,TextField,Button} from '@material-ui/core'
import { InputText } from 'primereact/inputtext';
import Carousel from 'react-material-ui-carousel'
import MediaCard from './MediaCard'
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      margin:"30px",
      height:"650px"
    },
    about: {
      flexGrow: 1,
     
      height:"300px"
    },
    paper: {
      
      padding: theme.spacing(2),
     
      color: theme.palette.text.secondary,
      height:"600px"
    },
    textField: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
      width: "80%"
    },
    button: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
      width: "80%"
    },
    form:{
      marginLeft:"50px"
    },
    card:{
    
      marginTop:"100px",
      marginLeft:"100px"

    }
    
  }));
  function Item(props)
{
    return (
     
           
 
            <img src={props.item.src} width="100%" height="500px" alt={props.item.alttext}/>
       
    )
}
export default function Home() {
    const  classes = useStyles();
    const login = ()=>{

    }
    var items = [
      {
          src: "/loan.jpg",
          alttext: "Loans"
      },
      {
          src: "/ploan.jpg",
          alttext: "All types of Loans"
      },
      {
          src: "/agree.jpg",
          alttext: "Agreement"
    },
    {
      src: "/allloan.jpg",
      alttext: "All loans"
    }
  ];
  var loancards = [
    {
      src: "/ploan.jpg",
      title: "Personal Loan",
      description:"A personal loan allows you to borrow money to pay for personal expenses and then repay those funds over time. "
    },
    {
      src: "/hloan.jpg",
      title: "Home Loan",
      description:"A house loan or home loan simply means a sum of money borrowed from a financial institution or bank to purchase a house."
    },
    {
      src: "/bloan.png",
      title: "Business Loan",
      description:"A business loan is a loan specifically intended for business purposes. As with all loans, it involves the creation of a debt"
    },
  ]
        return (
            <>
            <Navbarcomp/>
            <div className={classes.root} id="home" style={{marginTop:"100px"}}>
         
            <Grid container  >
                
                   
                      <Grid item xs={7}>
                         
                             {/* <img src="/loan.jpg" alt="Need Loans??" /> */}
                             <Carousel>
                              {
                                  items.map( (item, i) => <Item key={i} item={item} /> )
                              }
                            </Carousel>
                        
                      </Grid>
                      <Grid item xs={1}>

                      </Grid>
                      <Grid item xs={4} >
                        <h4>Need Instant Loan?</h4>
                      <form onSubmit={login}>
                      <TextField
                          required
                          id="outlined-required"
                          label="Name"
                          className={classes.textField}
                          variant="outlined"
                          size="small"
                        />
                          <TextField
                          required
                          id="outlined-required"
                          label="Mobile Number"
                          className={classes.textField}
                          variant="outlined"
                          size="small"
                        />
                          <TextField
                          required
                          id="outlined-required"
                          label="Email"
                          className={classes.textField}
                          variant="outlined"
                          size="small"
                        />
                          <TextField
                          required
                          id="outlined-required"
                          label="Company"
                          className={classes.textField}
                          variant="outlined"
                          size="small"
                        />
                         <TextField
                          required
                          id="outlined-required"
                          label="Salary"
                          className={classes.textField}
                          variant="outlined"
                          size="small"
                        />
                        <Button variant="contained" color="primary" className={classes.button}>
                                     Submit
                        </Button>
                        </form>
                        <b>If any Query Please Call to <span style={{color:"blue"}}>9743700072</span></b><br/>
                        <b>For More Details <a href="#">Check Eligibilty Calculator</a></b>
                      </Grid>
               
             
            </Grid>
           
            </div>
            <div className={classes.root} id="services">
                 <div style={{height:"600px",backgroundColor:"#fff8e7"}}>
                 <Grid container >
                   {loancards.map(
                     (item,i)=>{
                       return(
                                <Grid item xs={3} className={classes.card}>
                                    <MediaCard item={item}/>
                                </Grid>
                       )
                     }
                   )}
                    
                  
                  </Grid>
                 </div>
            </div>
            {/* <div className={classes.root} id="contact">
            <div style={{height:"600px",backgroundColor:"#E9CFC9"}}>

            </div>
            </div> */}
            <div className={classes.about} id="about">
            <div style={{height:"300px",backgroundColor:"#142F3A",color:"white"}}>
                <Grid container >
                    <Grid item xs={6}>
                       <div style={{margin:"40px"}}>
                          <h4>About Us:</h4>
                          <p>
                            A personal loan allows you to borrow money to pay for personal expenses
                             and then repay those funds over time. A personal loan allows you to
                              borrow  money to pay for personal expenses and then repay those funds over time.
                              and then repay those funds over time.
                            
                          </p>
                       </div>
                    </Grid>
                    <Grid item xs={6}>
                       <div style={{margin:"40px"}}>
                          <h4>Contact:</h4>
                          <p>Phone: 9743700072
                          <span style={{marginLeft:"120px"}}>Email: Random@gmail.com</span><br/>
                          <br/> Address:<br/> 02-04 ,Main Road,<br/>opp patalamma Temple,<br/> Majestic ,Banglore.
                          </p>
                          
                       </div>
                    </Grid>
                    <p style={{align:"center",paddingLeft:"45%"}}>copyright@2020</p>
               </Grid>
            </div>
            </div>
            </>
        )
   
}
