import { useHistory } from "react-router";
import './css/Contact-Form-Clean.css'
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import NavHostelMain from "./NavHostelMain";
import axios from "axios";
function AddRoomDetails() {
    const history = useHistory();
   
    const location = useLocation();

    const [login, setLogin] = useState("");
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
    
    useEffect(() => {
      console.log(location.state);  
      setLogin(location.state.data.username);
          // Run! Like go get some data from an API.
    }, []);


    function handleChange(){
      let selector = document.getElementById("roomType");
      let option = selector.options[selector.selectedIndex].value;
      setRoomType(option);

    }

    function handleSubmit(e) {


    e.preventDefault();
           
            const user = {
                "hostelID":login,
                "roomNo": roomNo,
                "totalBeds": totalBeds,
                "roomType": roomType,
                "floorNo":floorNo
            };
              
              let result =  false;
                
              axios.post(`http://localhost:8001/enterRoomDetails`,user)
              .then(res => {
                  console.log(res);
                  //data message now in result
                  result =res.data;
                  
                  if(result)
                  {
                    alert("room details added")
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
            <NavHostelMain/>
            
            <section class="contact-clean">
                <form onSubmit={handleSubmit}>
                    
                    <h2 class="text-center">Add Room Details</h2>
                    <div class="mb-3">
                        <input class="form-control" id ="inputRoomNo"  onChange={updateRoomNo} value={roomNo} type="number" name="text" placeholder="Room No"/>
                    </div>
                    <div class="mb-3">
                      
                        <select id="roomType" onChange={handleChange} value={roomType} class="form-control"  placeholder="Select Room Type" >
                            <option value="">Select Room Type</option>
                            <option value="Professional">Professional</option>
                            <option value="Student">Student</option>
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