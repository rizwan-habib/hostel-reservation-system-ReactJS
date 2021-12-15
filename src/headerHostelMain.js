import './css/Header-Blue.css'
import './fonts/font-awesome.min.css'
import './fonts/fontawesome-webfont.eot'
import './fonts/fontawesome-webfont.svg'
import './fonts/fontawesome-webfont.ttf'
import './fonts/fontawesome-webfont.woff'
import './fonts/fontawesome-webfont.woff2'
import './fonts/FontAwesome.otf'
import screenContent from './img/hostelMain.jpg'
import UserProfile from './userProfile';
import HostelProfile from './hostelProfile'

function HeaderHostelMain() {

    /////
    // let name = UserProfile.getName();
    
    ////

    return (
        // <header class="header-blue">
            <div class="container hero">
                <div class="row">
                    <div class="col-12 col-lg-6 col-xl-5 offset-xl-1">
                        <h1>Welcome Back Owner!</h1>
                        <p> 
                            Our Hostel management system is designed to manage all the functionalities that you dreamed.You
                            can now add hostel details , update rooms and can see request messages from users.    
                        </p>
                        
                    </div>
                    <div class="col-md-5 col-lg-5 offset-lg-1 offset-xl-0 d-none d-lg-block phone-holder">
                        <div class="phone-mockup"><img class="device" src={screenContent} alt="image"/>
                            <div class="screen"></div>
                        </div>
                    </div>
                </div>
            </div>
        //</header>
        
    );
  }
  
  export default HeaderHostelMain;