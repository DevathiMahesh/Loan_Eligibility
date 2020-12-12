import React, { Component } from 'react';
import Navbarcomp from './Navbarcomp';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import {FormControl,InputLabel,Input,FormHelperText,TextField,Button} from '@material-ui/core'
import { InputText } from 'primereact/inputtext';
import Carousel from 'react-material-ui-carousel'
import MediaCard from './MediaCard'
import MenuItem from '@material-ui/core/MenuItem';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Select from '@material-ui/core/Select';
import CircularProgress from '@material-ui/core/CircularProgress';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Divider from '@material-ui/core/Divider';
import axios from 'axios';
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
    partner: {
      flexGrow: 1,
      margin:"30px",
      height:"500px"
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
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
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

    },
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    mpaper: {
      backgroundColor: theme.palette.background.paper,
     
      borderRadius:"20px",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      width:"600px",
      height:"600px"
    },
    mbutton:{
      margin:theme.spacing(2),

    },
    imgcontainer:{
      margin:"20px 0px 0px 130px"
    },
    img:{
      margin:"30px"
    }
    
  }));
  function Item(props)
{
    return (
     
           
 
            <img src={props.item.src} width="100%" height="500px" alt={props.item.alttext}/>
       
    )
}
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
export default function Home() {
    const  classes = useStyles();
    const [open,setOpen] = React.useState(false);
    const [load,showLoader] = React.useState(false);
    const [showSnack,setShowSnack] = React.useState(false);
    const vertical = "Top";
    const horizontal = "Right";
    const [errors,setErrors] = React.useState(
      {
        name:"",
        mobile:"",
        email:"",
        company:"",
        monthly_salary:"",
        loan_type:"",
        monthly_expenses:""
     
      }
    )
    const [user,setUser] = React.useState(
      {
        name:"",
        mobile:"",
        email:"",
        company:"",
        monthly_salary:0,
        loan_type:"Select Loan Type",
        monthly_expenses:0,
        eligibility_amount:0
      }
    )
    const login = async()=>{
    
      console.log(user)
      showLoader(true);
      await axios.post("https://my-project511.herokuapp.com/add-user/",user).then(
        (response)=>{
          console.log("User Data captured successfully",response.data);
          setShowSnack(true);
        }
      ).catch(
        (error)=>{
          console.log("Unable to save user data");
        }
      )

      setTimeout(()=>{
        showLoader(false);
       
        setUser( {
          name:"",
          mobile:"",
          email:"",
          company:"",
          monthly_salary:0,
          loan_type:"Select Loan Type",
          monthly_expenses:0,
          loanamount:0,
          eligibility_amount:0,
          location:""
        });
        setErrors(
          {
            name:"",
            mobile:"",
            email:"",
            company:"",
            monthly_salary:"",
            loan_type:"",
            monthly_expenses:"",
            loanamount:"",
            location:""
          }
        )
      },2000);
     
    }
    const dummy = ()=>{

    }
    const validate = ()=>{
       if(user.name==="" || user.mobile==="" || user.email==="" || user.loan_type==="Select Loan Type" || user.company==="")
        return false 
      return true
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
                      <form onSubmit={(event)=>{event.preventDefault();dummy();}}>
                      <TextField
                          required
                          id="outlined-required"
                          label="Name"
                          className={classes.textField}
                          value = {user.name}
                          onChange={(event)=>setUser({...user,name:event.target.value})}
                          variant="outlined"
                          helperText={errors.name}
                          error={errors.name?true:false}
                          size="small"
                        />
                          <TextField
                          required
                          id="outlined-required"
                          label="Mobile Number"
                          value={user.mobile}
                          onChange={(event)=>setUser({...user,mobile:event.target.value})}
                          className={classes.textField}
                          helperText={errors.mobile}
                          error={errors.mobile?true:false}
                          variant="outlined"
                          type="tel"
                          size="small"
                        />
                          <TextField
                          required
                          id="outlined-required"
                          onChange={(event)=>setUser({...user,email:event.target.value})}
                          label="Email"
                          value={user.email}
                          className={classes.textField}
                          helperText={errors.email}
                          error={errors.email?true:false}
                          type="email"
                          variant="outlined"
                          size="small"
                        />
                          <TextField
                          required
                          id="outlined-required"
                          label="Company"
                          value={user.company}
                          onChange={(event)=>setUser({...user,company:event.target.value})}
                          className={classes.textField}
                          helperText={errors.company}
                          error={errors.company?true:false}
                          variant="outlined"
                          size="small"
                        />
                           <TextField
                          required
                          id="outlined-required"
                          label="Location"
                          value={user.location}
                          onChange={(event)=>setUser({...user,location:event.target.value})}
                          className={classes.textField}
                          helperText={errors.location}
                          error={errors.location?true:false}
                          variant="outlined"
                          size="small"
                        />
                       
                         <FormControl variant="outlined" size="small"  className={classes.textField} required>
                          <InputLabel id="demo-simple-select-outlined-label">Loan Type </InputLabel>
                          <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={user.loan_type}
                            onChange={(event)=>setUser({...user,loan_type:event.target.value})}
                            label="Loan Type"
                            size="small"
                            native
                            
                            required

                          >
                            {/* <MenuItem value="">
                              <em>None</em> */}
                            {/* </MenuItem> */}
                            <option value={"loan_type"}>Select Loan Type</option>
                            <option value={"Personal"}>Personal Loan</option>
                            <option value={"Home"}>Home Loan</option>
                         
                          </Select>
                     </FormControl>
                        <Button variant="contained" color="primary"  type="submit"
                        
                         onClick={()=>{
                              let temp = validate();
                               setOpen(temp);
                         }}
                         className={classes.button}>
                                Proceed
                        </Button>
                        </form>
                        <b>If any Query Please Call to <span style={{color:"blue"}}>9743700072</span></b><br/>
                        <b>For More Details <a href="#" onClick={()=>setOpen(true)}>Check Eligibilty Calculator</a></b>
                        <Modal
                            aria-labelledby="transition-modal-title"
                            aria-describedby="transition-modal-description"
                            className={classes.modal}
                            open={open}
                            onClose={()=>{}}
                            closeAfterTransition
                            BackdropComponent={Backdrop}
                            BackdropProps={{
                              timeout: 500,
                            }}
                          >
                          <Fade in={open}>
                            <div className={classes.mpaper}>
                              <h3 style={{color:"brown",textAlign:"center",marginTop:"50px"}}>Loan Eligibility Calculator</h3>
                              <div style={{textAlign:'center',marginTop:"50px"}}>
                              <form onSubmit={login}>
                              <FormControl variant="outlined" size="small"  className={classes.textField} required>

                                  <InputLabel id="demo-simple-select-outlined-label">Loan Type </InputLabel>
                                  <Select
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    value={user.loan_type}
                                    onChange={(event)=>setUser({...user,loan_type:event.target.value})}
                                    label="Loan Type"
                                    size="small"
                                    native
                                    required

                                  >
                                    {/* <MenuItem value="">
                                      <em>None</em> */}
                                    {/* </MenuItem> */}
                                    <option value={"loan_type"}>Select Loan Type</option>
                                    <option value={"Personal"}>Personal Loan</option>
                                    <option value={"Home"}>Home Loan</option>
                                  
                                  </Select>
                                    </FormControl>
                                    {/* <TextField
                                        required
                                        id="outlined-required"
                                        label="Loan Amount"
                                        type="number"
                                        onChange={(event)=>setUser({...user,loanamount:event.target.value})}
                                        className={classes.textField}
                                        helperText={errors.loanamount}
                                        error={errors.loanamount?true:false}
                                        variant="outlined"
                                        size="small"
                                      /> */}
                                     {/* {errors.loanamount? <p style={{color:"red"}}>{errors.loanamount}</p>:null} */}
                                      <TextField
                                        required
                                        id="outlined-required"
                                        label="Net Salary Per Month"
                                        type="number"
                                        onChange={(event)=>{
                                          let eligible = (event.target.value - user.monthly_expenses)*20;
                                          eligible = eligible>0?eligible:0;
                                          setUser({...user,monthly_salary:event.target.value,eligibility_amount:eligible});
                                          // let temp = eligible<user.loanamount;
                                          // if(temp)
                                          //   setErrors({...errors,loanamount:"Loan amount cannot be greater than "+eligible})
                                          // else 
                                          // setErrors({...errors,loanamount:""})
                                         }
                                         
                                        }
                                        className={classes.textField}
                                        helperText={errors.monthly_salary}
                                        error={errors.monthly_salary?true:false}
                                        variant="outlined"
                                        size="small"
                                      />
                                      <TextField
                                        required
                                        id="outlined-required"
                                        label="Expenses Per Month"
                                        type="number"
                                        onChange={(event)=>{
                                          let eligible = (user.monthly_salary - event.target.value)*20;
                                          eligible = eligible>0?eligible:0;
                                          setUser({...user,monthly_expenses:event.target.value,eligibility_amount:eligible})
                                          // let temp = eligible<user.loanamount;
                                          // if(temp)
                                          //   setErrors({...errors,loanamount:"Loan amount cannot be greater than "+eligible})
                                          //   else 
                                          //   setErrors({...errors,loanamount:""})
                                          }
                                        }
                                        className={classes.textField}
                                        helperText={errors.monthly_expenses}
                                        error={errors.monthly_expenses?true:false}
                                        variant="outlined"
                                        size="small"
                                      />
                                      <br/>
                                      <h4 style={{color:"green"}}>You are eligible for Rs.{user.eligibility_amount} </h4>
                                      <Button variant="outlined" color="secondary" onClick={()=>setOpen(false)} className={classes.mbutton}>
                                          Cancel
                                      </Button>
                                      <Button variant="outlined" color="secondary" 
                                      disabled={user.eligibility_amount<user.loanamount}
                                      onClick={()=>{
                                          setOpen(false);
                                            login();
                                          }} 
                                          className={classes.mbutton}>
                                          Submit
                                      </Button>
                                      </form>
                                </div>
                            </div>
                          </Fade>
                        </Modal>
                      </Grid>
                      {load?<div style={{width:"100",height:"100",position:"fixed",top:"40%",left:"77%"}}><CircularProgress color="secondary" size={70} /></div>:null}
                      <Snackbar open={showSnack} autoHideDuration={6000}  anchorOrigin={{ vertical, horizontal }} onClose={()=>setShowSnack(false)}>
                          <Alert onClose={()=>setShowSnack(false)} severity="success">
                            Your Application is Submitted Successfully .<br/>
                            Our Team will get back to you in 24 hours.
                          </Alert>
                     </Snackbar>
             
            </Grid>
           
            </div>
            <div className={classes.root} id="services">
                 <div style={{height:"600px",backgroundColor:"#fff8e7"}}>
                 <Grid container >
                   {loancards.map(
                     (item,i)=>{
                       return(
                                <Grid item xs={3} className={classes.card}>
                                    <MediaCard item={item} setOpen={setOpen}/>
                                </Grid>
                       )
                     }
                   )}
                    
                  
                  </Grid>
                 </div>
            </div>
            <div className={classes.partner} id="contact">
            <div style={{height:"450px",backgroundColor:"#300000",color:"white"}}>
              <h3 style={{textAlign:"center",paddingTop:"20px",fontFamily:"Cursive"}}>Our Client Partners</h3><br/>
              <Grid container >
                    <Grid item xs={6} style={{borderRight:"1px solid white"}}>
                        <h4 style={{textAlign:"center",paddingTop:"30px",fontFamily:"Cursive"}}>Personal Loan</h4>
                        <div className={classes.imgcontainer}>
                           <img src="/axis.png" alt="Axis Bank" width="200px" height="50px"  className={classes.img} style={{backgroundColor:"white"}}/>
                           <img src="/icici.png" alt="ICICI Bank" width="200px" height="50px"  className={classes.img} style={{backgroundColor:"white"}}/>
                        </div>
                        <div className={classes.imgcontainer}>
                        <img src="/hdfc.png" alt="HDFC Bank"  width="200px" height="50px" className={classes.img} style={{backgroundColor:"white",marginLeft:"150px"}}/>
                      
                        </div>
                    </Grid>
               
                    <Grid item xs={6}>
                        <h4 style={{textAlign:"center",paddingTop:"30px",fontFamily:"Cursive"}}>Home Loan</h4>
                        <div className={classes.imgcontainer}>
                           <img src="/sbi.png" alt="State Bank" width="200px" height="50px" className={classes.img} style={{backgroundColor:"white"}}/>
                           <img src="/pnb.jpg" alt="Punjab National Bank" width="200px" height="50px" className={classes.img} style={{backgroundColor:"white"}}/>
                        </div>
                    </Grid>
              </Grid>
            </div>
            </div>
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
