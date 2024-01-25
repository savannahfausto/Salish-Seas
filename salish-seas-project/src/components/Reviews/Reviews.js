import peace from '../../assets/air/SC/SC_16535.jpg';
import thumbsup from '../../assets/mountain/JH/ijphoto_fireseed_catering_whidbey_island_wedding_0449.jpg';

import './Reviews.css';

function Reviews() {
    return (
      <div>
        <h2 className='officiating-title working-title review-title mb-5'>Kind Words</h2>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 single-review'>
              <p className='review'>"We had an awesome experience eloping and Ben was such a huge part of that. He got to know us and curated an experience authentic to us. He was so helpful with offering ideas and suggestions we hadn't thought of that made our experience even more special. We can't thank or recommend him enough!"</p>
              <p className='review-signoff'>- Sam</p>
            </div>
            <div className='col-md-6 single-review'>
              <p className='review'>"Very professional, dealt with inclement weather situation and troublesome family members with no problems. Helped me and my wife plan, set and complete our wedding, also helped me write vows. Wrote custom speech about me and my wife that was very dear and near to my heart. One of the friendliest and easy to work with people I've ever met in my life. You would do well to work with Ben."</p>
              <p className='review-signoff'>- Gareth</p>
            </div>
            <div className='col-md-6 single-review'>
              <p className='review'>"Ben made our ceremony so special. We really felt like he put in the extra time to make it one of a kind. Would happily recommend him to any of our friends."</p>
              <p className='review-signoff'>- Julia</p>
            </div>
            <div className='col-md-6 single-review'>
              <p className='review'>"We wanted to keep it simple and we did but Ben made it absolutely amazing. He shares ideas from other couples and also takes your ideas to future couples. It was a great option for a last minute elopement and his play list was perfect!"</p>
              <p className='review-signoff'>- Tina </p>
            </div>
          </div>
          <div className='img-review-container'>
            <div className='single-review'>
              <p className='review'>"Nature elopement services exceeded our expectations in every way possible! Ben, the officiant, is truly remarkable. Our early morning hot air balloon wedding became an unforgettable experience, thanks to his incredible skills and creativity. The way he utilized the stunning aerial views to incorporate a meaningful blessing was awe-inspiring. Ben's dedication to understanding our story and crafting a personalized ceremony made the event even more special. Moreover, his resourcefulness saved the day when I forgot our rings at home. He reassured us that the sentiment behind the rings mattered more than their material value. putting our minds at ease. His punctuality, excellent communication, and charismatic personality made the whole process smooth and enjoyable. Even though Ben is a sailor by profession, his enthusiasm for aeronautical adventure truly showed during the ceremony. Hiring him as our officiant was the best decision we made, and we are overjoyed with the results. We wholeheartedly recommend Ben to anyone seeking a memorable and extraordinary wedding experience."</p>
              <p className='review-signoff'>- Ajit, A hot air balloon wedding</p>
            </div>
            <img className='review-img m-3 peace-img' src={peace} alt='Ben and couple happy with peace and rock on signs' />
          </div>
          <div className='column-review d-flex flex-column'>
            <div className='single-review'>
              <p className='review'>"Ben was amazing! Super friendly, considerate, flexible, funny, and understanding! My wife (thanks to Ben's help) and I, found him only a month before we got eloped. He was one of our top choices for an officiant and I am so happy we decided to have him marry us! He gave us the most beautiful ceremony we could have asked for, especially on such a quick notice. The words he said to talk about my wife and I really resonated with who we are and our beliefs. As two queer women of color we approve. 10/10 would recommend 100%."</p>
              <p className='review-signoff'>- Alma</p>
            </div>
            <div className='single-review'>
              <p className='review'>"Best. Officiant. Ever! We laughed, we cried, we got everything we dreamed of and more! It was the best day of our lives. Ben was the perfect balance of levity and charm with heartfelt sincerity and ernestness that made our vows feel sacred and completely personal. While I may be slightly biased, our guests could not stop raving about how wonderful Ben was too. He walked us through the entire process from start to finish and made sure he knew EXACTLY  what we wanted (and what we didn't want!). I knew what I wanted my ceremony to be like and Ben brought my vision to life. My husband and I could not have been more thrilled with the entire experience. With all of the stress of wedding planning, it was so wonderful to have someone so dedicated to making sure my husband and I had the wedding we wanted. He even helped me figure out the legal part! Such a legend. Thank you times a million Ben!"</p>
              <p className='review-signoff'>- Babs</p>
            </div>
          </div>
          <div className='img-review-container'>
            <img className='review-img m-3 thumbsup-img' src={thumbsup} alt='Ben and couple happy with thumbs up' /> 
            <div className='single-review'>
              <p className='review'>"I want to express my heartfelt gratitude to Ben for officiating our wedding and creating a truly unforgettable experience. From the moment we reached out to him, he showed us immense kindness and was willing to accommodate our tight timeline.</p>
              <p className='review'>Ben's thoughtfulness and attention to detail were evident in every aspect of our wedding. He personalized the ceremony to reflect our personalities, making it romantic, and filled with joy. I deeply admire Ben's philosophy which emphasizes our connection to nature. This wedding solidified our commitment to bond ourselves to this planet. I want to extend a special thank you to Ben for the wedding gift he prepared for us. This meaningful tree now resides in our backyard, serving as a beautiful symbol and witness to our wedding. We will cherish it and take care of it as a reminder of this special day. I highly recommend Ben to all couples seeking an officiant who not only creates an exceptional wedding experience but also maintains a sense of harmony with nature. His professionalism, creativity, and genuine care for his clients truly set him apart. Thank you, Ben, for making our wedding day truly magical!"</p>
              <p className='review-signoff'>- Chaoming</p>
            </div>
          </div>
          <div className='column-review'>
            <div className='single-review'>
              <p className='review'>"Despite the tight timeline, our officiant, Ben, showed great kindness and was willing to accommodate our needs. Ben demonstrated thoughtfulness in creating a personalized ceremony that was both intimate and enjoyable. With his guidance, we were able to incorporate fun and interesting elements that we wouldn't have thought of ourselves. Right, the coin ceremony is one of them. The beautiful setting of Gig Harbor added an unforgettable touch to our special day. We are grateful to Ben for making our wedding a memorable and cherished experience. Thank you, Ben, for making our wedding day truly special. We wholeheartedly recommend him to couples looking for a dedicated and talented wedding officiant." </p>
              <p className='review-signoff'>- Quiyang</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Reviews;