import { Link } from "react-router-dom";

function NavHostelMain(props) {
   
    return (
        
    <nav class="navbar navbar-light navbar-expand-md">
        {/* {console.log(props.username.state.data)} */}
          <div class="container-fluid"><a class="navbar-brand" href="/">Hostel Reservation System</a><button data-bs-toggle="collapse" class="navbar-toggler" data-bs-target="#navcol-1"><span class="visually-hidden">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
              <div class="collapse navbar-collapse" id="navcol-1">                  
                  <ul class="navbar-nav">
                      {/* <li class="nav-item"><Link class="nav-link active" to={{pathname:"/updateRooms",state:props}}> Update Rooms </Link></li> */}
                      <li class="nav-item"><Link class="nav-link active" to={{pathname: "/AddRoomDetails",state:props.state}}> Add Room Details </Link></li>
                      <li class="nav-item"><Link class="nav-link active" to={{pathname: "/deleteHostel",state:props.state}}>Delete Hostel</Link></li>
                      <li class="nav-item"><Link class="nav-link active"    to={{pathname: "/requestMessages",state:props.state}}>Request Messages</Link></li>
                  </ul>
              </div>
          </div>
      </nav>
    );
  }
  
  export default NavHostelMain;