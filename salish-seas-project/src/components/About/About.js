import React from 'react';
import { Link } from 'react-router-dom';

import family from '../../assets/water/self/erin_family_photos_long_beach-362.jpg'

import './About.css';

function About() {

    return (
      <div>
        <div className='about-blurb'>
          <img className='about-img' src={family} alt='Ben with family'/>
          <div>
            <h2 className='officiating-title working-title about-title'>About Me</h2>
            <p className='working-blurb m-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et odio pellentesque diam volutpat commodo sed. Augue lacus viverra vitae congue eu consequat ac. Ut tellus elementum sagittis vitae et leo duis ut diam. Egestas sed tempus urna et pharetra pharetra massa. Lacus sed viverra tellus in hac habitasse. Orci nulla pellentesque dignissim enim sit amet venenatis. Sit amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus. Eu lobortis elementum nibh tellus. Consectetur adipiscing elit pellentesque habitant. Eleifend donec pretium vulputate sapien nec. Nec feugiat nisl pretium fusce id velit ut tortor. Ultricies mi quis hendrerit dolor magna eget. Mus mauris vitae ultricies leo integer malesuada nunc vel. Faucibus pulvinar elementum integer enim neque volutpat ac. Posuere urna nec tincidunt praesent semper feugiat nibh sed pulvinar. Leo urna molestie at elementum eu facilisis.</p>
            <p className='working-blurb m-2'>Vestibulum sed arcu non odio euismod lacinia at quis. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien. Commodo elit at imperdiet dui accumsan sit. Eros donec ac odio tempor. Tristique sollicitudin nibh sit amet commodo. Tortor at risus viverra adipiscing at in. Proin sagittis nisl rhoncus mattis rhoncus. Sed velit dignissim sodales ut. Quis lectus nulla at volutpat diam ut. Suspendisse faucibus interdum posuere lorem ipsum. Pellentesque pulvinar pellentesque habitant morbi tristique senectus. Ut pharetra sit amet aliquam id diam maecenas ultricies mi. Imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis. Quis imperdiet massa tincidunt nunc pulvinar sapien et. Eget est lorem ipsum dolor sit amet consectetur adipiscing. Enim nunc faucibus a pellentesque sit amet porttitor.</p>
            <p className='working-blurb m-2'>Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus. Nec tincidunt praesent semper feugiat nibh sed. Amet est placerat in egestas erat imperdiet sed euismod. Quis vel eros donec ac odio tempor. Ac turpis egestas sed tempus urna. Nisl nunc mi ipsum faucibus vitae aliquet. Mauris in aliquam sem fringilla ut morbi tincidunt augue interdum. Malesuada proin libero nunc consequat interdum varius sit. Viverra accumsan in nisl nisi scelerisque eu ultrices vitae auctor. Sed enim ut sem viverra. Ultrices vitae auctor eu augue ut lectus arcu. Dignissim suspendisse in est ante in nibh mauris.</p>
            <p className='working-blurb m-2'>Sem integer vitae justo eget magna fermentum iaculis. Arcu odio ut sem nulla. Ullamcorper sit amet risus nullam. Sem integer vitae justo eget magna fermentum iaculis eu non. Scelerisque eu ultrices vitae auctor eu augue ut lectus. Enim diam vulputate ut pharetra sit amet aliquam id diam. </p>
          </div>
        </div>
        <hr></hr>
        <div className='m-5 d-flex justify-content-center'>
          <Link className='btn-style' to='/contactme'>Let's Talk!</Link>
        </div>
        <div className='link-container'>
          <Link to='/officiating'>I would love to be apart of your Wedding day</Link>
          <Link to='/gallery'>Check out photos of my work</Link>
          <Link to='/reviews'>Read reviews from happy clients</Link>
        </div>
      </div>
    );
  }
  
  export default About;