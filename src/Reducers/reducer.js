const initialState = {
    formValues: {firstName:'',lastName:'',email:'',age:'',phone:''},
    message: "",
    errors:{}
  };
  
  const validate = formValues => {
    const errors = {}
    const requiredFields = [ 'firstName', 'lastName', 'email', 'age','phone']
    requiredFields.forEach(field => {
      
      if (!formValues[ field ]) {
        console.log("wrong val");
        errors[ field ] = 'required'
      }
    })
    if (formValues.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formValues.email)) {
        console.log("wrong email");
      errors.email = 'Invalid email address'
    }
    if (formValues.phone.length!==10){
      errors.phone = 'Invalid Phone number'
    }
    return errors
  }
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FORM_VALUES':
        console.log("--- Changing form data ---");
        return {
          ...state,
          formValues: action.payload
        };
      case 'SUBMIT_FORM':
        console.log("--- Triggered Form submission ---");
        console.log("Form Data - ",state.formValues);
        let p1 = validate(state.formValues);
        console.log("errors p1", p1)
        if (Object.keys(p1).length===0){
          return {
            ...state,
            errors:p1,
            message: "Sign Up Successful"    //dont mutate the state
          };
        }else{
          return{
            ...state,
            errors:p1                       //dont mutate the state
          }
        }
      
      case "CLEAR_FORM":
        return{
          ...state,
          formValues:{firstName:"",lastName:"",email:"",age:"",phone:""},
          message:"",
          errors:{firstName:"",lastName:"",email:"",age:"",phone:""}
  
        }
       
      default:
        return state;
    }
  };
  
  
  
  
  export default reducer