import React, { Component } from 'react';
import Navbarcomp from './Navbarcomp';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import {FormControl,InputLabel,Input,FormHelperText,TextField,Button,Container} from '@material-ui/core'
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
      height:"auto"
    },
    about: {
      flexGrow: 1,
     
      height:"auto"
    },
    partner: {
      flexGrow: 1,
      margin:"30px",
      height:"auto"
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
     
      marginTop:theme.spacing(5),
      marginLeft:theme.spacing(8),
      marginRight:theme.spacing(6),
      marginBottom: theme.spacing(5),

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
      marginLeft:theme.spacing(7),
      textAlign:"center"
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
    const [form,setForm] = React.useState(true);
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
        loan_type:"loan_type",
        monthly_expenses:0,
        eligibility_amount:0
      }
    )
    const login = async()=>{
    
      console.log(user)
      showLoader(true);
      await axios.post("https://pothani-admin.herokuapp.com/add-user/",user).then(
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
        resetFields();
      
      },2000);
     
    }
    const resetFields = ()=>{
      setUser( {
        name:"",
        mobile:"",
        email:"",
        company:"",
        monthly_salary:0,
        loan_type:"loan_type",
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
    }
    const dummy = ()=>{

    }
    const validate = ()=>{
       if(user.name==="" || user.mobile==="" || user.email==="" || user.company==="")
        return false 
      if(user.loan_type=="loan_type" || user.loan_type==="")
      {
        setErrors({
          ...errors,loan_type:"Please select Loan type"
        });
        return false;
      }
      else
      {
        setErrors({...errors,loan_type:""});
      }
      if(user.mobile.length!==10)
      {
        setErrors({...errors,mobile:"Mobile number should be 10 digits"});
        return false
      }
      else
      {
        setErrors({...errors,mobile:""})
      }
      let rgx =  /^[\w\.]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
      if(!rgx.test(user.email))
      {
        setErrors({...errors,email:"Invalid Email Format"});
        return false
      }
      else
      {
        console.log("inside email check")
        setErrors({...errors,email:""})
      }
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
          src: "/bloan.jpg",
          alttext: "Agreement"
    },
    {
      src: "/hloan.jpg",
      alttext: "All loans"
    }
  ];
  var loancards = [
    {
      src: "/ploan.jpg",
      title: "Personal Loan",
      description:"A Personal Loan is a type of unsecured loan and helps to meet one's current financial needs. "
    },
    {
      src: "/hloan.jpg",
      title: "Home Loan",
      description:"We can choose variety of home loans based on their interest rates and other buyers-friendly features. We can avail home loans based on our existing financial capabilities or worth and repay it over a period of time.Interest Rates offered on home loans can be either fixed or floating."
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
                
                   
                      <Grid item md={7}  sm={12}>
                         
                             {/* <img src="/loan.jpg" alt="Need Loans??" /> */}
                             <Carousel >
                              {
                                  items.map( (item, i) => <Item key={i} item={item} /> )
                              }
                            </Carousel>
                        
                      </Grid>
                      <Grid item xs={1}>

                      </Grid>
                      <Grid item md={4} xs={12}style={{textAlign:"center"}}>
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
                          onChange={(event)=>{
                            if(event.target.value.length>10)
                              setErrors({...errors,mobile:"Mobile number should not exceed 10 digits."})
                            else
                              setErrors({...errors,mobile:""})
                            setUser({...user,mobile:event.target.value})
                          }}
                          className={classes.textField}
                          helperText={errors.mobile}
                          error={errors.mobile?true:false}
                          variant="outlined"
                          type="number"
                          
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
                          type="text"
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
                            onChange={(event)=>{
                              setUser({...user,loan_type:event.target.value},()=>validate());
                            
                            }}
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
                    {user.loan_type==="loan_type"? <p style={{color:"red"}}>{errors.loan_type}</p>:null}
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
                        <b>For More Details <a href="#" onClick={()=>{setForm(false);setOpen(true);}}>Check Eligibilty Calculator</a></b>
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
                                    autoFocus
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
                                        disabled={user.loan_type==="loan_type"}
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
                                        disabled={user.loan_type==="loan_type"}
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
                                      <Button variant="outlined" color="secondary" onClick={()=>{setOpen(false);setForm(true);resetFields();}} className={classes.mbutton}>
                                          Cancel
                                      </Button>
                                      <Button variant="outlined" color="secondary" 
                                      disabled={user.eligibility_amount===0 || user.loan_type==="loan_type" || form===false}
                                      onClick={()=>{
                                          setOpen(false);
                                            login();
                                          }} 
                                          className={classes.mbutton}>
                                          Submit
                                      </Button>
                                      </form>
                                </div>
                                {form===false?<p style={{color:"red",textAlign:"center"}}>Note: Please Fill the Form in Main page to Submit a request.</p>:null}
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
            <div className={classes.root} id="services" >
                 {/* <div style={{height:"600px",backgroundColor:"#fff8e7"}}> */}
                 <Grid container   style={{height:"auto",backgroundColor:"#fff8e7",textAlign:"center"}}>
                   {loancards.map(
                     (item,i)=>{
                       return(
                                <Grid item xs={12} md={3} className={classes.card}>
                                    <MediaCard item={item} setOpen={setOpen} setForm={setForm}/>
                                </Grid>
                       )
                     }
                   )}
                    
                  
                  </Grid>
                 {/* </div> */}
            </div>
            <div className={classes.partner} id="contact">
            <div style={{height:"auto",backgroundColor:"#300000",color:"white"}}>
              <h3 style={{textAlign:"center",paddingTop:"20px",fontFamily:"Cursive"}}>Our Client Partners</h3><br/>
              <Grid container >
                    <Grid item xs={12}  style={{borderRight:"1px solid white"}}>
                        <h4 style={{textAlign:"center",paddingTop:"30px",fontFamily:"Cursive"}}>Personal Loan</h4>
                        <Grid className={classes.imgcontainer}>
                           <img src="/axis.png" alt="Axis Bank" width="200px" height="50px"  className={classes.img} style={{backgroundColor:"white"}}/>
                           <img src="/icici.png" alt="ICICI Bank" width="200px" height="50px"  className={classes.img} style={{backgroundColor:"white"}}/>
                           <img src="/hdfc.png" alt="HDFC Bank"  width="200px" height="50px" className={classes.img} style={{backgroundColor:"white"}}/>
                        </Grid>
                       
                    </Grid>
               
                    <Grid item xs={12}>
                        <h4 style={{textAlign:"center",paddingTop:"30px",fontFamily:"Cursive"}}>Home Loan</h4>
                        <Grid className={classes.imgcontainer}>
                           <img src="/sbi.png" alt="State Bank" width="200px" height="50px" className={classes.img} style={{backgroundColor:"white"}}/>
                           <img src="/pnb.jpg" alt="Punjab National Bank" width="200px" height="50px" className={classes.img} style={{backgroundColor:"white"}}/>
                        </Grid>
                    </Grid>
              </Grid>
            </div>
            </div>
            <div className={classes.about} id="about">
            <div style={{height:"auto",backgroundColor:"#142F3A",color:"white"}}>
                <Grid container >
                    <Grid item xs={12} md={6}>
                       <div style={{margin:"40px"}}>
                          <h4>About Company Profile:</h4>
                          <br/>
                          <img src="/pothani.png" alt="Pothani infotech solutions"/> 
                          <br/><br/>
                          <p>
                          Pothani Solutions isfor small enterpreneurs. We are a one stop service provider that offers facilities such
                           as Housing Loans, Personal Loans, Business Loans, Loan against Property, Loan against Shares, etc. 
                          We have tie ups with 40 leading Banks and NBFCs that offer competitive interest rates and terms of agreement.  
                            
                          </p>
                       </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                       <div style={{margin:"40px"}}>
                          <h4>Contact:</h4>
                          <Grid md={6} xs={12}>Phone: {process.env.REACT_APP_MOBILENUMBER}</Grid>
                          <Grid md={6} xs={12}>Email:{process.env.REACT_APP_EMAIL} </Grid>
                          <Grid>
                          <br/> Address:<br/> {process.env.REACT_APP_ROAD},<br/>{process.env.REACT_APP_LOCATION},<br/>
                          {process.env.REACT_APP_CITY}<br/>Pincode: {process.env.REACT_APP_PINCODE}
                          </Grid>
                          
                       </div>
                    </Grid>
                    <p style={{align:"center",paddingLeft:"45%"}}>copyright@2020</p>
               </Grid>
            </div>
            </div>
            </>
        )
   
}
