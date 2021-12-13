import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import WelcomePage from './welcome';
import LoginPage from './login';
import SetupProfilePage from './setupProfile';
import RegisterHostelPage from './registerHostel';
import SearchAndResultPage from "./searchAndResults";
import RoomsAndBeds from './roomsAndBeds';
import UpdateRooms from './updateRooms';
import AddRoomDetails from './AddRoomDetails';
import DelHostel from './deleteHostel';
import HostelMain from './hostelMain';
import RequestMessages from './requestMessages';


function App() {



  return (
    <div>
      <Router>
        <Switch>
          <Route path="/login">
            <LoginPage/>
          </Route>
          <Route path="/setupProfile">
            <SetupProfilePage/>
          </Route>
          <Route path="/registerHostel">
            <RegisterHostelPage/>
          </Route>
          <Route path="/SearchAndResults">
            <SearchAndResultPage/>
          </Route> 
          <Route path="/roomsAndBeds">
            <RoomsAndBeds/>
          </Route>
          <Route path= "/updateRooms">
            <UpdateRooms/>
          </Route> 
          <Route path= "/AddRoomDetails">
            <AddRoomDetails/>
          </Route>
          <Route path= "/deleteHostel">
            <DelHostel/>
          </Route>
          <Route path= "/requestMessages">
            <RequestMessages/>
          </Route>
          <Route path= "/hostelMain">
            <HostelMain/>
          </Route>  
          <Route path="/">
            <WelcomePage/>
          </Route> 
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
