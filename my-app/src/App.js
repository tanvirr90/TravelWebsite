import React from 'react';
import './App.css';
import axios from 'axios';


function App() {
  const [name, setName] = React.useState("");
  const [ home, setHome ]useEffect(() => {
axtos.get("http:// localhostsetHome(response.data)
})
}, [])
  async function postName(e) {
  e.preventDefault()
  try {
  await axios.post("http://localhost:3000/post_name",{
  name
})
  catch (error) {
  }

  return (
  <div>
  {home}
  <header>

      <div id="menu-bar" class="fas fa-bars"></div>

      <a href="#" class="logo"><span>T</span>ravel</a>

      <nav class="navbar">
          <a class="things">Things to do</a>
      </nav>

      <div class="icons">
          <i class="fas fa-search" id="search-btn"></i>
          <i class="fas fa-user" id="login-btn"></i>
      </div>

      <form action="" class="search-bar-container">
          <input type="search" id="search-bar" placeholder="search here..."></input>
          <label for="search-bar" class="fas fa-search"></label>
      </form>

  </header>


  <section class="packages" id="packages">
  <div class="box-container">
  <div class="box">
      <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/97/54/a5/r65-memories-at-time.jpg?w=1000&h=-1&s=1" alt=""></img>
      <div class="content">
          <h3> <i class="fas fa-map-marker-alt"></i> Singapore Flyer </h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, nam!</p>
          <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="far fa-star"></i>
          </div>
          <div class="price"> $90.00 <span>$120.00</span> </div>
          <a href="#" class="btn">Book now</a>
      </div>
  </div>
  <div class="box">
      <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/d7/53/1f/caption.jpg?w=1000&h=800&s=1" alt=""></img>
      <div class="content">
          <h3> <i class="fas fa-map-marker-alt"></i>Marina Bay </h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, nam!</p>
          <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="far fa-star"></i>
          </div>
          <div class="price"> $90.00 <span>$120.00</span> </div>
          <a href="#" class="btn">Book now</a>
      </div>
  </div>

  <div class="box">
      <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/4d/a7/97/photo2jpg.jpg?w=1000&h=800&s=1" alt=""></img>
      <div class="content">
          <h3> <i class="fas fa-map-marker-alt"></i> Merlion Park </h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, nam!</p>
          <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="far fa-star"></i>
          </div>
          <div class="price"> $90.00 <span>$120.00</span> </div>
          <a href="#" class="btn">Book now</a>
      </div>
  </div>

  <div class="box">
      <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/15/64/20/photo0jpg.jpg?w=1000&h=-1&s=1" alt=""></img>
      <div class="content">
          <h3> <i class="fas fa-map-marker-alt"></i> Clarke Quay </h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, nam!</p>
          <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="far fa-star"></i>
          </div>
          <div class="price"> $90.00 <span>$120.00</span> </div>
          <a href="#" class="btn">Book now</a>
      </div>
  </div>

  <div class="box">
      <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/0b/76/4c/mal-singapore11-059-largejpg.jpg?w=1000&h=-1&s=1" alt=""></img>
      <div class="content">
          <h3> <i class="fas fa-map-marker-alt"></i> Jurong Bird Park </h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, nam!</p>
          <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="far fa-star"></i>
          </div>
          <div class="price"> $90.00 <span>$120.00</span> </div>
          <a href="#" class="btn">Book now</a>
      </div>
  </div>

  <div class="box">
      <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/45/9d/0f/national-museum-of-singapore.jpg?w=1000&h=800&s=1" alt=""></img>
      <div class="content">
          <h3> <i class="fas fa-map-marker-alt"></i> National Museum of Singapore </h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, nam!</p>
          <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="far fa-star"></i>
          </div>
          <div class="price"> $90.00 <span>$120.00</span> </div>
          <a href="#" class="btn">Book now</a>
      </div>
  </div>
</div>
</section>
  </div>
  );
}

export default App;
