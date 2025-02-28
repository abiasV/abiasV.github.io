import React, { useRef } from 'react';
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import "./contact.css";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_39dzwqw', 'template_cfn7wmc', form.current, 'zxK8TsOC9Rl1xJgRo')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    toast.success('Successfully Sent!')
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>vaziri.as@gmail.com</h5>
            <a href="mailto:vaziri.as@gmail.com" rel="noreferrer" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Abbas Vaziri</h5>
            <a href="https://m.me/abbas.vaziri" rel="noreferrer" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+1 (647) 325-7316</h5>
            <a href="https://web.whatsapp.com/send?phone=+16473257316" rel="noreferrer" target="_blank">Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail} >
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email"  required/>
          <textarea name="message" rows="7" placeholder="Your message" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact