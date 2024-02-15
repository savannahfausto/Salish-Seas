import { useState } from 'react';
import './ContactForm.css';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';


function ContactForm() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const SERVICE_ID = "service_0qll2rd";
  const TEMPLATE_ID = "template_2z5c2l8";
  const PUBLIC_KEY = "****************"; 

  const handleSubmit = (event) => {
    event.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, event.target, PUBLIC_KEY)
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          icon: 'success',
          title: 'Excited To Tell Your Story'
        })
      }, (error) => {
        console.log(error.text);
        Swal.fire({
          icon: 'error',
          title: 'Ooops, something went wrong',
          text: error.text,
        })
      });
    setInputs('');
  }

  return (
    <form onSubmit={handleSubmit}>
        <fieldset className='my-3'>
            <legend className='contact-title d-flex'>Name<span className='required'>(required)</span></legend>
            <div className='d-flex flex-row justify-space-between'>
                <div className='d-flex flex-column name-width'>
                    <label className='name-style' for='firstname'>First Name 
                    </label>
                    <input 
                        type="text" 
                        name="firstname" 
                        id='firstname'
                        className='input-style'
                        value={inputs.firstname || ""} 
                        required
                        onChange={handleChange}
                    />
                </div>
                <div className='d-flex flex-column name-width'>
                    <label className='name-style' for='lastname'>Last Name
                    </label>
                    <input 
                        type="text" 
                        name="lastname" 
                        id='lastname'
                        className='input-style'
                        required
                        value={inputs.lastname || ""} 
                        onChange={handleChange}
                    />
                </div>
            </div>
        </fieldset>
        <div className='my-3'>
            <label className='contact-title d-flex' for='email'>Email Address<span className='required'>(required)</span>
            </label>
            <input type="email" 
                    name="email" 
                    id='email'
                    className='w-100 input-style'
                    required
                    value={inputs.email || ""} 
                    onChange={handleChange}
            />
        </div>
        <div className='d-flex flex-column my-3'>
            <label for='ceremonydate'>Ceremony Date
            </label>
            <input type="date" 
                    name="ceremonydate" 
                    id='ceremonydate'
                    className='w-25 input-style'
                    value={inputs.ceremonydate || ""} 
                    onChange={handleChange}
            />
        </div>
        <div className='d-flex flex-column my-3'>
            <label for='ceremonylocation'>Location of Ceremony
            </label>
            <input type="text" 
                    name="ceremonylocation"
                    id='ceremonylocation' 
                    className='w-100 input-style'
                    value={inputs.ceremonylocation || ""} 
                    onChange={handleChange}
            />
        </div>
        <div className='d-flex flex-column my-3'>
            <label className='contact-title d-flex' for='guestnumber'># of Guests<span className='required'>(required)</span>
            </label>
            <span className='required my-1'>A best guess is great!</span>
            <input type="text" 
                    name="guestnumber" 
                    id='guestnumber'
                    className='w-100 input-style'
                    required
                    value={inputs.guestnumber || ""} 
                    onChange={handleChange}
            />
        </div>
        <div className='my-3'>
            <label className='contact-title d-flex flex-column' for='importance'>On a scale of 1 (less) to 10 (very), how important is the ceremony to you on your wedding day?<span className='required'>(required)</span>
            </label>
            <input type="text" 
                    name="importance" 
                    id='importance'
                    className='w-100 input-style'
                    value={inputs.importance || ""} 
                    onChange={handleChange}
            />
        </div>
        <div className='my-3'>
            <label className='contact-title d-flex' for='message'>Message<span className='required'>(required)</span>
            </label>
            <input type="text" 
                    name="message" 
                    id= 'message'
                    className='w-100 input-style message-style'
                    required
                    value={inputs.message || ""} 
                    onChange={handleChange}
            />
        </div>
        <div className='my-3 center-btn'>
            <input type="submit" className='btn-style submit-btn' />
        </div>
    </form>
  )
}

export default ContactForm;