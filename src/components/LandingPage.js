import React, {useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Container, Row, Col, Button } from "reactstrap"
import axios from 'axios'
const LandingPage = () => {


    const [selectEvent, setSelectEvent] = useState("");
 
    const [couponCode, setCouponCode] = useState("")
 const navigate = useNavigate(); 

const handleCoupon = async() => {
    try {
        const response = await axios.post("http://localhost:3001/santarun/apply-coupon", {
            couponCode
        })
        console.log(response, "response")
       if(response.data.success){
        navigate("/register")
       }
    } catch (error) {
        
    }
}

      const handleNext = async() => {

        try {
            const res = await axios.post("http://localhost:3001/santarun/event", {
                eventName: selectEvent,
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
               })
               navigate(`./register?event=${selectEvent}`);
     
           
             
        } catch (error) {
            console.log('Please select an event.');
        }
       };

    return (
        <div className='App w-50'>
            <div className="block-example border border-top-0 border-gray p-4 border-1">
                <img alt="Image" loading="lazy" style={{ textAlign: "center" }} src="https://reg.myraceindia.com/uploads/MRTS/form_files/regn%20banner.6530ed45e038e6.12464360.png" tabIndex="0" height="200px" width="680px" data-component="image" role="presentation" />
                <div className='text-color my-5 mx-4'>Participants aged 65+ can register free of cost. Write to us <br />
                    at <span style={{ textDecoration: "none", color: "#001Af5" }}>santarun2023.rcck@gmail.com</span> with age proof and on successful validation a coupon code will be issued for free registration</div>
                <h3 className='text-center '>LAST DATE FOR REGISTRATIONS - 26 Nov 2023</h3>
                <hr />
                <h3 className='text-center mt-5'>Registration Details</h3>
                <hr />
                <div>
                    <p className='mx-4'>Category <span className='text-danger'>*</span></p>
                </div>
                <div className="d-flex flex-row justify-content-between mx-5 align-items-center">
                    <div className="d-flex-inline">
                    <input type="radio" id="male" style={{transform: 'scale(1.5)', marginRight:"0.5em"}} value="5K Run - SANTA RUN" checked={selectEvent==="5K Run - SANTA RUN"} onChange={(e)=>setSelectEvent(e.target.value)}/>
                        <label htmlFor="customRadio" className="custom-radio-label">5K Run - SANTA RUN</label>
                    </div>


                    <div>
                        <label htmlFor="customRadio" className="custom-radio-label">700.00 INR</label>
                    </div>
                </div>
                <div className='mx-4'>
                    <div className="d-flex flex-row justify-content-between mx-5 align-items-center">
                        <div className="d-flex-inline">
                            <label htmlFor="customRadio" className="custom-radio-label">Non timed run</label>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
<hr style={{border: 'none', borderTop: '2px dashed #999', width:"80%", margin:"auto"}} className='my-4'/>
                <div className="d-flex flex-row justify-content-between mx-5 align-items-center">
                    <div className="d-flex-inline">
                    <input type="radio" id="male" style={{transform: 'scale(1.5)', marginRight:"0.5em"}} value="10K Run - SANTA RUN" checked={selectEvent==="10K Run - SANTA RUN"} onChange={(e)=>setSelectEvent(e.target.value)}/>
                        <label htmlFor="customRadio" className="custom-radio-label">10K Run - SANTA RUN</label>
                    </div>


                    <div>
                        <label htmlFor="customRadio"className="custom-radio-label">800.00 INR</label>
                    </div>
                </div>
                <div className='mx-4'>
                    <div className="d-flex flex-row justify-content-between mx-5 align-items-center">
                        <div className="d-flex-inline">
                            <label htmlFor="customRadio"className="custom-radio-label">Timed run</label>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
                <hr style={{border: 'none', borderTop: '2px dashed #999', width:"80%", margin:"auto"}} className='my-4'/>
                <div className="d-flex flex-row justify-content-between mx-5 align-items-center">
                    <div className="d-flex-inline">
                    <input type="radio" id="male" style={{transform: 'scale(1.5)', marginRight:"0.5em"}} value="21.1K RUN - SANTA RUN" checked={selectEvent==="21.1K RUN - SANTA RUN"} onChange={(e)=>setSelectEvent(e.target.value)}/>
                        <label htmlFor="customRadio"className="custom-radio-label">21.1K RUN - SANTA RUN</label>
                    </div>


                    <div>
                        <label htmlFor="customRadio"className="custom-radio-label">900.00 INR</label>
                    </div>
                </div>
                <div className='mx-4'>
                    <div className="d-flex flex-row justify-content-between mx-5 align-items-center">
                        <div className="d-flex-inline">
                            <label htmlFor="customRadio"className="custom-radio-label">Timed run</label>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
                <hr style={{border: 'none', borderTop: '2px dashed #999', width:"80%", margin:"auto"}} className='my-4'/>
                <div className="d-flex flex-row justify-content-between mx-5 align-items-center">
                    <div className="d-flex-inline">
                    <input type="radio" id="male" style={{transform: 'scale(1.5)', marginRight:"0.5em"}} value="50K CYCLING" checked={selectEvent==="50K CYCLING"} onChange={(e)=>setSelectEvent(e.target.value)}/>
                        <label htmlFor="customRadio"className="custom-radio-label">50K CYCLING</label>
                    </div>


                    <div>
                        <label htmlFor="customRadio"className="custom-radio-label">800.00 INR</label>
                    </div>
                </div>
                <div className='mx-4'>
                    <div className="d-flex flex-row justify-content-between mx-5 align-items-center">
                        <div className="d-flex-inline">
                            <label htmlFor="customRadio"className="custom-radio-label">Timed event</label>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>

                <hr />

                <div className="d-flex flex-row justify-content-between mx-5 align-items-center">
                    <div className="d-flex-inline">
                     <p className='text-sm'>Coupon code applicable to group <br/>registrations only</p>
                    </div>


                    <div>
                      <p className='font-weight-bold'>Total&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 800.00 INR</p>
                    </div>
                </div>

                <div>
                    <input type="text" placeholder='Enter Coupon Code' style={{outline:"none", border:"1px solid gray", borderRadius:"5px", padding:"5px"}} value={couponCode} onChange={(e)=>setCouponCode(e.target.value)}/>&nbsp;
                    <button type="button"className="btn btn-primary" onClick={handleCoupon}>Apply</button>
                </div>
            </div>
            <div className="block-example border border-top-0 border-gray p-4 border-1">
            <div className="d-flex flex-row justify-content-between mx-5 align-items-center">
                <div></div>
                <img width="80px" src="https://myraceindia.com/Live_API/assets/jotform/MRTS_Logo_with_Powered_by.png"/>
                <button className='nextbutton' onClick={handleNext}>Next</button>
                </div>
        </div>
        </div>
    )
}

export default LandingPage