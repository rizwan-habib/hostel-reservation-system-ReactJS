import Nav from "./Navbar"
import './css/Login-Form-Clean.css'
import './fonts/ionicons.eot'
import './fonts/ionicons.min.css'
import './fonts/ionicons.svg'
import './fonts/ionicons.ttf'
import './fonts/ionicons.woff'
import { useHistory } from "react-router";

function LoginPage() {
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    var email = "talhanasr3e@gmail.com";
    var password = "boby";
    var inputEmail =  document.getElementById("email").value;
    var inputPassword =  document.getElementById("password").value;

    var ownerEmail = "rizwan@gmail.com";
    var ownerPassword = "boby";
    



    if(inputEmail==email && inputPassword==password){
      history.push('/SearchAndResults');
    }
    else if(inputEmail==ownerEmail && inputPassword==ownerPassword){
      history.push('/updateRoomsOrDeleteHostel');
    }
    else{
      alert("invalid email or password");
    }
    
  }

  return (
    <div>
      <Nav/>
      <section class="login-clean">
        <form onSubmit={handleSubmit}>
            <h2 class="visually-hidden">Login Form</h2>
            <div class="illustration"><i class="icon ion-ios-unlocked"></i></div>
            <div class="mb-3"><input class="form-control" id="email" type="email" name="email" placeholder="Email"/></div>
            <div class="mb-3"><input class="form-control" id="password" type="password" name="password" placeholder="Password"/></div>
            <div class="mb-3"><button class="btn btn-primary d-block w-100" type="submit">Log In</button></div><a class="forgot" href="#">Forgot your email or password?</a>
        </form>
      </section>
    </div>
  );
}

export default LoginPage;