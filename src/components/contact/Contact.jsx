import React, { useRef } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import "./contact.css";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_39dzwqw",
        "template_cfn7wmc",
        form.current,
        "zxK8TsOC9Rl1xJgRo"
      )
      .then(
        () => toast.success("Message sent successfully."),
        () => toast.error("Message could not be sent. Please email me directly.")
      );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Have a role or project in mind?</h5>
      <h2>Let's Connect</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>vaziri.as@gmail.com</h5>
            <a href="mailto:vaziri.as@gmail.com">Send an email</a>
          </article>

          <article className="contact__option">
            <BsLinkedin className="contact__option-icon" />
            <h4>LinkedIn</h4>
            <h5>Abbas Vaziri</h5>
            <a
              href="https://www.linkedin.com/in/abbasvaziri/"
              rel="noreferrer"
              target="_blank"
            >
              View profile
            </a>
          </article>

          <article className="contact__option">
            <BsGithub className="contact__option-icon" />
            <h4>GitHub</h4>
            <h5>abiasV</h5>
            <a
              href="https://github.com/abiasV"
              rel="noreferrer"
              target="_blank"
            >
              View repositories
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your name" required />
          <input type="email" name="email" placeholder="Your email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Tell me about the role or project"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
