function NavHostelMain() {
    return (
      <nav class="navbar navbar-light navbar-expand-md">
          <div class="container-fluid"><a class="navbar-brand" href="/">Hostel Reservation System</a><button data-bs-toggle="collapse" class="navbar-toggler" data-bs-target="#navcol-1"><span class="visually-hidden">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
              <div class="collapse navbar-collapse" id="navcol-1">
                  <ul class="navbar-nav">
                      <li class="nav-item"><a class="nav-link active" href="/updateRooms"> Update Rooms </a></li>
                      <li class="nav-item"><a class="nav-link active" href="/AddRoomDetails"> Add Room Details </a></li>
                      <li class="nav-item"><a class="nav-link active" href="/deleteHostel">Delete Hostel</a></li>
                      <li class="nav-item"><a class="nav-link active" href="/requestMessages">Request Messages</a></li>
                  </ul>
              </div>
          </div>
      </nav>
    );
  }
  
  export default NavHostelMain;