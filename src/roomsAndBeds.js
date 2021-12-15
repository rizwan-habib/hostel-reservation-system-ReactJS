import { useHistory } from "react-router";
import './css/Contact-Form-Clean.css'
import NavBackResults from "./NavBackResults";
import { useState } from "react";
import axios from "axios";
import {useLocation} from 'react-router-dom';




function RoomsAndBeds() {

    const history = useHistory();
    const [hostelID, setHostelId] = useState(0);
    const [address,setHostelAddress] = useState("");
    const [hostelName, setHostelName] = useState("");
    const [data, setData] = useState([]);
    const [roomNo,setRoomNo] = useState(0);

    const location = useLocation();
    
    function updateRoomNo(e){
        let selector = document.getElementById("room");
        let option = selector.options[selector.selectedIndex].value;
        setRoomNo(option);
        // localStorage("roomno", option);
        
        console.log(option);

    }


    

    function handleSubmit(e) {
        
        e.preventDefault();
        const user = {
                "hostelName":hostelName,
                "hostelID": hostelID,
                "address": address,
                "roomNo":roomNo
            };
        
        

       

        axios.post(`http://localhost:8008/login`,user)
        .then(res => {      
            setData(res.data);   

            alert("wait for confirmation of roomNo",roomNo);
            history.push('/SearchAndResults'); 
        }
        )
        .catch(err => {
        // Do something for an error here
        console.log("Error Reading data " + err);
        });

        
    
    }


    
    return (
        

       <div>
           <NavBackResults/>
            <section class="contact-clean">
                <span>{roomNo}</span>
                <form onSubmit={handleSubmit} >
                    <h2 class="text-center">Select Room and Bed </h2>
                    <div class="mb-3">
                        <select id="room" onChange={updateRoomNo} value={roomNo} class="form-control"  placeholder="Select Room" >
                            <option value={0}>Select Room</option>
                            {
                                location.state.rooms.map((val)=>{
                                    return <option value={val.roomNo} id="roomNo" key={val.roomNo} >{val.roomNo}</option>
                                })
                            }
                        </select>
                    </div>
                    <div class="mb-3"><textarea class="form-control" name="message" placeholder="Message" rows="14"></textarea></div>
                    <div class="mb-3"><button class="btn btn-primary" type="submit">Book</button></div>
                </form>
            </section>
       </div>
       
    );
  }
  
  export default RoomsAndBeds;