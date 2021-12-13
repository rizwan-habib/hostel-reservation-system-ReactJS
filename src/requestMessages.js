import { useHistory } from "react-router";
import './css/Contact-Form-Clean.css'
import NavHostelMain from "./NavHostelMain";

function RequestMessages() {
    const history = useHistory();

    function handleSubmit(e) {
    e.preventDefault();
    alert('accepted')
    history.push('/requestMessages');
    }

    return (
       <div>
           <NavHostelMain/>
           <section class="contact-clean">
                <form onSubmit={handleSubmit}>
                <div class="mb-3" >
                    <h2 class="text-center">Message Requests</h2>
                    <small color="text-danger">[Message here] Are you sure you want to accept the request?
                    </small><br/>
                    {/* <input class="form-control"  type="password" placeholder="password" ></input> */}
                    <div class="mb-3"><button class="btn btn-primary" type="submit">accept</button></div>
                </div>
                </form>
            </section>
        </div>
       
    );
  }
  
  export default RequestMessages;