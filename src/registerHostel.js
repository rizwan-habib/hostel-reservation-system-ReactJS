import Nav from "./Navbar"
import './css/Registration-Form-with-Photo.css'
import { useHistory } from "react-router";

function RegisterHostelPage() {

    const history = useHistory();
    function handleSubmit(e) {
        e.preventDefault();

       if(document.getElementById("emailH").value)
       {
        var inputEmail =  document.getElementById("emailH").value;
       }
       if(document.getElementById("passwordH").value)
       {
        var inputPassword =  document.getElementById("passwordH").value;
       }
       if(document.getElementById("userNameH").value)
       {
        var inputUserName = document.getElementById("userNameH").value;     
       }
       if(document.getElementById("hostelAddr").value)
       {
        var inputHostelAddr =  document.getElementById("hostelAddr").value; 
       }
        
        
        // var inputBeds =  document.getElementById("totalBeds").value;
        // var inputRooms =  document.getElementById("totalRooms").value;
        
        // if(inputEmail && inputPassword && inputUserName && inputHostelAddr && inputBeds && inputRooms)
        // {
        //     history.push('/Login')
        // }
        // else{
        //     alert('invalid registeration');
        //     history.push('/registerHostel')
        // }
       
        
      }
  
    return (
    <div>
    <Nav/>
    <section class="register-photo">
        <div class="form-container">
            <div class="image-holder"></div>
            <form onSubmit={handleSubmit}>
                <h2 class="text-center"><strong>Create</strong> an account.</h2>
                <div class="mb-3"><input class="form-control" id="emailH" type="email" name="email" placeholder="Email"/></div>
                <div class="mb-3"><input class="form-control" id="userNameH" type="text" name="username" placeholder="User Name"/></div>
                <div class="mb-3"><input class="form-control" id="passwordH" type="password" name="password" placeholder="Password"/></div>
                <div class="mb-3"><input class="form-control" id="passwordHRep" type="password" name="password-repeat" placeholder="Password (repeat)"/></div>
                <div class="mb-3"><input class="form-control" id="hostelAddr" type="text" name="hostel-address" placeholder="Hostel Address"/></div>
                <div class="mb-3"><input class="form-control" id="totalRooms" type="number" name="total-rooms" placeholder="Total Rooms"/></div>
                <div class="mb-3"><input class="form-control" id="totatBeds" type="number" name="total-beds" placeholder="Total Beds"/></div>
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