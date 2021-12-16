import { useHistory } from "react-router";
import './css/Contact-Form-Clean.css'
import NavHostelMain from "./NavHostelMain";
import { useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useState } from "react";
function DelHostel() {


    const history = useHistory();
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const location = useLocation();

    

    useEffect(() => {
        console.log(location.state.data);
           
        setLogin(location.state.data.username);
            // Run! Like go get some data from an API.
    }, []);

    function updatePassword(e)
    {
        setPassword(e.target.value);
        // console.log(password);
    }


    function handleSubmit(e) {
        e.preventDefault();
        
        // let ownerObject = location.state.data.filter((val )=>(val.login === location.state.data.username ))
        // console.log(ownerObject[0].password);
        if(true)
        {
            const user = {
                "hostelLogin":login
            };
              
              let result =  false;
                
              axios.post(`http://localhost:8001/deleteHostel`,user)
              .then(res => {
                  console.log(res);
                  //data message now in result
                  result =res.data;
                  
                  if(result)
                  {
                    alert("hostel deleted")
                    history.push(`/`); 
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
        else{
            alert("invalid password");
            history.push(`/deleteHostel`); 
        }
               
         
                
    
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
                    <input class="form-control" onChange={updatePassword} value={password} type="password" placeholder="password" ></input>
                    <div class="mb-3"><button class="btn btn-primary" type="submit">Delete</button></div>
                </div>
                </form>
            </section>
        </div>
       
    );
  }
  
  export default DelHostel;