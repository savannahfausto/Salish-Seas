import './Calendar.css'
import { Link } from 'react-router-dom';

function Calendar() {
    return (
        <div className='calendar-style'>
            <h2 className='officiating-title'>Calendar</h2>
            <div className="text-center mb-5">
                <div className='d-flex justify-content-center'>
                <iframe className='calendar' src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FLos_Angeles&bgcolor=%23ffffff&showTitle=0&showPrint=0&src=c2F2YW5uYWhmYXVzdG9AZ21haWwuY29t&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23F6BF26&color=%234285F4" width="800" height="600" frameborder="0" scrolling="no" title="test"></iframe>
                </div>
            </div>
            <div className='text-center'>
            <Link to='/contactme' className='btn-style align-self-center'>Let's Get in Contact!</Link>
          </div>
        </div>
    );
  }
  
  export default Calendar;