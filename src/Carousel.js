function Carousel() {
  return (
    <div class="carousel slide" data-bs-ride="carousel" id="carousel-1">
        <div class="carousel-inner">
            <div class="carousel-item active"><img class="w-100 d-block" src="https://vistapointe.net/images/hostel-7.jpg" alt="Slide Image"/>
              <div class="carousel-caption d-none d-md-block">
                <h2>First slide label</h2>
                <h6>Some representative placeholder content for the first slide.</h6>
              </div>
            </div>
            <div class="carousel-item"><img class="w-100 d-block" src="https://vistapointe.net/images/hostel-7.jpg" alt="Slide Image"/>
              <div class="carousel-caption d-none d-md-block">
                <h2>First slide label</h2>
                <h6>Some representative placeholder content for the first slide.</h6>
              </div>
            </div>
            <div class="carousel-item"><img class="w-100 d-block" src="https://vistapointe.net/images/hostel-7.jpg" alt="Slide Image"/>
              <div class="carousel-caption d-none d-md-block">
                <h2>First slide label</h2>
                <h6>Some representative placeholder content for the first slide.</h6>
              </div>
            </div>
        </div>
        <div><a class="carousel-control-prev" href="#carousel-1" role="button" data-bs-slide="prev"><span class="carousel-control-prev-icon"></span><span class="visually-hidden">Previous</span></a><a class="carousel-control-next" href="#carousel-1" role="button" data-bs-slide="next"><span class="carousel-control-next-icon"></span><span class="visually-hidden">Next</span></a></div>
        <ol class="carousel-indicators">
            <li data-bs-target="#carousel-1" data-bs-slide-to="0" class="active"></li>
            <li data-bs-target="#carousel-1" data-bs-slide-to="1"></li>
            <li data-bs-target="#carousel-1" data-bs-slide-to="2"></li>
        </ol>
    </div>
   
  );
}

export default Carousel;