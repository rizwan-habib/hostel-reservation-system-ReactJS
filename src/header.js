import './css/Header-Blue.css'
import './fonts/font-awesome.min.css'
import './fonts/fontawesome-webfont.eot'
import './fonts/fontawesome-webfont.svg'
import './fonts/fontawesome-webfont.ttf'
import './fonts/fontawesome-webfont.woff'
import './fonts/fontawesome-webfont.woff2'
import './fonts/FontAwesome.otf'
import screenContent from './img/hostel.jpg'
function Header() {
    return (
        // <header class="header-blue">
            <div class="container hero">
                <div class="row">
                    <div class="col-12 col-lg-6 col-xl-5 offset-xl-1">
                    
                        <h1>Welcome Back!</h1>
                        <p> 
                            Our Hostel management system is designed to suggest the best hostels in town
                            to its users based on their ratings and customer's experience.    
                        </p>
                        
                        <a href='#myfooter' class="btn btn-light btn-lg action-button" type="button ">Learn More</a>
                    </div>
                    <div class="col-md-5 col-lg-5 offset-lg-1 offset-xl-0 d-none d-lg-block phone-holder">
                        <div class="phone-mockup"><img class="device" src={screenContent} alt="image"/>
                            <div class="screen"></div>
                        </div>
                    </div>
                </div>
                <div id='myfooter'></div>    
            </div>
        //</header>
        
    );
  }
  
  export default Header;