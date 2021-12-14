import Nav from "./Navbar"
import Carousel from "./Carousel"
import Header from "./header";
import './img/hostel.jpg'

function WelcomePage() {
  return (
    <div>
      <header class="header-blue">
        <Nav/>
        <Header/>
      </header>
    </div>
  );
}

export default WelcomePage;