import Nav from "./Navbar"
import './css/Registration-Form-with-Photo.css'
import { useHistory } from "react-router";

function SetupProfilePage() {
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    var inputEmail =  document.getElementById("inputEmail").value;
    var inputUserName =  document.getElementById("inputUserName").value;
    var inputPassword =  document.getElementById("inputPassword").value;
    var inputPasswordRep =  document.getElementById("inputPasswordRep").value;  
    alert(
      "email :"+ inputEmail + " " + inputUserName + " " + inputPassword 
    
    )

    history.push('/Login');
  }


  return (
    
    <div>
    <Nav/>
    <section class="register-photo">
        <div class="form-container">
            <div class="image-holder"></div>
            <form onSubmit={handleSubmit}>
                <h2 class="text-center"><strong>Create</strong> an account.</h2>
                <div class="mb-3"><input class="form-control" id ="inputEmail" type="email" name="email" placeholder="Email"/></div>
                <div class="mb-3"><input class="form-control" id ="inputUserName" type="text" name="text" placeholder="User Name"/></div>
                <div class="mb-3"><input class="form-control" id = "inputPassword" type="password" name="password" placeholder="Password"/></div>
                <div class="mb-3"><input class="form-control" id = "inputPasswordRep" type="password" name="password-repeat" placeholder="Password (repeat)"/></div>
                <div class="mb-3">
                    <div class="form-check"><label class="form-check-label"><input class="form-check-input" type="checkbox"/>I agree to the license terms.</label></div>
                </div>
                <div class="mb-3"><button class="btn btn-primary d-block w-100" type="submit">Sign Up</button></div><a class="already" href="/Login">You already have an account? Login here.</a>
            </form>
        </div>
    </section>

    </div>
  );
}

export default SetupProfilePage;