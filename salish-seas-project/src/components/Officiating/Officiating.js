import React from 'react';
import { Link } from 'react-router-dom';

import air from '../../assets/air/SC/SC_26772.jpg';
import air2 from '../../assets/air/SC/SC_26866.jpg';
import water from '../../assets/water/CR/CR518865.jpg'
import water2 from '../../assets/water/CK/CarlKrisztina18.JPG'
import waterfall from '../../assets/waterfall/NES/IMG_20230922_150941441.jpg'
import mountain from '../../assets/mountain/JH/ijphoto_fireseed_catering_whidbey_island_wedding_0415.jpg'

import './Officiating.css';

export default function Officiating() {

    return (
      <div>
        <div className='officiating-container'>
          <h2 className='officiating-title'>A wedding ceremony that celebrates your unique love story.</h2>
          <img className='officiating-img-style' src={air} alt='Ben officiating in hot air balloon'/>
          <p className='officiating-p-style mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor orci eu lobortis elementum nibh tellus molestie nunc. Enim sed faucibus turpis in. Amet aliquam id diam maecenas. Interdum velit euismod in pellentesque massa. Fermentum posuere urna nec tincidunt praesent semper feugiat nibh. Sit amet commodo nulla facilisi nullam vehicula. Ac turpis egestas maecenas pharetra convallis posuere morbi leo. Iaculis eu non diam phasellus. At consectetur lorem donec massa sapien faucibus et molestie ac.</p>
          <p className='officiating-p-style'>Nisi est sit amet facilisis magna etiam tempor orci. Hac habitasse platea dictumst quisque sagittis purus. Vitae tortor condimentum lacinia quis. Amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan. Morbi tristique senectus et netus et malesuada fames ac. Non pulvinar neque laoreet suspendisse interdum. Egestas dui id ornare arcu odio. Justo nec ultrices dui sapien eget mi proin sed libero. Est placerat in egestas erat. Semper risus in hendrerit gravida rutrum. Scelerisque fermentum dui faucibus in. Eu tincidunt tortor aliquam nulla facilisi. Facilisis mauris sit amet massa vitae tortor. Varius sit amet mattis vulputate enim nulla aliquet. Sit amet facilisis magna etiam. Nulla facilisi cras fermentum odio eu feugiat. Arcu ac tortor dignissim convallis. Semper quis lectus nulla at volutpat diam ut venenatis tellus. Nec nam aliquam sem et tortor consequat id porta. Accumsan tortor posuere ac ut consequat semper viverra nam libero.</p>
          <p className='officiating-p-style mb-4'>Diam quam nulla porttitor massa id. Sagittis id consectetur purus ut faucibus. In pellentesque massa placerat duis ultricies lacus sed turpis tincidunt. Tempus quam pellentesque nec nam aliquam sem et tortor consequat. Tellus molestie nunc non blandit. Eget sit amet tellus cras adipiscing enim eu. Sed risus pretium quam vulputate dignissim. Lobortis feugiat vivamus at augue eget arcu dictum varius. Sit amet est placerat in egestas erat imperdiet. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla. Orci ac auctor augue mauris augue neque gravida in fermentum. Quisque non tellus orci ac. Faucibus vitae aliquet nec ullamcorper sit amet. Rhoncus urna neque viverra justo nec ultrices dui sapien. Fusce id velit ut tortor pretium viverra suspendisse potenti.</p>
          <Link className='btn-style' to='/my-process'>Learn More About My Process</Link>       
          <img className='officiating-img-style' src={water} alt='Ben officiating on lake'/>
        </div>
        <hr></hr>
        <div>
          <h2 className='package-title'>Choose Your Wedding Experience</h2>
          <div className='container text-center'>
            <div className='row'>
              <Link className='col-lg-3 col-md-6 col-sm-12'to='/water'>
                <img src={water2} className='experience-img' alt='Ben officiating wedding on a boat'/>
                <h3 className='experience-tag'>Water</h3>
              </Link>
              <Link className='col-lg-3 col-md-6 col-sm-12'to='/mountain'>
                <img src={mountain} className='experience-img' alt='Ben officiating wedding with forest background'/>
                <h3 className='experience-tag'>Mountain</h3>
              </Link>
              <Link className='col-lg-3 col-md-6 col-sm-12'to='/waterfall'>
                <img src={waterfall} className='experience-img' alt='couple embracing by waterfall'/>
                <h3 className='experience-tag'>Waterfall</h3>
              </Link>
              <Link className='col-lg-3 col-md-6 col-sm-12'to='/air'>
                <img src={air2} className='experience-img' alt='Ben officiating wedding in hot air balloon'/>
                <h3 className='experience-tag'>Air</h3>
              </Link>
            </div>
          </div>
          <div className='package-details-container'>
            <h3 className='package-details-title'>The Salish Seas Wedding ceremony experience includes:</h3>
            <ul className= 'package-list'>
              <li>A customized ceremony with unlimited edits</li>
              <li>Personalized recommendations for readings and rituals</li>
              <li>In-depth questionnaire for self-reflection about your love story</li>
              <li>Wedding day guided meditation recording (if requested)</li>
              <li>Guidance on how to get your license + filing of marriage license</li>
              <li>Unlimited # of guests</li>
              <li>Hiking for 2 hours (adventure elopements only) </li>
              <li>My expertise from 6+ years of professional officiating as a Certified Life-Cycle Celebrant + a whole lotta love and creativity!</li>
            </ul>
            <p className='package-price'><strong>Investment: $XXXX</strong></p>
            <Link to='/contactme' className='btn-style package-btn'>Schedule A Consultation</Link>
          </div>
        </div>
        <hr></hr>
        <div className='link-container'>
          <Link to='/about'>Learn more about my journey and process</Link>
          <Link to='/gallery'>Check out photos of my work</Link>
          <Link to='/reviews'>Read reviews from happy clients</Link>
        </div>
      </div>
    );
  }