import Card from "./card";
import NavSearchBar from "./NavSearchBar";
import UserProfile from './userProfile';
function SearchAndResultPage() {

   let name = UserProfile.getName();
   console.log(name);
    
   const hostelTitleAndAddress = {
       "name": ["raza","awan","farook","jawan","asdasd"],
       "location": ["G9isb","F7isb","F6isb","G11isb"]
   }
    

   const hostel ={
        "hostels": [
            {
                name: "rizwan hostel",
                address: "G11 isb"
            },
            {
                name: "faroq hostel",
                address: "F7 isb"
            }
            ,
            {
                name: "amjad hostel",
                address: "G9 isb"

            },
            {
                name: "rehan hostel",
                address: "G8 isb"

            }
        ]
   }

  
  

    return (
        <div>
            <NavSearchBar/>
            <div class="container">
                <div class="row">
                    {
                        Object.values(hostel.hostels).map((val) => (
                            <Card title={val.name} address={val.address} /> 
                        ))   
                    }
                </div>    
            </div>
        </div>
    );
  }
  
  export default SearchAndResultPage;