import { useHistory } from "react-router";
import './css/Contact-Form-Clean.css'
import NavHostelMain from "./NavHostelMain";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import ReqCards from "./ReqCards";

function RequestMessages() {
    const history = useHistory();
    const location = useLocation(); 
    // login wala
    const [hostelLogin, setHostelLogin] = useState("");
    

    //data which will create cards and deal requests
    const[data,setData] =useState([]);


    function handleSubmit(e) {
    e.preventDefault();
    alert('accepted')
    history.push('/requestMessages');
    }



    useEffect(() => {

        // names of those users who had requested
        // const Names = 
        // const Cnics = location.state.data.data.map((val) => (val.cnic));
        // setNames(Names);
        // setCnics(Cnics);
        // console.log(Names);
        setData(location.state.data.data); 
        // console.log("name:",location.state.data.data[0].name);
        console.log("data:",location.state.data.data);
        // console.log("hostelLogin:",location.state.data.username);
        setHostelLogin(location.state.data.username);

    }, []);


    return (
       <div>
           <NavHostelMain/>
           <div class="container">
                <div class="row">
                {data.map(
                    (val, index) =>
                    !val || (
                        <ReqCards
                        name={val.name}
                        cnic={val.cnic}
                        roomNo={val.request.roomNo}
                        hostelLogin={hostelLogin}
                        state ={location.state}
                       
                        />
                    )
                )}
                </div>
            </div>
        </div>
       
    );
  }
  
  export default RequestMessages;