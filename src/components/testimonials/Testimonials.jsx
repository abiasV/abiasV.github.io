import "./testimonials.css";
import AVTR1 from "../../assets/Sarah.jpg";
import AVTR2 from "../../assets/Bernie.jpg";
import AVTR3 from "../../assets/Vahid.jpg";
import AVTR4 from "../../assets/Yancan.jpg";

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR1,
    name: "Sarah Tadele",
    review:"Working with Seyed Abbas Vaziri was great. He was really good at using React and Node.js, and he always helped our team finish projects successfully. Abbas was quick to learn new things and worked well with everyone. He always made sure our projects were top quality. I highly recommend him.",
  },
  {
    avatar: AVTR2,
    name: "Bernie Monette",
    review:
      "Seyed Abbas Vaziri was one of the best students in my Web Development program. He worked really hard on his projects and was always eager to learn more. His final project, CodeLance, was impressive. Abbas is passionate about coding and always strives to improve. He's a great fit for any software development job",
  },
  {
    avatar: AVTR3,
    name: "Vahid Aghakhani",
    review:
      "Abbas played a big role in improving our company website. He made it faster and easier to use. Abbas was very detail-oriented and made sure everything was done well and on time. His skills and teamwork made the project go smoothly. I highly recommend Abbas for any web development work.",
  },
  {
    avatar: AVTR4,
    name: "Yanca Rondon ",
    review:
      "Seyed Abbas Vaziri was a key member of our team at rCycle. He created new website pages and worked on important platform features. Abbas was dependable, quick to learn, and always ready to help. His work was top-notch and made a big difference in our projects. I highly recommend him.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
        // install Swiper modules
        modules={[ Pagination ]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonials">
              <div className="client__avatar">
                <img src={avatar} alt={name} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
