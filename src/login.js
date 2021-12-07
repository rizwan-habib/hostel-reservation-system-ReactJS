import Nav from "./Navbar"
import './starSky.jpg'
import './LoginFormDark.css'
function LoginPage() {
  function handleSubmit(e) {
    e.preventDefault();
    // console.log('You clicked submit.');
  }

  return (
    <div>
    <Nav/>
    <section class="login-dark">
        <form onSubmit={handleSubmit} >
            <h2 class="sr-only">Login Form</h2>
            <div class="illustration"><i class="icon ion-ios-locked-outline"></i></div>
            <div class="form-group"><input class="form-control" type="email" name="email" placeholder="Email"/></div>
            <div class="form-group"><input class="form-control" type="password" name="password" placeholder="Password"/></div>
            <div class="form-group"><button class="btn btn-primary btn-block" type="submit"  >Log In</button></div><a class="forgot" href="/">Forgot your email or password?</a>
        </form>
    </section>
    </div>
  );
}

export default LoginPage;