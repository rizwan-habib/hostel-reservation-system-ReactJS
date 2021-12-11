import { useHistory } from "react-router";

function Card() {
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
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a onClick={handleSubmit} class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        
    );
  }
  
  export default Card;