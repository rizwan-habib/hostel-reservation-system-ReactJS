import { useHistory } from "react-router";
import './css/Contact-Form-Clean.css'
import NavHostelMain from "./NavHostelMain";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
function UpRoomsOrDelHostel() {
    const history = useHistory();

    const location = useLocation();
    function handleSubmit(e) {
    e.preventDefault();
    alert('updated')
    history.push('/updateRooms');
    }

    useEffect(() => {
    console.log(location.state)    

        // Run! Like go get some data from an API.
    }, []);


    return (
       <div>
           <NavHostelMain/>
            <section class="contact-clean">
                <form onSubmit={handleSubmit}>
                    <h2 class="text-center">Update Room Status</h2>
                    <div class="mb-3">
                        <select id="room"  class="form-control"  placeholder="Select Room" >
                            <option value="UpdateRoom">Select Room</option>
                            
                        </select>
                    </div>
                    <div class="mb-3">
                        <select id="bed"  class="form-control"  placeholder="Select bed" >
                            <option value="UpdateBed">Select Bed</option>
                            
                        </select>
                    </div>
                    <div class="mb-3">
                        <select id="bedStatus"  class="form-control"  placeholder="Select Status" >
                            <option value="selectBed">Select Status</option>
                            <option value="available">Available</option>
                            <option value="occupied">Occupied</option>
                        </select>
                    </div>
                    
                    <small color="text-danger">Are you sure you want to update it?   
                    </small><br/>
                    <input class="form-control"  type="password" placeholder="password" ></input>
                    <div class="mb-3"><button class="btn btn-primary" type="submit">Update</button></div>
                </form>
            </section>
        </div>
       
    );
  }
  
  export default UpRoomsOrDelHostel;