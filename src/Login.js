import React, {useState} from 'react';
import { Modal, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Button, } from '@material-ui/core';
import './Login.css';
import { useSelector, useDispatch } from "react-redux";



function getModalStyle() {
    const top = 50;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      height:400,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

  
    

  
function Login(props) {
    const {handleSubmit, register} = props
    const [open, setOpen] = React.useState(true);
    const handleClose = () => setOpen(false);
    const classes = useStyles();
    const [modalStyle] = useState(getModalStyle);
    const formValues = useSelector((state) => state.formValues);
    const message = useSelector((state) => state.message);
    const errors = useSelector((state) => state.errors);
    const dispatch = useDispatch();

    console.log("login.js",errors)
    
    
      

    const handleInputChange = (name, value) => {
        dispatch(
            {
                type: "FORM_VALUES", 
                payload: {
                    ...formValues,
                    [name]: value
                }
            }
        );
    }
   
    const submitForm = e => {
        e.preventDefault();
        dispatch({
          type: "SUBMIT_FORM"
        });
      };
    
    const clear = (e) => {
        e.preventDefault();
        dispatch({
            type:"CLEAR_FORM"
        });
    };
  return (
    <div>
        <Modal
            open={open}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <div style={modalStyle} className={classes.paper}>
                <form className='app__signUp' onSubmit={submitForm}>
                    <center>
                    <img className='app__headerImage'
                    src="dog.png"
                    alt="SIGN IN"/>
                    </center>
                    <div className="login__name">

                        <TextField id="outlined-basic" label="First Name" variant="outlined"
                        name="firstName"
                        className='app__input'
                        placeholder='First Name'
                        type="text"
                        value={formValues["firstName"]}
                        onChange = {(e) => handleInputChange(e.target.name, e.target.value)}
                        error={Boolean(errors.firstName)}
                        helperText={errors.firstName}
                        />

                        <TextField id="outlined-basic" label="Last Name" variant="outlined"
                        name="lastName"
                        className='app__input'
                        placeholder='Last Name'
                        type="text"
                        value={formValues["lastName"]}
                        onChange = {(e) => handleInputChange(e.target.name, e.target.value)}
                        error={Boolean(errors.lastName)}
                        helperText={errors.lastName}
                        />

                    </div>
                    <div className='login__email'>
                        <div className="login__emailinp">
                            <TextField id="outlined-basic" label="Email" variant="outlined"
                                    name="email"
                                    className='app__input'
                                    placeholder='Email'
                                    type="email"
                                    value={formValues["email"]}
                                    onChange = {(e) => handleInputChange(e.target.name, e.target.value)}
                                    error={Boolean(errors.email)}
                                    helperText={errors.email}
                                />
                        </div>
                        <div className="login__age"> 
                            <TextField id="outlined-basic" label="Age" variant="outlined"
                                    name="age"
                                    className='app__age'
                                    placeholder='Age'
                                    type="text"
                                    value={formValues["age"]}
                                    onChange = {(e) => handleInputChange(e.target.name, e.target.value)}
                                    error={Boolean(errors.age)}
                                    helperText={errors.age}
                                />
                        </div>
                        </div>
                            <TextField id="outlined-basic" label="Phone" variant="outlined"
                                            name="phone"
                                            className='login__phone'
                                            placeholder='Enter your phone no'
                                            type="text"
                                            value={formValues["phone"]}
                                            onChange = {(e) => handleInputChange(e.target.name, e.target.value)}
                                            error={Boolean(errors.phone)}
                                            helperText={errors.phone}
                                        />
                        <div>
                        <Button type="submit" onClick={submitForm}>Submit</Button>
                        <Button type="button"  onClick={clear}>RESET
                        </Button>
                    </div>
                    <div className="message">
                        {console.log(message)}
                        {message}
                    </div>
                </form>
            
            </div>
        </Modal>

    </div>
     );
}



export default Login;
