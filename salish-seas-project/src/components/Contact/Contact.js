import ContactForm from './ContactForm';
import { Link } from 'react-router-dom';
import ContactImg from '../../assets/water/self/Seattle-Family-Photographer-4.jpg'
import './Contact.css'

function Contact() {
    return (
      <div className="contact-page-container d-flex">
        <div className='contact-left mr-5'>
          <div className='contact-message mb-5'>
            <h2 className='officiating-title contact-title-left'>Contact Ben</h2>
            <p className='my-4 contact-blurb'>I would love to design a ceremony that meets your needs. Let's talk!</p>
            <p className='my-4 contact-blurb'>I offer a free 30-minute consultation to discuss what you're looking for in a ceremony. I look forward to hearing your story and honoring your journey through life. I am a proud LGBTQI+ ally vendor committed to serving all couples and people with dignity and respect.</p>
          </div>
          <div className='text-center my-4 pb-5'>
            <Link to='/calendar' className='btn-style align-self-center'>Check My Availability!</Link>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
        <div className='contact-right'>
          <div>
            <img className='contact-img-style'src={ContactImg} alt="Ben with family"/>
          </div>
          <div className='text-uppercase mt-4 contact-signoff'>
            <p>Benjamin Garman (He/Him)</p>
            <p>ben@naturelopements.com</p>
            <p>Based in Washington</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default Contact;