import { useHistory } from "react-router";
import './css/Contact-Form-Clean.css'
import NavHostelMain from "./NavHostelMain";

function DelHostel() {
    const history = useHistory();

    function handleSubmit(e) {
    e.preventDefault();
    alert('deleted')
    history.push('/');
    }

    return (
       <div>
           <NavHostelMain/>
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
  
  export default DelHostel;