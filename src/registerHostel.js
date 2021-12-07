import Nav from "./Navbar"
function RegisterHostelPage() {
  return (
    <div>
    <Nav/>
    
    <h1>Register Hostel</h1><br/>
    <form class="row g-3">
        <h3>Hostel Owner Details</h3>
        <div class="col-md-4">
            <label for="validationDefaultUsername" class="form-label">User Name</label>
            <div class="input-group">
            <span class="input-group-text" id="inputGroupPrepend2">@</span>
            <input type="text" class="form-control" id="validationDefaultUsername"  aria-describedby="inputGroupPrepend2" required/>
            </div>
        </div>
        <div class="col-md-4">
            <label for="validationDefault01" class="form-label">Email</label>
            <input type="email" class="form-control" id="validationDefault01" value="Mark" required/>
        </div>
        <div class="col-md-4">
            <label for="validationDefault03" class="form-label">Phone Number</label>
            <input type="tel" class="form-control" id="validationDefault03" required/>
        </div>
        <h3>Hostel Details</h3>
        <div class="col-md-4">
            <label for="validationDefault03" class="form-label">Hostel Address</label>
            <input type="text" class="form-control" id="validationDefault03" required/>
        </div>
        <div class="col-md-4">
            <label for="validationDefault03" class="form-label">Total Rooms</label>
            <input type="number" class="form-control" id="validationDefault03" required/>
        </div>
        <div class="col-md-4">
            <label for="validationDefault03" class="form-label">Total Beds</label>
            <input type="number" class="form-control" id="validationDefault03" required/>
        </div>
        <div class="col-12">
            <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required/>
            <label class="form-check-label" for="invalidCheck2">
                Agree to terms and conditions
            </label>
            </div>
        </div>
        <div class="col-12">
            <button class="btn btn-primary" type="submit">Submit form</button>
        </div>
    </form>
    </div>
  );
}

export default RegisterHostelPage;