import React, {useEffect, useState} from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import {useFormik} from "formik";
import * as Yup from 'yup';
import { registerUser } from '../store/userSlice';
import { FormFeedback,Form,Input } from 'reactstrap';
import axios from "axios"

const Register = () => {
    const [placeholder, setPlaceholder] = useState('##########');
const dispatch = useDispatch();
const location = useLocation()
    const handleHover = () => {
      setPlaceholder('----------');
    };
  
    const handleMouseOut = () => {
      setPlaceholder('##########');
    };
const [events, setEvents] = useState([])


    const fetchEvents = async()=>{
      const res = await axios.get("http://localhost:3001/santarun/events")
      console.log(res.data, "events")
      setEvents(res.data);
    }
    
    useEffect(()=>{
fetchEvents();
    },[])

    const searchParams = new URLSearchParams(location.search);

    const eventname = searchParams.get('event')

    const findEvent = events.find(event => event && event.eventName === eventname)

    console.log(findEvent, "find")
  
    useEffect(()=>{
      const eventId = findEvent ? findEvent.id : null;
      formik.setFieldValue('eventId', eventId);
    }, [findEvent]); // Add dependencies as needed
   

    const formik = useFormik({
      initialValues: {
  firstName: '',
  lastName: '',
  email: '',
  mobileNumber:"",
  gender:"",
dateOfBirth:"",
tShirtSize:"",
nameOfTheBib:"",
bloodGroup:"",
contactName:"",
contactNumber:"",
acceptedTerms:false,

      },
      validationSchema: Yup.object({
        firstName: Yup.string().required('This field is required'),
        lastName: Yup.string().required('This field is required'),
        email: Yup.string().email('Invalid email').required('This field is required'),
        mobileNumber: Yup.string()
    .required('This field is required'),
    gender: Yup.string().required('This field is required'),
    dateOfBirth: Yup.date()
    .max(new Date(), 'Date of birth must be in the past') 
    .required('This field is required'),
    tShirtSize: Yup.string().required('This field is required'),
nameOfTheBib:Yup.string().required('This field is required'),
bloodGroup:Yup.string().required('This field is required'),
contactName: Yup.string().required('This field is required'),
contactNumber: Yup.string().required('This field is required'),
acceptedTerms:Yup.boolean().required('This field is required'),

      }),

      onSubmit: async(values) => {
   try {
    await dispatch(registerUser(values));
   } catch (error) {
    console.log(error)
   }
      },
    });


  return (
    <>
    <div className='App w-50'>
        <div className="block-example border border-top-0 border-gray p-4 border-1">
          <div className='text-center'>
            <img alt="" loading="lazy" style={{ textAlign: "center" }} src="https://reg.myraceindia.com/uploads/MRTS/form_files/regn%20banner.6530ed45e038e6.12464360.png" tabIndex="0" height="200px" width="680px" data-component="image" role="presentation" />
            </div>
             <h3 className='text-center mt-5'>Registration Details</h3>
            <hr />
           
       <Form onSubmit={(e)=>{
        e.preventDefault()
        formik.handleSubmit();
        return false;
        }}>

  <div className="form-row">
  <div className="form-group col-md-6">
  {/* <label htmlFor='eventName'>Select Event</label>
      <select
        id='eventName'
        className='form-control'
        name='eventName'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.eventName}
        invalid={formik.touched.eventName && formik.errors.eventName ? true : false}
      >
        <option value=''>Select an event</option>
        {events.map((event) => (
          <option key={event.id} value={event.eventName}>
            {event.eventName}
          </option>
        ))}
      </select> */}
    </div>
    <div className="form-group col-md-6"></div>
    <div className="form-group col-md-6">
  
                <p>Name <span className='text-danger'>*</span></p>
  </div>
  <div className="form-group col-md-6"></div>
  <div className="form-group col-md-6">
      <Input type="text"className="form-control" id="firstname" name="firstName" onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.firstName || ""}
                                            invalid={
                                                formik.touched.firstName && formik.errors.firstName ? true : false
                                            }
                                            />
                                            {formik.touched.firstName && formik.errors.firstName ? (
                                            <FormFeedback type="invalid"><div>{formik.errors.firstName}</div></FormFeedback>
                                            ) : null}
      <label htmlFor="firstname" className='text-sm'>First Name</label>
    </div>
    <div className="form-group col-md-6">
     
      <Input type="text"className="form-control" id="lastname" name="lastName" onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.lastName || ""}
                                            invalid={
                                                formik.touched.lastName && formik.errors.lastName ? true : false
                                            }
                                            />
                                            {formik.touched.lastName && formik.errors.lastName ? (
                                            <FormFeedback type="invalid"><div>{formik.errors.lastName}</div></FormFeedback>
                                            ) : null}
      <label htmlFor="lastname" className='text-sm'>Last Name</label>
    </div>
    <div className="form-group col-md-6">
    <label htmlFor="email">Email <span className='text-danger'>*</span></label>
      <Input type="email"className="form-control" id="email" name="email" onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.email || ""}
                                            invalid={
                                                formik.touched.email && formik.errors.email ? true : false
                                            }
                                            />
                                            {formik.touched.email && formik.errors.email ? (
                                            <FormFeedback type="invalid"><div>{formik.errors.email}</div></FormFeedback>
                                            ) : null}
   
    </div>

    <div className="form-group col-md-6"></div>
    <div className="form-group col-md-6">
    <label htmlFor="mobilenumber">Mobile Number <span className='text-danger'>*</span></label>
    <Input
      type="text"
      className="form-control"
      id="mobilenumber"
      placeholder={placeholder}
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseOut}
      name="mobileNumber"
      onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.mobileNumber || ""}
                                            invalid={
                                                formik.touched.mobileNumber && formik.errors.mobileNumber ? true : false
                                            }
                                            />
                                            {formik.touched.mobileNumber && formik.errors.mobileNumber ? (
                                            <FormFeedback type="invalid"><div>{formik.errors.mobileNumber}</div></FormFeedback>
                                            ) : null}
                                            {formik.values.mobileNumber.startsWith(0) && 
                                            <div className='text-danger font-weight-bold'>Do Not start with 0</div>
                                            }
    </div>
    
    <div className="form-group col-md-6"></div>

    <div className="form-group col-md-6">
    <label htmlFor="mobilenumber">Gender <span className='text-danger'>*</span></label>
    </div>
    
    <div className="form-group col-md-6"></div>

    <div className="form-group col-md-6">
        <Input type="radio" id="male" style={{transform: 'scale(1.5)', marginLeft:"0.1em"}} name="gender" 
     onBlur={formik.handleBlur}
     value="male"
        checked={formik.values.gender ==="male"}
        onChange={formik.handleChange}
         required />
    <label htmlFor="male" style={{marginLeft:"2em"}}>Male</label>
    </div>
    
    <div className="form-group col-md-6">
    <Input type="radio" id="female" style={{transform: 'scale(1.5)', marginLeft:"0.1em"}} name="gender" 
     onBlur={formik.handleBlur}
     value="female"
        checked={formik.values.gender ==="female"}
        onChange={formik.handleChange}
         required />
    
    <label htmlFor="female" style={{marginLeft:"2em"}}>Female</label>
    </div>

    <div className="form-group col-md-6">
    <label htmlFor="dateofbirth">Date of Birth <span className='text-danger'>*</span></label>
      <Input type="date"className="form-control" id="dateofbirth" style={{color:"gray"}} name="dateOfBirth"
       onChange={formik.handleChange}
       onBlur={formik.handleBlur}
       value={formik.values.dateOfBirth || ""}
       invalid={
           formik.touched.dateOfBirth && formik.errors.dateOfBirth ? true : false
       }
       />
       {formik.touched.dateOfBirth && formik.errors.dateOfBirth ? (
       <FormFeedback type="invalid"><div>{formik.errors.dateOfBirth}</div></FormFeedback>
       ) : null}

  
    </div>

    <div className="form-group col-md-6"></div>
    <div className="form-group col-md-6">
    <label htmlFor="mobilenumber">T-shirt Size <span className='text-danger'>*</span></label>
    </div>
    <div className="form-group col-md-6"></div>
    <div className="form-group col-md-4">
        <Input type="radio" id="s" style={{transform: 'scale(1.5)', marginLeft:"0.1em"}} name="tShirtSize" value="S" checked={formik.values.tShirtSize === "S"} onChange={formik.handleChange} required/>
    <label htmlFor="s" style={{marginLeft:"2em"}}>S</label>
    </div>
    
    <div className="form-group col-md-4">
    <Input type="radio" id="m" style={{transform: 'scale(1.5)', marginLeft:"0.1em"}} name="tShirtSize" value="M" checked={formik.values.tShirtSize === "M"} onChange={formik.handleChange} required/>
    <label htmlFor="m" style={{marginLeft:"2em"}}>M</label>
    </div>
    <div className="form-group col-md-4">
    <Input type="radio" id="l" style={{transform: 'scale(1.5)', marginLeft:"0.1em"}} name="tShirtSize" value="L" checked={formik.values.tShirtSize === "L"} onChange={formik.handleChange} required/>
    <label htmlFor="l" style={{marginLeft:"2em"}}>L</label>
    </div>
    <div className="form-group col-md-4">
    <Input type="radio" id="xl" style={{transform: 'scale(1.5)', marginLeft:"0.1em"}} name="tShirtSize" value="XL" checked={formik.values.tShirtSize === "XL"} onChange={formik.handleChange} required/>
    <label htmlFor="xl" style={{marginLeft:"2em"}}>XL</label>
 
    </div>
    <div className="form-group col-md-4">
    <Input type="radio" id="xxl" style={{transform: 'scale(1.5)', marginLeft:"0.1em"}} name="tShirtSize" value="XXL" checked={formik.values.tShirtSize === "XXL"} onChange={formik.handleChange} required/>
    <label htmlFor="xxl" style={{marginLeft:"2em"}}>XXL</label>
    </div>
    <div className="form-group col-md-6">
    <label htmlFor="bib">Name of the bib <span className='text-danger'>*</span></label>
      <Input type="text"className="form-control" id="bib" name="nameOfTheBib"
       onChange={formik.handleChange}
       onBlur={formik.handleBlur}
       value={formik.values.nameOfTheBib || ""}
      maxLength={16}
       invalid={
           formik.touched.nameOfTheBib && formik.errors.nameOfTheBib ? true : false
       }
       />
       {formik.touched.nameOfTheBib && formik.errors.nameOfTheBib ? (
       <FormFeedback type="invalid"><div>{formik.errors.nameOfTheBib}</div></FormFeedback>
       ) : null}

  
    </div>
    <div className="form-group col-md-6"> 
    </div>
    <div className="form-group col-md-6 text-sm">max of 16 characters allowed 
    </div>
    <div className="form-group col-md-6"> 
    </div>
    
    <div className="form-group col-md-6">
    <label htmlFor="bib">Blood Group <span className='text-danger'>*</span></label>
