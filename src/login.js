import Nav from "./Navbar"
import './css/Login-Form-Clean.css'
import './fonts/ionicons.eot'
import './fonts/ionicons.min.css'
import './fonts/ionicons.svg'
import './fonts/ionicons.ttf'
import './fonts/ionicons.woff'
import { useHistory } from "react-router";
import { useState } from "react";
import axios from "axios"
import UserProfile from './userProfile';



function LoginPage() {
  const history = useHistory();

  const [userName, setUserName] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState([]);
  

  
  function handleSubmit(event) {
    event.preventDefault();
    const user = {
      "username": userName,
      "password": password
    };

    const hostelOwner = {
    "login": login,
    "password": password
    };

    UserProfile.setName(userName);
    let result =  false;

    axios.post(`http://localhost:8001/login`,user)
    .then(res => {
        
        result = res.data;
        setData(result);
        if(result.type==="resident")
        {
          history.push(
            {
              pathname:"/SearchAndResults",
              state: { username: userName, data : result} 
            }  
          );
        }
        else if(result.type=="hostel")
        {
          history.push(
            {
              pathname:"/hostelMain",
              state: { username: userName, data : result } 
            }  
          );
        }
        else{
          alert("Not Found");
          console.log("error");
        }

        // result = res.data;
        // setData(result);
        // if(result)
        // {
        //   history.push(
        //     {
        //       pathname:"/hostelMain",
        //       state: { username: userName, data : result } 
        //     }  
        //   );
        // }
        // else{
        //   alert("Not Found");
        //   console.log("error");
        // }



      }
    )
    .catch(err => {
      // Do something for an error here
      console.log("Error Reading data " + err);
    });
  }




  

  function updateUserName(e)
  {
    setUserName(e.target.value);
    // console.log(userName);
  }

  function updatePassword(e)
  {
    setPassword(e.target.value);
    // console.log(password);
  }
  
  return (
    <div>
      <Nav/>
      <section class="login-clean">
        <form  onSubmit={handleSubmit}>
            <h2 class="visually-hidden">Login Form</h2>
            <div class="illustration"><i class="icon ion-ios-unlocked"></i></div>
            <div class="mb-3"><input class="form-control" id="userName" type="text" name="userName" onChange={updateUserName} value={userName} placeholder="User Name"/></div>
            <div class="mb-3"><input class="form-control" id="password" type="password"  name="password" onChange={updatePassword} value={password} placeholder="Password"/></div>
            <div class="mb-3"><button class="btn btn-primary d-block w-100" type="submit">Log In</button></div><a class="forgot" href="#">Forgot your email or password?</a>
        </form>
      </section>
    </div>
  );
}

export default LoginPage;