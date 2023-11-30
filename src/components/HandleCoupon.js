import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const HandleCoupon = () => {
  const navigate = useNavigate();
const [data, setData] = useState({ email:"", age:"" })
const setChangeData = (e) => {
    const { name, value } = e.target;
  
    const parsedValue = name === 'age' ? parseInt(value, 10) : value;
  
    setData({ ...data, [name]: parsedValue });
  };
const handleSubmit = async(e)=>{
    e.preventDefault();
    try {
        const res = await axios.post("http://localhost:3001/santarun/requestcoupon", {
  email:data.email,
  age:data.age
},
{
       headers: {
        "Content-Type": "application/json"
       }
        })
        navigate("/")
    } catch (error) {
        console.error(error)
    }
 }

  return (
    <div style={{textAlign:"center", margin:"3em"}}>
      <h3>Coupon getting from mail</h3>
    <form onSubmit={handleSubmit}>
        <input type="email" name="email" value={data.email} onChange={setChangeData}/>
        <br/>
        <br/>
      <input type="text" name="age" value={data.age} onChange={setChangeData}/>
      <br/>
        <br/>
      <button type="submit">Submit</button>
    </form>
    </div>
  )
}

export default HandleCoupon