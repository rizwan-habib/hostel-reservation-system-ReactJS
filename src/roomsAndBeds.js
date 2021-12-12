import { useHistory } from "react-router";
import './css/Contact-Form-Clean.css'
import NavBackResults from "./NavBackResults";

function RoomsAndBeds() {
    const history = useHistory();

    function handleSubmit(e) {
    e.preventDefault();
    alert("wait for confirmation");
    history.push('/SearchAndResults');    
    }

    return (
       <div>
           <NavBackResults/>
            <section class="contact-clean">
                <form onSubmit={handleSubmit}>
                    <h2 class="text-center">Select Room and Bed</h2>
                    <div class="mb-3">
                        <select id="room"  class="form-control"  placeholder="Select Room" >
                            <option value="SelectRoom">Select Room</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <select id="room"  class="form-control"  placeholder="Select Room" >
                            
                            <option value="SelectBed">Select Bed</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
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