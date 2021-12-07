import Nav from "./Navbar"
import './starSky.jpg'
import './css/LoginFormDark.css'
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
    history.push('/SearchAndResults');
  }

  return (
    <div>
    <Nav/>
    <section class="login-dark">
        <form onSubmit={handleSubmit} >
            <h2 class="sr-only">Welcome back!</h2>
            <div class="illustration"><i class="icon ion-ios-locked-outline"></i></div>
            <div class="form-group"><input class="form-control" type="email" name="email" placeholder="Email"/></div>
            <div class="form-group"><input class="form-control" type="password" name="password" placeholder="Password"/></div>
            <div class="form-group"><button class="btn btn-primary btn-block" type="submit"   >Log In</button></div><a class="forgot" href="/setupProfile">Forgot your email or password?</a>
        </form>
    </section>
    </div>
  );
}

export default LoginPage;