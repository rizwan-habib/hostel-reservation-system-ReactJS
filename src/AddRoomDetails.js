import { useHistory } from "react-router";
import './css/Contact-Form-Clean.css'
import { useState } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";
function AddRoomDetails() {
    const history = useHistory();
    // function MyComponent(){
    // let { id } = useParams();
    // return (<h2 class="text-center"  >Add Room {id} Details</h2>);
    // }    

    const [hostelID, setHostelID] = useState("");
    const [roomNo, setRoomNo] = useState("");
    const [totalBeds, setTotalBeds] = useState("");
    const [roomType, setRoomType] = useState("");
    const [floorNo, setFloorNo] = useState("");

    function updateRoomNo(e)
    {
      setRoomNo(e.target.value);
      //console.log(totalBeds);
    }

    function updateTotalBeds(e)
    {
      setTotalBeds(e.target.value);
      //console.log(totalBeds);
    }
    function updateFloorNo(e)
    {
      setFloorNo(e.target.value);
      //console.log(floorNo); 
    }

    function updateRoomType(e)
    {
      setRoomType(e.target.value);
      //console.log(roomType);
    }

    function updateHostelID(e)
    {
      setHostelID(e.target.value);
      //console.log(roomType);
    }
    
    function handleSubmit(e) {
    e.preventDefault();
           
            const user = {
                "hostelID":hostelID,
                "roomNo": roomNo,
                "totalBeds": totalBeds,
                "roomType": roomType,
                "floorNo":floorNo
            };
              
              let result =  false;
                
              axios.post(`http://localhost:8000/login`,user)
              .then(res => {
                  console.log(res);
                  //data message now in result
                  result =res.data.message;
                  
                  if(result)
                  {
                    
                    history.push(`/AddRoomDetails`); 
                  }
                  else{
                    console.log("error");
                  }  
                }
              )
              .catch(err => {
                // Do something for an error here
                console.log("Error Reading data " + err);
              });
            

    }

    return (
       <div>

            <section class="contact-clean">
                <form onSubmit={handleSubmit}>
                    {/* {
                        MyComponent()
                    } */}
                    <h2 class="text-center">Add Room Details</h2>
                    
                    <div class="mb-3">
                        <input class="form-control" id ="inputHostelID"  onChange={updateHostelID} value={hostelID} type="number" name="text" placeholder="Hostel ID"/>
                    </div>
                    <div class="mb-3">
                        <input class="form-control" id ="inputRoomNo"  onChange={updateRoomNo} value={roomNo} type="number" name="text" placeholder="Room No"/>
                    </div>
                    <div class="mb-3">
                        <select id="roomType"  class="form-control"  placeholder="Select Room Type" >
                            <option value="SelectRoom">Select Room Type</option>
                            <option value="1">Professional</option>
                            <option value="2">Student</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <input class="form-control" id ="inputTotalBeds"  onChange={updateTotalBeds} value={totalBeds} type="number" name="text" placeholder="Total beds"/>
                    </div>
                    <div class="mb-3">
                        <input class="form-control" id ="floorNo"  onChange={updateFloorNo} value={floorNo} type="number" name="text" placeholder="Floor No"/>
                    </div>
                    
                    {/* <div class="mb-3"><textarea class="form-control" name="message" placeholder="Message" rows="14"></textarea></div> */}
                    <div class="mb-3"><button class="btn btn-primary" type="submit">Add</button></div>
                </form>
            </section>
       </div>
       
    );
  }
  
  export default AddRoomDetails;