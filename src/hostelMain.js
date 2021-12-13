import { useHistory } from "react-router";
import NavHostelMain from "./NavHostelMain";
import HeaderHostelMain from "./headerHostelMain";

function HostelMain(props) {
    const history = useHistory();

    function handleSubmit(e) {
    e.preventDefault();
    // history.push('/RoomsAndBeds');
    }

    return (  
            <div>
               <header class="header-blue">
               <NavHostelMain/>
                <HeaderHostelMain/>
                </header>     
            </div>
        
    );
  }
  
  export default HostelMain;