</div>
<div className="form-group col-md-6"> 
    </div>
<div className="form-group col-md-6">
    

<select id="bloodgroup"className="" name="bloodGroup" style={{width:"100%", padding:"0.4em", borderRadius:"7px", outline:"none", border:"1px solid lightgray", color:"gray"}}
   onChange={formik.handleChange}
   onBlur={formik.handleBlur}
   value={formik.values.bloodGroup || ""}
   invalid={
       formik.touched.bloodGroup && formik.errors.bloodGroup ? true : false
   }
   >
   {formik.touched.bloodGroup && formik.errors.bloodGroup ? (
   <FormFeedback type="invalid"><div>{formik.errors.bloodGroup}</div></FormFeedback>
   ) : null}

  <option value="">Please Select</option>
  <option value="A+">A+</option>
  <option value="A-">A-</option>
  <option value="B+">B+</option>
  <option value="B-">B-</option>
  <option value="AB+">AB+</option>
  <option value="AB-">AB-</option>
  <option value="O+">O+</option>
  <option value="O-">O-</option>
</select>

  </div>
  <div className="form-group col-md-6">
    </div>
 
  <div className="form-group col-md-6">
    <label htmlFor="emergencycontactname">Emergency Contact Name <span className='text-danger'>*</span></label>
      <Input type="text"className="form-control" id="emergencycontactname" name="contactName" onChange={formik.handleChange}
   onBlur={formik.handleBlur}
   value={formik.values.contactName || ""}
   invalid={
       formik.touched.contactName && formik.errors.contactName ? true : false
   }
   />
   {formik.touched.contactName && formik.errors.contactName ? (
   <FormFeedback type="invalid"><div>{formik.errors.contactName}</div></FormFeedback>
   ) : null}
    </div>
    <div className="form-group col-md-6">
    </div>
    <div className="form-group col-md-6">
    <label htmlFor="emergencycontactnumber">Emergency Contact number <span className='text-danger'>*</span></label>
      <Input type="text"className="form-control" id="emergencycontactnumber" name="contactNumber" onChange={formik.handleChange}
   onBlur={formik.handleBlur}
   placeholder={placeholder}
   onMouseEnter={handleHover}
   onMouseLeave={handleMouseOut}
   value={formik.values.contactNumber || ""}
   invalid={
       formik.touched.contactNumber && formik.errors.contactNumber ? true : false
   }
   />
   {(formik.values.contactNumber.startsWith(91) || formik.values.contactNumber.startsWith(0)) && 
   <div className='text-sm mt-2'>DO NOT start with 91 or 0</div>}
   {formik.touched.contactNumber && formik.errors.contactNumber ? (
   <FormFeedback type="invalid"><div>{formik.errors.contactNumber}</div></FormFeedback>
   ) : null}
    </div>
    
    <div className="form-group col-md-6">
    </div>
  
    </div>
    
    <hr/>
    <p>General Terms & Conditions <span className='text-danger'>*</span></p>

  
    <div className='mx-3'>
                            <Input
                              type="checkbox"
                              name="acceptedTerms"
                              className="form-check-input"
                              id="acceptedTerms"
                              checked={formik.values.acceptedTerms}
                              onChange={formik.handleChange}
                              required
                            />
                            {formik.touched.acceptedTerms && formik.errors.acceptedTerms ? (
   <FormFeedback type="invalid"><div>{formik.errors.acceptedTerms}</div></FormFeedback>
   ) : null}
                            <label
                              className="form-check-label"
                              htmlFor="acceptedTerms"
                            >
                              {" "}
                              Agree to terms and conditions
                            </label>
                        <p><Link to="/termsconditions">click here</Link> to read the terms & conditions</p>
                          </div>

<hr/>
    <div className="block-example p-4">
            <div className="d-flex flex-row justify-content-between mx-5 align-items-center">
            <Link to="/" className='backbutton'>Back</Link>
                <img width="80px" src="https://myraceindia.com/Live_API/assets/jotform/MRTS_Logo_with_Powered_by.png"/>
                <button className='nextbutton'>Submit</button>
                </div>
        </div>
                           </Form>





    </div>
    
    </div>

    </>
)
}

export default Register