import { useHistory } from "react-router";
import './css/Contact-Form-Clean.css'
import NavHostelMain from "./NavHostelMain";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import ReqCards from "./ReqCards";
// import { setConstantValue } from "typescript";

function RequestMessages() {
    const history = useHistory();
    const location = useLocation(); 
    // login wala
    const [hostelLogin, setHostelLogin] = useState("");
    

    //data which will create cards and deal requests
    const[data,setData] =useState([]);

    const[state,setState] =useState([]);

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
        
        setState(location.state);
        setHostelLogin(location.state.data.username);
        console.log(location.state.data.username);
        const user = {
            "hostelLogin": location.state.data.username
        };
    
        let result =  false;
        console.log(user); 
        axios.post(`http://localhost:8001/getRequests`,user)
        .then(res => {
            console.log(res.data);
            result = res.data;
            setData(result);

            if(result)
            {
                // alert("accept");  
                console.log(result);
              history.push(
                {
                  pathname:"/requestMessages",
                  state: state 
                }  
              );
            }
            else{
              alert("Not Found");
              console.log("error");
            }
    
    
    
          }
        )
        .catch(err => {
          // Do something for an error here
          console.log("Error Reading data " + err);
        });
        

    }, []);


    return (
       <div>
           <NavHostelMain/>
           <div class="container">
               
               {/* {} */}
                <div class="row">
                {data.map(
                    (val, index) =>
                    !val || (
                        <ReqCards
                        name={val.name}
                        cnic={val.cnic}
                        roomNo={val.request.roomNo}
                        hostelLogin={hostelLogin}
                        data={data}
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