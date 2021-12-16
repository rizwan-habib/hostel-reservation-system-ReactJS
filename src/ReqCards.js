import { useHistory } from "react-router";
import { useState } from "react";
import { useEffect } from "react";
import UserProfile from './userProfile';
import { Link } from "react-router-dom";
import axios from "axios";
import $ from 'jquery';
function ReqCards(props) {

    const [status,setStatus] = useState("false"); 
    const [name,setName] = useState("");
    const [roomNo,setRoomNo] = useState(0);
    const [hostelLogin,setHostelLogin] = useState("");

    const [state,setState] = useState([]);
    

    useEffect(() => {
      // Run! Like go get some data from an API.

      setName(props.name);
      setRoomNo(props.roomNo);
      setHostelLogin(props.hostelLogin);
    }
    , []);


    function handleChange(){
        let selector = document.getElementById("status");
        let option = selector.options[selector.selectedIndex].value;
            if(option ==="1")
            {
                setStatus("true");
            }
            else if(option ==="2")
            {
                setStatus("false");
            }

    }
    
    
  

    function handelAccept(event) {
        
        event.preventDefault();
        const username = document.getElementById("name").value;
        setName(username);

        const hostellog = document.getElementById("hostelLogin").value;
        setHostelLogin(hostellog);

        const roomno = document.getElementById("roomNo").value;
        setRoomNo(roomno);

        const state = document.getElementById("state").value;
        setState(state);


        console.log("username",username);
        const user = {
        "username": name,
        "hostelLogin":hostelLogin,
        "status":status,
        "roomNo":roomNo
        };
        console.log(user);

    let result =  false;

    axios.post(`http://localhost:8001/sendResponse`,user)
    .then(res => {
        
        result = res.data;
        // setData(result);
        if(result)
        {
            alert("accept");  
          history.push(
            {
              pathname:"/login",
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
      history.push(
        {
          pathname:"/login",
          state: state 
        }  
      )
    });
       

    }

    
    
    const history = useHistory();

    return (

            <div class="col" id="myCard" >
               
                <form onSubmit={handelAccept} class="form">
                    <div id="card"  class="card" style={{width: "18rem"}}>
                        <img src="https://vistapointe.net/images/hostel-7.jpg" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title" >{"Name: "+props.name}</h5>
                            <p class="card-text"  >{"CNIC :"+ props.cnic}</p>
                            <div class="mb-3">
                                <input type="hidden" id="hostelLogin" name="hostelLogin" value={props.hostelLogin} />
                                <input type="hidden" id="roomNo" name="roomNo" value={props.roomNo} />
                                {console.log(props.roomNo)}    
                                <input type="hidden" id="name" name="Name" value={props.data.username} />                      
                                <input type="hidden" id="cnic" name="CNIC" value={props.cnic} />
                                <input type="hidden" id="state" name="state" value={props.state} />                       
                                <select id="status" onChange={handleChange} value={status} class="form-control"  placeholder="Accept or Reject" >
                                    <option value="">Select</option>
                                    <option value="1">Accept</option>
                                    <option value="2">Reject</option>
                                </select>
                            </div>
                            <div class="mb-3"><button class="btn btn-primary" type="submit">Submit</button></div>
                        </div>
                    </div>
                </form>
            </div>
            
    );
  }
  {/* <Link  to= { {pathname: '/requestMessages', state:props } } onClick={handleChange} class="btn btn-primary">Go somewhere</Link> */}
  export default ReqCards;