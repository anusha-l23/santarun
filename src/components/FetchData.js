import React, {useState, useEffect} from 'react'
import axios, { all } from 'axios'
import "../App.css";
import { useParams } from 'react-router-dom'
const FetchData = () => {
    const [users, setUsers] = useState([])
    const [usersByEventId, setUsersByEventId] = useState([])
    const [usersByGender, setUsersByGender] = useState({male:[], female:[]})
    const [selectedGender, setSelectedGender] = useState("male")

    const [usersByTShirtSize, setUsersByTShirtSize] = useState({S:[],M:[],L:[],XL:[],XXL:[]})
    const[selectedSize, setSelectedSize] = useState("S");


    const {eventId} = useParams()
    const fetchUsers = async()=>{
        const res = await axios.get("http://localhost:3001/santarun/users")
        console.log(res.data, "users")
        setUsers(res.data);
      }
      
      useEffect(()=>{
  fetchUsers();
      },[])


  const fetchUsersByEventId = async() => {
  const res = await axios.get(`http://localhost:3001/santarun/users/${eventId}`)
  console.log(res.data, "users")
  setUsersByEventId(res.data);
}

console.log(usersByEventId, "byevent")

useEffect(()=>{
fetchUsersByEventId();
},[])

const fetchUsersByGender = async(gender) => {
    const res = await axios.get(`http://localhost:3001/santarun/gender`,{
        params: {gender}
    })
return res.data;
  }
  

  useEffect(()=>{
    const fetchData = async() =>{
        const maleUsers = await fetchUsersByGender('male')
        const femaleUsers = await fetchUsersByGender('female')
    
 setUsersByGender({male: maleUsers, female:femaleUsers})
 
    }
    fetchData()
  },[])

const handleGenderChange = (e) => {
setSelectedGender(e.target.value)
}

const fetchUsersByTShirtSize = async(tShirtSize)=> {
  const res = await axios.get("http://localhost:3001/santarun/tshirtsize", {
    params:{tShirtSize}
  })
  return res.data;
} 

useEffect(()=>{
  const fetchData = async() =>{
    const sUsers = await fetchUsersByTShirtSize("S");
    const mUsers = await fetchUsersByTShirtSize("M");
    const lUsers = await fetchUsersByTShirtSize("L");
    const xlUsers = await fetchUsersByTShirtSize("XL");
    const xxlUsers = await fetchUsersByTShirtSize("XXL");
    setUsersByTShirtSize({S:sUsers, M:mUsers, L:lUsers, XL:xlUsers,XXL:xxlUsers})  
  }
fetchData();
},[])
console.log(usersByTShirtSize, "usersByTShirtSize")
  return (
    <div>
        <h1>users</h1>
        <table style={{textAlign:"center"}}>

 {usersByEventId.map((item)=>{
   return <tr>
    <td style={{border:"1px solid black", padding:"0.5em"}}>{item.firstName}</td>
    <td style={{border:"1px solid black", padding:"0.5em"}}>{item.email}</td>
    <td style={{border:"1px solid black", padding:"0.5em"}}>{item.eventId}</td>
    <td></td>
    </tr>
 })}
 </table>
 <br></br>
 <br/>
 <p>users by male</p>
<div className='flex'>
 <div>
      <select value={selectedGender} onChange={handleGenderChange}>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <br/>
      <br/>   <br/>
      <table style={{ textAlign: 'center' }}>
        <tbody>
          {usersByGender[selectedGender].map((item) => (
            <tr key={item.id}>
              <td style={{ border: '1px solid black', padding: '0.5em' }}>{item.firstName}</td>
              <td style={{ border: '1px solid black', padding: '0.5em' }}>{item.email}</td>
              <td style={{ border: '1px solid black', padding: '0.5em' }}>{item.eventId}</td>
              <td style={{ border: '1px solid black', padding: '0.5em' }}>{item.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <div>
      <select value={selectedSize} onChange={(e)=>setSelectedSize(e.target.value)}>
        <option value="S">S</option>
        <option value="M">M</option>
        <option value="L">L</option>
        <option value="XL">XL</option>
        <option value="XXL">XXL</option>

      </select>
      <br/>
      <br/>   <br/>
     {usersByTShirtSize ?
      <table style={{ textAlign: 'center' }}>
        <tbody>
          {usersByTShirtSize[selectedSize].map((item) => (
            <tr key={item.id}>
              <td style={{ border: '1px solid black', padding: '0.5em' }}>{item.firstName}</td>
              <td style={{ border: '1px solid black', padding: '0.5em' }}>{item.email}</td>
              <td style={{ border: '1px solid black', padding: '0.5em' }}>{item.eventId}</td>
              <td style={{ border: '1px solid black', padding: '0.5em' }}>{item.tShirtSize}</td>
            </tr>
          )) }
        </tbody>
      </table>
: <p>No users with this size</p>
          }
    </div>
</div>

 </div>
  )
}



export default FetchData