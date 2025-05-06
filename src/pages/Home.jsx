import React from 'react'
import '../assets/css/Home.css'

function Home() {
  return (
    <div>
        <div className="row1 flex justify-center  my-10">
          <div className="content">
              <h1>Dive into endless stories. <span className='text-fuchsia-600'> Explore now!</span></h1>
              <p>Expand your horizons through the power of literature.</p>
              <button id='btnStart'>Start Now</button>
          </div>
          <div className="image">
            <img src="src\assets\photo\Image.png" alt="loading" style={{maxWidth:"400px",maxHeight:"400px"}}/>
            <div className="circle1"></div>
            <div className="circle2"></div>
          </div>
        </div>
    </div>
  )
}

export default Home
