import Nav from "./Navbar"
import './css/Registration-Form-with-Photo.css'
import { useHistory } from "react-router";
import { useState } from "react";
import axios from "axios";

function RegisterHostelPage() {
    const history = useHistory();

    const [hostelName, setHostelName] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [hostelAddr, setHostelAddr] = useState("");
    const[totalRooms,setTotalRooms] =  useState("");
    // const[totalBeds,setTotalBeds] =  useState("");
  
    function updateHostelName(e)
    {
      setHostelName(e.target.value);
    //   console.log(HostelName);
    }

    function updateUserName(e)
    {
      setUserName(e.target.value);
    //   console.log(userName);
    }
  
    function updatePassword(e)
    {
      setPassword(e.target.value);
    //   console.log(password);
    }
    // function updatePasswordRep(e)
    // {
    //   setPasswordRep(e.target.value);
    // //   console.log(passwordRep);
    // }
    function updateHostelAddr(e)
    {
      setHostelAddr(e.target.value);
    //   console.log(hostelAddr);
    }
    function updateTotalRooms(e)
    {
      setTotalRooms(e.target.value);
    //   console.log(totalRooms);
    }

    // function updateTotalBeds(e)
    // {
    //   setTotalBeds(e.target.value);
    // //   console.log(totalBeds);
    // }

    function handleSubmit(e) {
        e.preventDefault();
        
        const user = {
            "name":hostelName,
            "userName": userName,
            "password": password,
            "hostelAddr": hostelAddr,
            "totalRooms":totalRooms
        };
          
          let result =  false;
      
          axios.post(`http://localhost:8000/login`,user)
          .then(res => {
              console.log(res);
              //data message now in result
              result =res.data.message;
              if(result)
              {
                history.push("Login");
                
              }
              else{
                console.log("error");
              }  
            }
          )
          .catch(err => {
            // Do something for an error here
            console.log("Error Reading data " + err);
          });
    
       
        
      }
  
    return (
    <div>
    <Nav/>
    <section class="register-photo">
        <div class="form-container">
            <div class="image-holder"></div>
            <form onSubmit={handleSubmit}>
                <h2 class="text-center"><strong>Create</strong> an account.</h2>
                {/* <div class="mb-3"><input class="form-control" id="emailH" type="email" name="email" placeholder="Email"/></div> */}
                <div class="mb-3"><input class="form-control" id ="inputName"  onChange={updateHostelName} value={hostelName} type="text" name="text" placeholder="Hostel Name"/></div>
                <div class="mb-3">
                    {/* <input class="form-control" id="userNameH" onChange={updateUserName} value={userName} type="text" name="username" placeholder="User Name"/> */}
                    <div class="input-group">
                        <span class="input-group-text" id="inputGroupPrepend2">@</span>
                        <input class="form-control" id ="inputUserName"  onChange={updateUserName} value={userName} type="text" name="text" placeholder="User Name"/>
                    </div>
                </div>
                <div class="mb-3"><input class="form-control" id="passwordH" onChange={updatePassword} value={password} type="password" name="password" placeholder="Password"/></div>
                {/* <div class="mb-3"><input class="form-control" id="passwordHRep" onChange={updatePasswordRep} value={passwordRep} type="password" name="password-repeat" placeholder="Password (repeat)"/></div> */}
                <div class="mb-3"><input class="form-control" id="hostelAddr" onChange={updateHostelAddr} value={hostelAddr} type="text" name="hostel-address" placeholder="Hostel Address"/></div>
                <div class="mb-3"><input class="form-control" id="totalRooms" onChange={updateTotalRooms} value={totalRooms} type="number" name="total-rooms" placeholder="Total Rooms"/></div>
                {/* <div class="mb-3"><input class="form-control" id="totatBeds" onChange={updateTotalBeds} value={totalBeds} type="number" name="total-beds" placeholder="Total Beds"/></div> */}
                <div class="mb-3">
                    <div class="form-check"><label class="form-check-label"><input class="form-check-input" type="checkbox"/>I agree to the license terms.</label></div>
                </div>
                <div class="mb-3"><button class="btn btn-primary d-block w-100" type="submit">Register Hostel</button></div><a class="already" href="/Login">You already have an account? Login here.</a>
            </form>
        </div>
    </section>

    </div>
  );
}

export default RegisterHostelPage;