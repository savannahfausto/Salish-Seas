import React from 'react';
import { Link } from 'react-router-dom';

import Carousel from 'react-bootstrap/Carousel';

import air from '../../assets/air/SC/SC_26757_home.jpeg';
import water from '../../assets/water/SC/SarahChris-41.JPG';
import mountain from '../../assets/mountain/JH/ijphoto_fireseed_catering_whidbey_island_wedding_0342.jpg';
import waterfall from '../../assets/waterfall/NES/IMG_20230922_131802096.jpg';
import logo from '../../assets/logo/NES_croped.jpg';
import banner from '../../assets/mountain/LN/Lyz_Nathan-31.jpg';
import me from '../../assets/mountain/TP/IMG_20230929_143007844.jpg';
import officiating from '../../assets/mountain/FT/FaithThomas-27.JPG';
import gallery from '../../assets/water/TM/TraciMichael 30.JPG';

import './Home.css';

function Home() {
  return (
    <div className='px-3'>
      <Carousel>
        <Carousel.Item>
          {/* <ExampleCarouselImage text="First slide" /> */}
          <img src={air} alt="Wedding officited in hot air balloon"  height={800} className="img-style"/>
          <Carousel.Caption>
            <h3>Air slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={water} alt="Wedding officited on lake coast"  height={800} className="img-style"/>
          <Carousel.Caption>
            <h3>Water slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={mountain} alt="Wedding officited with forest seting"  height={800} className="img-style"/>
          <Carousel.Caption>
            <h3>Mountain slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={waterfall} alt="Wedding officited by waterfall"  height={800} className="img-style"/>
          <Carousel.Caption>
            <h3>Waterfall slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div>
        <img src={logo} height={400} className='logo-style' alt='banner logo'/>
      </div>
      <div>
        <div className='banner-image-container'>
          <img src={banner} height={800} className='banner-image' alt='Ben happily officiating'/>
        </div>
        <div className='client-message-container d-flex flex-column align-items-center'>
          <h1 className='m-2 banner-title'>Washington Wedding Officiant</h1>
          <p className='client-message text-center m-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p className='signature m-2'>-Benjamin Garman, a sailor turned ordained minister with a passion for uniting love with nature</p>
        </div>
      </div>
      <hr></hr>
      <div>
        <h3 className='learn-more'>Learn More</h3>
        <div className='cards-container'>
          <Link to='/officiating'>
            <div className='card'>
                <img className='img img-style' src={officiating} alt="Ben officiating while couple laughs" />
                <h2 className='card-titles'>Officiating</h2>
            </div>
          </Link>
          <Link to='/gallery'>
            <div className='card'>
                <img className='img img-style' src={gallery} alt="Ben reviewing marriage license with couple" />
                <h2 className='card-titles'>Gallery</h2>
            </div>
          </Link>
          <Link to='/about'>
            <div className='card'>
                <img className='img img-style' src={me} alt="Ben officiating while couple laughs" />
                <h2 className='card-titles'>My Story</h2>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;