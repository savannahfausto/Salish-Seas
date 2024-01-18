import React from 'react';
import { Link } from 'react-router-dom';

import './Process.css'

function Process() {
    return (
      <div>
        <div className='m-3'>
          <h2 className='text-center officiating-title working-title'>Working With Me</h2>
          <p className='working-blurb m-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt ornare massa eget egestas purus viverra. In tellus integer feugiat scelerisque varius. Ut faucibus pulvinar elementum integer enim neque volutpat ac. Ac ut consequat semper viverra nam libero justo laoreet. Vel risus commodo viverra maecenas accumsan. Lorem ipsum dolor sit amet consectetur adipiscing. Maecenas pharetra convallis posuere morbi leo urna molestie at. A lacus vestibulum sed arcu non odio euismod lacinia. Quis viverra nibh cras pulvinar mattis nunc sed blandit libero. Felis bibendum ut tristique et. Ridiculus mus mauris vitae ultricies. Orci a scelerisque purus semper eget duis at. Suscipit adipiscing bibendum est ultricies integer quis auctor.</p>
        </div>
        <div className='m-4 d-flex flex-column'>
          <h3 className='package-details-title details-title'>Here's how the magic happens:</h3>
          <ul className='package-list working-blurb'>
            <li>I offer a complimentary 30-minute Zoom consultation so that we can learn more about each other, your wishes for your ceremony, and determine if we’ll be a good fit. If we’re not, I’ll provide you with recommendations for officiants who can best meet your needs. </li>
            <li>Once you’re officially my clients (WOOHOO!), you’ll each get the chance to reflect on your relationship journey and what this transition means to you, through in-depth questionnaires. Your responses also help guide the personalization of your ceremony. <span>Many of my clients say this is one of the most meaningful parts of the process!</span></li>
            <li>Prior to me writing your ceremony first draft, we will meet via Zoom to chat about your questionnaire responses and ceremony preferences in more detail. <span>This is where many of my clients say it starts to finally feel real. They can envision the ceremony, they can see themselves standing at the altar in a few short months, and it’s all so exciting!</span></li>
            <li>One to two months in advance, I will write your fully customized ceremony celebrating your unique love story. During this time, you can offer unlimited feedback, as needed, and I will make all the necessary revisions so that your ceremony is exactly what you want it to be. You have full editing control of the ceremony. <span>No templates, no surprises, no awkward jokes (unless you want ‘em). This is your unique ceremony.</span></li>
            <li>I will provide a run-of-show ceremony schedule for your other vendors (DJ, planner, photographer, videographer) so that everyone knows the ceremony flow in order to best capture those sacred moments. <span>Planners and DJ’s really appreciate this!</span></li>
            <li>If needed, we will check in one more time via Zoom (in lieu of my attendance at the rehearsal) in the week prior to the ceremony.</li>
            <li>On your wedding day, I will arrive 1 hour before your ceremony to do a sound check, complete legal paperwork, and make sure all supplies and people involved in the ceremony are briefed and ready to go. I’ll also check in with both of you to provide hugs, encouragement, and grounded energy before the ceremony begins. </li>
            <li>After signing the marriage license, I will mail it for you with tracking so that you can focus on enjoying married life! I will also send you a follow-up email with directions on how to order certified copies of your marriage license. </li>
            <li>As a gift to all of my clients, you also receive a beautiful keepsake copy of your ceremony. This custom package can be used to hold your commemorative marriage license and your vow books so that you can revisit your wedding mementos in the years ahead. Many couples find that a tradition of reading through their ceremony and their vows on their anniversary is a powerful reminder of the commitments they made to each other on their special day.</li>
          </ul>
          <p className='working-blurb'>All in all, I will spend 20 hours researching, writing, and delivering your unique ceremony. For this in-depth client experience, it is recommended that we begin working together at least 3 months before your wedding date, though I can accommodate shorter timelines if my schedule allows. </p>
          <Link to='/contact' className='btn-style align-self-center'>Let's Get Started!</Link>
        </div>
      </div>
    );
  }
  
  export default Process;