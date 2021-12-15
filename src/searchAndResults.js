import Card from "./card";
import UserProfile from './userProfile';
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router";

function SearchAndResultPage() {

    const history = useHistory();
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [filteredNames, setFilterNames] = useState([]);
    

    function updateSearch(e)
    {
    setSearchTerm(e.target.value);
    //console.log(searchTerm);
    }


    useEffect(() => {
        
       
        const user = {
            "hostelName":searchTerm,
        };

        let result =  false;

        axios.post(`http://localhost:8008/login`,user)
        .then(res => {      
        result =res.data;
       
        setSearchResults(res.data);
        
        }
        )
        .catch(err => {
        // Do something for an error here
        console.log("Error Reading data " + err);
        });

      }, [searchTerm]);



      useEffect(() => {
        
      const hostelnames = searchResults.map((val) => {

                if(!searchTerm || searchTerm.length === 0|| searchTerm=== "" )
                {
                    
                    return { hostelName : val.hostelName, address : val.address, hostelID: val.hostelID, rooms:val.rooms };
                    
                }
                else if(val.hostelName.toLowerCase().includes(searchTerm.toLowerCase()))
                {
                    return { hostelName : val.hostelName, address : val.address,hostelID: val.hostelID , rooms:val.rooms  };
                }
                return null;
            }  
         
        )    
        
        setFilterNames(hostelnames);
         
        
      }, [searchTerm]);
  

    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                <a class="navbar-brand" href="/">Home</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                 </button>
                
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    
                    <form class="d-flex" >
                    <input class="form-control me-2" type="search" onChange={updateSearch} value={searchTerm}  placeholder="Search" aria-label="Search"/>
                    <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
                </div>
            </nav>

            <div class="container">
                <div class="row">
                
                {    
                       filteredNames.map((val,index) => (
                            !val || <Card title= {val.hostelName} address={val.address} id ={val.hostelID} rooms= {val.rooms}  />
                       )) 
                }  
                    
                </div>    
            </div>
        </div>
    );
  }
  
  export default SearchAndResultPage;