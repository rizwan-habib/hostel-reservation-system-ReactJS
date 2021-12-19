import Card from "./card";
import UserProfile from "./userProfile";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import { useLocation } from "react-router-dom";
import "./css/Growing-Search-Bar-Animated-Text-Input.css";
import "./fonts/fa-brands-400.eot";
import "./fonts/fa-brands-400.svg";
import "./fonts/fa-brands-400.ttf";
import "./fonts/fa-brands-400.woff";
import "./fonts/fa-regular-400.svg";
import "./fonts/fa-solid-900.svg";
import "./fonts/fontawesome-all.min.css"


function SearchAndResultPage() {
  const location = useLocation();
  const history = useHistory();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [filteredNames, setFilterNames] = useState([]);
  const [username, setusername] = useState("");

  function updateSearch(e) {
    setSearchTerm(e.target.value);
    //console.log(searchTerm);
  }

  useEffect(() => {
    const user = {
      hostelName: searchTerm
    };

    let result = false;

     
    axios
      .post(`http://localhost:8001/searchHostel`, user)
      .then((res) => {
        result = res.data;

        setSearchResults(res.data);
      })
      .catch((err) => {
        // Do something for an error here
        console.log("Error Reading data " + err);
      });
  }, [searchTerm]);
  
//   useEffect(() => {
//     // Run! Like go get some data from an API.
//     setusername(location.state.data.username);
//   }, []);
  useEffect(() => {
    const hostelnames = searchResults.map((val) => {
      if (!searchTerm || searchTerm.length === 0 || searchTerm === "") {
        return {
          hostelName: val.hostelName,
          login: val.login,
          address: val.address,
          hostelID: val.hostelID,
          rooms: val.rooms,
        };
      } else if (
        val.hostelName.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return {
          hostelName: val.hostelName,
          login: val.login,
          address: val.address,
          hostelID: val.hostelID,
          rooms: val.rooms,
        };
      }
      return null;
    });

    setFilterNames(hostelnames);
    // setusername()
  }, [searchTerm]);

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            Home
          </a>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          {/* <div class="collapse navbar-collapse" id="navbarSupportedContent">   

                    <form class="d-flex" >
                        <input class="form-control me-2" type="search" onChange={updateSearch} value={searchTerm}  placeholder="Search" aria-label="Search"/>
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>         
          </div> */}
        </div>
      </nav>
      
      <div
      class="bg-image p-5 text-center shadow-1-strong rounded mb-5 text-white"
      style={{backgroundImage:`url('https://mdbcdn.b-cdn.net/img/new/slides/003.jpg')` }}>
      
        <h1 class="mb-3 h2">Search the best hostel in town</h1>
                
        <div class="d-flex justify-content-center h-100">
          <div class="searchbar">
            <input
              class="search_input"
              type="search"
              onChange={updateSearch}
              value={searchTerm}
              placeholder="Search..."
            />
            <a class="search_icon" href="">
              <i class="fas fa-search"></i>
            </a>
          </div>
        </div>

        <p>
        What are you waiting for?   
        Search the best hostels in town,based on their ratings and customer's experience.<br/>
        36,000 properties, 178 countries • Over 13 million verified guest reviews • 24/7 customer service
        </p>          


      </div>                  

      

      <div class="container">
        <div class="row">
          {filteredNames.map(
            (val, index) =>
              !val || (
                <Card
                  hostelName={val.hostelName}
                  login={val.login}
                  username1={location.state.data.username}
                  address={val.address}
                  id={val.hostelID}
                  rooms={val.rooms}
                />
              )
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchAndResultPage;
