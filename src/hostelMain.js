import { useHistory } from "react-router";
import NavHostelMain from "./NavHostelMain";
import HeaderHostelMain from "./headerHostelMain";
import {useLocation} from 'react-router-dom';

function HostelMain() {
    const history = useHistory();
    const location = useLocation();

    function handleSubmit(e) {
    e.preventDefault();
    // history.push('/RoomsAndBeds');
    }



    return (  
            <div>
              {console.log(location)}
               <header class="header-blue">
               <NavHostelMain  data = {location.state}  />
                <HeaderHostelMain/>
                </header>     
            </div>
        
    );
  }
  
  export default HostelMain;