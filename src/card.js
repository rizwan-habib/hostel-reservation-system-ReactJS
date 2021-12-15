import { useHistory } from "react-router";
import { useState } from "react";
import UserProfile from './userProfile';
import { Link } from "react-router-dom";


function Card(props) {
    
    const history = useHistory();

    return (
            
            <div class="col">
                <div class="card" style={{width: "18rem"}}>
                    <img src="https://vistapointe.net/images/hostel-7.jpg" class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">{props.hostelName}</h5>
                        <p class="card-text">{props.address}</p>
                        <Link  to= { {pathname: '/roomsAndBeds', state:props } }  class="btn btn-primary">Go somewhere</Link>
                        {/*  */}
                    </div>
                </div>
            </div>
    );
  }
  
  export default Card;