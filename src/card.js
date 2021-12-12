import { useHistory } from "react-router";

function Card(props) {
    const history = useHistory();

    function handleSubmit(e) {
    e.preventDefault();
    history.push('/RoomsAndBeds');
    }

    return (
       
            <div class="col">
                <div class="card" style={{width: "18rem"}}>
                    <img src="https://vistapointe.net/images/hostel-7.jpg" class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">{props.title}</h5>
                        <p class="card-text">{props.address}</p>
                        <a onClick={handleSubmit} class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        
    );
  }
  
  export default Card;