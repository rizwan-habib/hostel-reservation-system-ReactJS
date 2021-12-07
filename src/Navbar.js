function Nav() {
  return (
    <nav class="navbar navbar-light navbar-expand-md">
        <div class="container-fluid"><a class="navbar-brand" href="/">Hostel Reservation System</a><button data-bs-toggle="collapse" class="navbar-toggler" data-bs-target="#navcol-1"><span class="visually-hidden">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navcol-1">
                <ul class="navbar-nav">
                    <li class="nav-item"><a class="nav-link active" href="/login">Login</a></li>
                    <li class="nav-item"><a class="nav-link active" href="/setupProfile">Setup Profile</a></li>
                    <li class="nav-item"><a class="nav-link active" href="/registerHostel">Register Hostel</a></li>
                </ul>
            </div>
        </div>
    </nav>
  );
}

export default Nav;
