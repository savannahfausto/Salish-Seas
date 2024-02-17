import './Calendar.css'
import { Link } from 'react-router-dom';

function Calendar() {
    return (
        <div className='calendar-style'>
            <h2 className='officiating-title'>Calendar</h2>
            <div className="text-center mb-5">
                <div className='d-flex justify-content-center'>
                <iframe className='calendar' src="https://calendar.google.com/calendar/embed?src=0452ced4a23105d2966f83b948845abbf6b933d344e79234c52628eccb305408%40group.calendar.google.com&ctz=America%2FLos_Angeles" width="800" height="600" frameborder="0" scrolling="no" title="test"></iframe>
                </div>
            </div>
            <div className='text-center'>
            <Link to='/contactme' className='btn-style align-self-center'>Let's Get in Contact!</Link>
          </div>
        </div>
    );
  }
  
  export default Calendar;