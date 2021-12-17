import { useHistory } from "react-router";
import NavHostelMain from "./NavHostelMain";
import HeaderHostelMain from "./headerHostelMain";
import {useLocation} from 'react-router-dom';

function HostelMain() {
    const history = useHistory();
    const location = useLocation();

    // function handleSubmit(e) {
    // e.preventDefault();
    // // history.push('/RoomsAndBeds');
    // }



    return (  
            <div>
              {/* {location.state.data.username} */}
              {/* {console.log(location)} */}
               <header class="header-blue">
                <NavHostelMain  state = {location.state}  />
                <HeaderHostelMain/>
                </header>     
            </div>
        
    );
  }
  
  export default HostelMain;