import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import WelcomePage from './welcome';
import LoginPage from './login';
import SetupProfilePage from './setupProfile';
import RegisterHostelPage from './registerHostel';
import SearchAndResultPage from "./searchAndResults";
import RoomsAndBeds from './roomsAndBeds';
import UpRoomsOrDelHostel from './upRoomsAndDelHostel';


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
          <Route path= "/updateRoomsOrDeleteHostel">
            <UpRoomsOrDelHostel/>
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
