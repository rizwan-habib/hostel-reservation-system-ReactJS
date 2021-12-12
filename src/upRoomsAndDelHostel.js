import { useHistory } from "react-router";
import './css/Contact-Form-Clean.css'
import Nav from "./Navbar";

function UpRoomsOrDelHostel() {
    const history = useHistory();

    function handleSubmit(e) {
    e.preventDefault();
    alert('deleted')
    history.push('/updateRoomsOrDeleteHostel');
    }

    return (
        
       <div>
           <Nav/>       
            <section class="contact-clean">
                <form onSubmit={handleSubmit}>
                    <h2 class="text-center">Update Room Status</h2>
                    <div class="mb-3">
                        <select id="room"  class="form-control"  placeholder="Select Room" >
                            <option value="UpdateRoom">Select Room</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <select id="bed"  class="form-control"  placeholder="Select bed" >
                            <option value="UpdateBed">Select Bed</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
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
            <section class="contact-clean">
                <form onSubmit={handleSubmit}>
                <div class="mb-3" >
                    <h2 class="text-center">Delete Hostel</h2>
                    <small color="text-danger">Are you sure you want to delete the hostel? This will erase all your data from the site.To delete the
                    hostel enter your password below:   
                    </small><br/>
                    <input class="form-control"  type="password" placeholder="password" ></input>
                    <div class="mb-3"><button class="btn btn-primary" type="submit">Delete</button></div>
                </div>
                </form>
            </section>
       </div>
       
    );
  }
  
  export default UpRoomsOrDelHostel;