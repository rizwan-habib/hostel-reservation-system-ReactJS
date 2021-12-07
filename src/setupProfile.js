import Nav from "./Navbar"
import './css/Registration-Form-with-Photo.css'
function SetupProfilePage() {
  return (
    <div>
    <Nav/>
    <h1>Setup Profile</h1>
    <section class="register-photo">
        <div class="form-container">
            <div class="image-holder"></div>
            <form method="post">
                <h2 class="text-center"><strong>Create</strong> an account.</h2>
                <div class="mb-3"><input class="form-control" type="email" name="email" placeholder="Email"/></div>
                <div class="mb-3"><input class="form-control" type="email" name="email" placeholder="User Name"/></div>
                <div class="mb-3"><input class="form-control" type="password" name="password" placeholder="Password"/></div>
                <div class="mb-3"><input class="form-control" type="password" name="password-repeat" placeholder="Password (repeat)"/></div>
                <div class="mb-3">
                    <div class="form-check"><label class="form-check-label"><input class="form-check-input" type="checkbox"/>I agree to the license terms.</label></div>
                </div>
                <div class="mb-3"><button class="btn btn-primary d-block w-100" type="submit">Sign Up</button></div><a class="already" href="#">You already have an account? Login here.</a>
            </form>
        </div>
    </section>

    </div>
  );
}

export default SetupProfilePage;